<img src="https://github.com/rwldrn/johnny-five/raw/master/assets/sgier-johnny-five.png">

# Node-isassemble Johnny-Five


### [Firmata](https://github.com/jgautier/firmata) powered JavaScript Arduino programming framework.

### Johnny-Five artwork by [Mike Sgier](http://msgierillustration.com)



## Many fragments. Some large, some small.


### [Slider Controlled Panning Servo](http://jsfiddle.net/rwaldron/kZakv/show/light/)
### [Joystick Controlled Laser (pan/tilt) 1](http://jsfiddle.net/rwaldron/HPqms/show/light/)
### [Joystick Controlled Laser (pan/tilt) 2](http://jsfiddle.net/rwaldron/YHb7A/show/light/)
### [Joystick Controlled Claw](http://jsfiddle.net/rwaldron/6ZXFe/show/light/)
### [Robot Claw](http://jsfiddle.net/rwaldron/CFSZJ/show/light/)
### [Joystick, Motor & Led](http://jsfiddle.net/rwaldron/gADSz/show/light/)



## Assemble Arduino

- Download and open the [Arduino IDE](http://arduino.cc/hu/Main/Software)
- Plug in your Arduino or Arduino compatible microcontroller via USB
- From the IDE, select: File > Examples > Firmate > StandardFirmata
- Click the "Upload" button.

If the upload was successful, the board is now prepared and you can close the Arduino IDE.


**Attention** There is a known issue in where the Firmata protocol layer has issues freeing itself on the serial line which results in the program hanging in when it tries to connect. For now, the only way to get around the issue is to send a SIGINT ` ^C ` to kill the hanging program and simply run it again.


## Hey you, here's Johnny!

#### Source Code:

``` bash
git clone git://github.com/rwldrn/johnny-five.git && cd johnny-five

npm install
```

#### npm package:

Install the module with:

```bash
npm install johnny-five
```


## Johnny-Five is...


```javascript
var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {

  // Create an Led on pin 13 and strobe it on/off
  // Optionall set the speed; defaults to 100ms
  (new five.Led(13)).strobe();

});
```

#### [Watch it here!](http://jsfiddle.net/rwaldron/dtudh/show/light)


## More Input

- [Accelerometer Pan Tilt](https://github.com/rwldrn/johnny-five/blob/master/docs/accelerometer-pan-tilt.md)
- [Accelerometer](https://github.com/rwldrn/johnny-five/blob/master/docs/accelerometer.md)
- [Board Multi](https://github.com/rwldrn/johnny-five/blob/master/docs/board-multi.md)
- [Board](https://github.com/rwldrn/johnny-five/blob/master/docs/board.md)
- [Boe Test Servos](https://github.com/rwldrn/johnny-five/blob/master/docs/boe-test-servos.md)
- [Button Options](https://github.com/rwldrn/johnny-five/blob/master/docs/button-options.md)
- [Button](https://github.com/rwldrn/johnny-five/blob/master/docs/button.md)
- [Claw](https://github.com/rwldrn/johnny-five/blob/master/docs/claw.md)
- [Continuous Clock](https://github.com/rwldrn/johnny-five/blob/master/docs/continuous-clock.md)
- [Continuous](https://github.com/rwldrn/johnny-five/blob/master/docs/continuous.md)
- [Gp2y0d805z0f](https://github.com/rwldrn/johnny-five/blob/master/docs/gp2y0d805z0f.md)
- [Hmc5883l](https://github.com/rwldrn/johnny-five/blob/master/docs/hmc5883l.md)
- [Ir](https://github.com/rwldrn/johnny-five/blob/master/docs/ir.md)
- [Joystick Claw](https://github.com/rwldrn/johnny-five/blob/master/docs/joystick-claw.md)
- [Joystick Laser](https://github.com/rwldrn/johnny-five/blob/master/docs/joystick-laser.md)
- [Joystick Motor Led](https://github.com/rwldrn/johnny-five/blob/master/docs/joystick-motor-led.md)
- [Joystick](https://github.com/rwldrn/johnny-five/blob/master/docs/joystick.md)
- [Laser](https://github.com/rwldrn/johnny-five/blob/master/docs/laser.md)
- [Lcd](https://github.com/rwldrn/johnny-five/blob/master/docs/lcd.md)
- [Led Fade](https://github.com/rwldrn/johnny-five/blob/master/docs/led-fade.md)
- [Led On Off](https://github.com/rwldrn/johnny-five/blob/master/docs/led-on-off.md)
- [Led Pulse](https://github.com/rwldrn/johnny-five/blob/master/docs/led-pulse.md)
- [Led Rgb](https://github.com/rwldrn/johnny-five/blob/master/docs/led-rgb.md)
- [Led Strobe](https://github.com/rwldrn/johnny-five/blob/master/docs/led-strobe.md)
- [Magnetometer North](https://github.com/rwldrn/johnny-five/blob/master/docs/magnetometer-north.md)
- [Magnetometer Servo](https://github.com/rwldrn/johnny-five/blob/master/docs/magnetometer-servo.md)
- [Magnetometer](https://github.com/rwldrn/johnny-five/blob/master/docs/magnetometer.md)
- [Motor](https://github.com/rwldrn/johnny-five/blob/master/docs/motor.md)
- [Navigator Joystick](https://github.com/rwldrn/johnny-five/blob/master/docs/navigator-joystick.md)
- [Navigator Ping](https://github.com/rwldrn/johnny-five/blob/master/docs/navigator-ping.md)
- [Navigator](https://github.com/rwldrn/johnny-five/blob/master/docs/navigator.md)
- [Piezo](https://github.com/rwldrn/johnny-five/blob/master/docs/piezo.md)
- [Ping Radar](https://github.com/rwldrn/johnny-five/blob/master/docs/ping-radar.md)
- [Ping](https://github.com/rwldrn/johnny-five/blob/master/docs/ping.md)
- [Pir](https://github.com/rwldrn/johnny-five/blob/master/docs/pir.md)
- [Potentiometer](https://github.com/rwldrn/johnny-five/blob/master/docs/potentiometer.md)
- [Proximity](https://github.com/rwldrn/johnny-five/blob/master/docs/proximity.md)
- [Radar](https://github.com/rwldrn/johnny-five/blob/master/docs/radar.md)
- [Repl](https://github.com/rwldrn/johnny-five/blob/master/docs/repl.md)
- [Sensor Fsr Servo](https://github.com/rwldrn/johnny-five/blob/master/docs/sensor-fsr-servo.md)
- [Sensor Fsr](https://github.com/rwldrn/johnny-five/blob/master/docs/sensor-fsr.md)
- [Sensor Ir Led Receiver](https://github.com/rwldrn/johnny-five/blob/master/docs/sensor-ir-led-receiver.md)
- [Sensor Slider](https://github.com/rwldrn/johnny-five/blob/master/docs/sensor-slider.md)
- [Sensor](https://github.com/rwldrn/johnny-five/blob/master/docs/sensor.md)
- [Servo Array](https://github.com/rwldrn/johnny-five/blob/master/docs/servo-array.md)
- [Servo Diagnostic](https://github.com/rwldrn/johnny-five/blob/master/docs/servo-diagnostic.md)
- [Servo Digital](https://github.com/rwldrn/johnny-five/blob/master/docs/servo-digital.md)
- [Servo Dual](https://github.com/rwldrn/johnny-five/blob/master/docs/servo-dual.md)
- [Servo Tutorial](https://github.com/rwldrn/johnny-five/blob/master/docs/servo-tutorial.md)
- [Servo](https://github.com/rwldrn/johnny-five/blob/master/docs/servo.md)
- [Slider Pan](https://github.com/rwldrn/johnny-five/blob/master/docs/slider-pan.md)
- [Slider Servo Control](https://github.com/rwldrn/johnny-five/blob/master/docs/slider-servo-control.md)
- [Socket](https://github.com/rwldrn/johnny-five/blob/master/docs/socket.md)
- [Sonar Scan](https://github.com/rwldrn/johnny-five/blob/master/docs/sonar-scan.md)
- [Sonar](https://github.com/rwldrn/johnny-five/blob/master/docs/sonar.md)




## Contributing
All contributions must adhere to the the [Idiomatic.js Style Guide](https://github.com/rwldrn/idiomatic.js),
by maintaining the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Rick Waldron <waldron.rick@gmail.com>
Licensed under the MIT license.
