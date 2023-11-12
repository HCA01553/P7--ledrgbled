led.enable(true)
basic.showString("7")
pins.analogWritePin(AnalogPin.P0, 1023)
pins.analogWritePin(AnalogPin.P1, 1023)
pins.analogWritePin(AnalogPin.P2, 1023)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
    for (let index = 0; index < 2; index++) {
        for (let カウンター = 0; カウンター <= 513; カウンター++) {
            pins.analogWritePin(AnalogPin.P0, カウンター)
            pins.analogWritePin(AnalogPin.P1, 512 - カウンター)
            pins.analogWritePin(AnalogPin.P2, 1023 - カウンター)
            basic.pause(1)
        }
        for (let カウンター = 0; カウンター <= 513; カウンター++) {
            pins.analogWritePin(AnalogPin.P0, 512 - カウンター)
            pins.analogWritePin(AnalogPin.P1, 1023 - カウンター)
            pins.analogWritePin(AnalogPin.P2, カウンター)
            basic.pause(1)
        }
    }
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
})
