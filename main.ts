/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Oct 2023
 * This program counts down from 4 using a loop
*/

// variables
let neopixelStrip: neopixel.Strip = null
let countdown: number = 4
let neopixelNumber: number = 0

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    countdown = 4
    // true loop
    while (countdown >= 0) {
        basic.pause(500)
        basic.showNumber(countdown)
        neopixelStrip.show()
        countdown = countdown - 1
        neopixelStrip.setPixelColor(neopixelNumber, neopixel.colors(NeoPixelColors.Black))
        neopixelNumber = neopixelNumber + 1
    }
    // end of loop
    basic.showIcon(IconNames.Happy)
})
