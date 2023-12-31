"""
Created by: Jack Eddy
Created on: Nov 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *
import neopixel

# variables
countdown = 4
neopixel_number = 0

# cleanup
np = neopixel.NeoPixel(pin16, 4)
np[0] = (0, 0, 0)
np[1] = (0, 0, 0)
np[2] = (0, 0, 0)
np[3] = (0, 0, 0)
np.show()


if button_a.is_pressed():
    # setup
    countdown = 4
    neopixel_number = 0
    np[0] = (0, 1, 0)
    np[1] = (0, 1, 0)
    np[2] = (0, 1, 0)
    np[3] = (0, 1, 0)
    # true loop
    while countdown >= 0:
        sleep(500)
        display.show(countdown)
        np.show()
        countdown = countdown - 1
        np[neopixel_number] = (0, 0, 0)
        neopixel_number = neopixel_number + 1
        # end loop
    else:
        display.show(Image.HAPPY)
