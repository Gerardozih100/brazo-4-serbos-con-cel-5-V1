bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    if (PIN == 3) {
        PIN = 0
    } else {
        PIN += 0 + 1
    }
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showArrow(ArrowNames.North)
        if (SERVO == 1) {
            if (angulo1 == 181) {
                angulo1 = 0
            } else {
                angulo1 += 0 + 10
                robotbit.Servo(robotbit.Servos.S2, angulo1)
            }
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        basic.showArrow(ArrowNames.South)
        if (SERVO == 1) {
            if (angulo1 == -1) {
                angulo1 = 180
            } else {
                angulo1 += 0 - 10
                robotbit.Servo(robotbit.Servos.S2, angulo1)
            }
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        basic.showArrow(ArrowNames.West)
        if (BUTTON_3_DOWN == 181) {
            BUTTON_3_DOWN = 0
        } else {
            BUTTON_3_DOWN += 0 + 10
            robotbit.Servo(robotbit.Servos.S1, BUTTON_3_DOWN)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        basic.showArrow(ArrowNames.East)
        if (BUTTON_4_DOWN == -1) {
            BUTTON_4_DOWN = 180
        } else {
            BUTTON_4_DOWN += 0 - 10
            robotbit.Servo(robotbit.Servos.S1, BUTTON_4_DOWN)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        basic.showString("A")
        SERVO = 1
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        basic.showString("B")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        basic.showString("C")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        basic.showString("D")
    } else {
    	
    }
})
let SERVO = 0
let BUTTON_4_DOWN = 0
let BUTTON_3_DOWN = 0
let angulo1 = 0
let PIN = 0
PIN = 0
let angulo0 = 90
angulo1 = 90
let angulo2 = 90
let angulo3 = 90
BUTTON_3_DOWN = 90
BUTTON_4_DOWN = 90
SERVO = 0
robotbit.Servo(robotbit.Servos.S1, angulo0)
robotbit.Servo(robotbit.Servos.S2, angulo1)
robotbit.Servo(robotbit.Servos.S3, angulo2)
robotbit.Servo(robotbit.Servos.S4, angulo3)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        if (PIN == 0) {
            angulo0 += -2
            robotbit.Servo(robotbit.Servos.S1, angulo0)
        }
        if (PIN == 1) {
            angulo1 += -2
            robotbit.Servo(robotbit.Servos.S2, angulo1)
        }
        if (PIN == 2) {
            angulo2 += -2
            robotbit.Servo(robotbit.Servos.S3, angulo2)
        }
        if (PIN == 3) {
            angulo3 += -2
            robotbit.Servo(robotbit.Servos.S4, angulo3)
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (PIN == 0) {
            angulo0 += 2
            robotbit.Servo(robotbit.Servos.S1, angulo0)
        }
        if (PIN == 1) {
            angulo1 += 2
            robotbit.Servo(robotbit.Servos.S2, angulo1)
        }
        if (PIN == 2) {
            angulo2 += 2
            robotbit.Servo(robotbit.Servos.S3, angulo2)
        }
        if (PIN == 3) {
            angulo3 += 2
            robotbit.Servo(robotbit.Servos.S4, angulo3)
        }
    }
})
basic.forever(function () {
    if (PIN == 0) {
        basic.showLeds(`
            . . . . .
            . # . . .
            # # . . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . # #
            . . . # .
            . . . . .
            `)
    }
    if (PIN == 1) {
        basic.showLeds(`
            . . # # .
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # . . . .
            `)
    }
    if (PIN == 2) {
        basic.showLeds(`
            . # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . # . . .
            # # # # #
            `)
    }
    if (PIN == 3) {
        basic.showLeds(`
            . . . . .
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
