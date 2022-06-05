def on_button_pressed_ab():
    global PIN
    if PIN == 2:
        PIN = 0
    else:
        PIN += 0 + 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

PIN = 0
PIN = 0
angulo0 = 180
angulo1 = 180
angulo2 = 180
robotbit.geek_servo2_kg(robotbit.Servos.S1, angulo0)
robotbit.geek_servo2_kg(robotbit.Servos.S2, angulo1)
robotbit.geek_servo2_kg(robotbit.Servos.S4, angulo2)

def on_forever():
    global angulo0, angulo1, angulo2
    if input.button_is_pressed(Button.B):
        if PIN == 0:
            angulo0 += -2
            robotbit.geek_servo2_kg(robotbit.Servos.S1, angulo0)
        if PIN == 1:
            angulo1 += -2
            robotbit.geek_servo2_kg(robotbit.Servos.S2, angulo1)
        if PIN == 2:
            angulo2 += -2
            robotbit.geek_servo2_kg(robotbit.Servos.S4, angulo2)
basic.forever(on_forever)

def on_forever2():
    global angulo0, angulo1, angulo2
    if input.button_is_pressed(Button.A):
        if PIN == 0:
            angulo0 += -2
            robotbit.geek_servo2_kg(robotbit.Servos.S1, angulo0)
        if PIN == 1:
            angulo1 += -2
            robotbit.geek_servo2_kg(robotbit.Servos.S2, angulo1)
        if PIN == 2:
            angulo2 += -2
            robotbit.geek_servo2_kg(robotbit.Servos.S4, angulo2)
basic.forever(on_forever2)

def on_forever3():
    pass
basic.forever(on_forever3)

def on_forever4():
    if PIN == 0:
        basic.show_leds("""
            # # . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            # # # # .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . # # #
                        . . . . #
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . #
                        . . . . #
                        . . . . #
                        . . . . #
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . #
                        . . . . #
                        . . . # #
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . # # # #
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        # . . . .
                        # # # . .
        """)
        basic.show_leds("""
            . . . . .
                        # . . . .
                        # . . . .
                        # . . . .
                        # . . . .
        """)
    if PIN == 1:
        basic.show_leds("""
            . . # # .
                        . . . . #
                        . . . . #
                        . . . . #
                        . . . . #
        """)
        basic.show_leds("""
            . . # . .
                        . # . # .
                        . . . # .
                        . . . . #
                        . . . . #
        """)
        basic.show_leds("""
            . . . . .
                        . # . . .
                        # . # . .
                        . . . # .
                        . . . . #
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        # # # # #
                        # . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . # . . .
                        # . # . .
                        . . . # .
                        . . . . #
        """)
        basic.show_leds("""
            . . # . .
                        . # . # .
                        . . . # .
                        . . . . #
                        . . . . #
        """)
        basic.show_leds("""
            . . # # .
                        . . . . #
                        . . . . #
                        . . . . #
                        . . . . #
        """)
    if PIN == 2:
        basic.show_leds("""
            . . . . .
                        # . . . #
                        # . . . #
                        . # . # .
                        . . # . .
        """)
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . # . # .
                        . # . # .
                        . . # . .
        """)
        basic.show_leds("""
            . . . . .
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
        """)
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . # . # .
                        . # . # .
                        . . # . .
        """)
        basic.show_leds("""
            . . . . .
                        # . . . #
                        # . . . #
                        . # . # .
                        . . # . .
        """)
basic.forever(on_forever4)
