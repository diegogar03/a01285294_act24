input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            # . . . .
            . # . . .
            # . # . .
            # . . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . # # . .
            # . . # #
            `)
        basic.clearScreen()
    }
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 15))
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.clearScreen()
})
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
basic.clearScreen()
