basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, pins.map(
    input.acceleration(Dimension.X),
    0,
    1023,
    0,
    1023
    ))
})
