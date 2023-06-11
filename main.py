def on_button_pressed_a():
    mylights.show_rainbow(1, 360)
    mylights.show()
input.on_button_pressed(Button.A, on_button_pressed_a)

item = False
mylights: neopixel.Strip = None
mylights = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)

def on_forever():
    global item
    if maqueen.ultrasonic(PingUnit.CENTIMETERS) < 15 and maqueen.ultrasonic(PingUnit.CENTIMETERS) != 0:
        item = Math.random_boolean()
        if item == True:
            maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
            maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        if item == False:
            maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
            basic.pause(300)
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
basic.forever(on_forever)
