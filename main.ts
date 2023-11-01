/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Oct 2023
 * This program counts down from 4 using a loop
*/

// varriables
let neopixelStrip: neopixel.Strip = null
let countdown = 4
let neopixelAmount = countdown

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  countdown = 4
  neopixelStrip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
  while (countdown >= 0) {
    basic.pause(500)
    basic.showNumber(countdown)
    neopixelStrip.show()
    countdown = countdown - 1
  }
  basic.showIcon(IconNames.Happy)
})