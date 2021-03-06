var color = require("colors"),
    five = require("../lib/johnny-five.js"),
    board, colors, servo, mag, count, dirs, lock;

board = new five.Board();

board.on("ready", function() {

  count = -1;
  dirs = [ "cw", "ccw" ];
  lock = false;

  [
    [ 92, "ccw" ],
    [ 88, "cw" ]

  ].forEach(function( def ) {
    five.Servo.prototype[ def[1] ] = function() {
      this.move( def[0] );
    };
  });


  // Create a new `servo` hardware instance.
  servo = new five.Servo({
    pin: 9,
    // `type` defaults to standard servo.
    // For continuous rotation servos, override the default
    // by setting the `type` here
    type: "continuous"
  });


  // Create an I2C `Magnetometer` instance
  mag = new five.Magnetometer();

  this.repl.inject({
    servo: servo,
    mag: mag
  });

  // set the continuous servo to stopped
  servo.move( 90 );

  // As the heading changes, log heading value
  mag.on("headingchange", function() {
    var log;

    log = ( this.bearing.name + " " + Math.floor(this.heading) + "°" );

    console.log(
      log[ colors[ this.bearing.abbr ] ]
    );



    if ( !lock && this.bearing.name === "North" ) {
      // Set redirection lock
      lock = true;

      // Redirect
      servo[ dirs[ ++count % 2 ] ]();

      // Release redirection lock
      board.wait( 2000, function() {
        lock = false;
      })
    }
  });

  this.wait( 2000, function() {
    servo[ dirs[ ++count % 2 ] ]();
  });
});

colors = {
  N: "red",
  NbE: "red",
  NNE: "red",
  NEbN: "red",
  NE: "yellow",
  NEbE: "yellow",
  ENE: "yellow",
  EbN: "yellow",
  E: "green",
  EbS: "green",
  ESE: "green",
  SEbE: "green",
  SE: "green",
  SEbS: "cyan",
  SSE: "cyan",
  SbE: "cyan",
  S: "cyan",
  SbW: "cyan",
  SSW: "cyan",
  SWbS: "blue",
  SW: "blue",
  SWbW: "blue",
  WSW: "blue",
  WbS: "blue",
  W: "magenta",
  WbN: "magenta",
  WNW: "magenta",
  NWbW: "magenta",
  NW: "magenta",
  NWbN: "magenta",
  NNW: "magenta",
  NbW: "red"
};
