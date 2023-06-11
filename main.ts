input.onButtonPressed(Button.A, function on_button_pressed_a() {
    mylights.showRainbow(1, 360)
    mylights.show()
})
let item = false
let mylights : neopixel.Strip = null
mylights = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
basic.forever(function on_forever() {
    
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        item = Math.randomBoolean()
        if (item == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
        
        if (item == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
            basic.pause(300)
        }
        
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    
})
