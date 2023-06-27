# Power

## Powering Off

After C.H.I.P. Pro has been flashed with a new image you can power off the board by holding the power button on the dev board down (for about 5 seconds). Wait for the power and status LEDs to turn off.

![power off button](images/poweroffB.gif)

If running processes while connected to C.H.I.P. Pro we recommend powering off C.H.I.P. Pro via command line:

**Buildroot**

```
poweroff
```

**Debian**

```
sudo poweroff
```

In this instance the software puts all processes away properly making it is safe to remove the power supply from the Dev Kit without the risk of losing data.

## Power C.H.I.P. Pro Dev Kit

![image page](images/powerIn.jpg)

There are three ports on the Dev Kit that support three different power supplies:

* **Micro USB port** - Use either an AC/DC adapter or powered USB hub with a micro USB plug.
* **JST-PH 2.0mm** - Connect a rechargeable 3.7V lithium polymer battery to the JST port. Press the On/Off button to power C.H.I.P. Pro. Charge a LiPo battery connected to this port by connecting an AC adapter to the barrel jack.
* **DC-IN barrel jack** - Plug in a 6 - 23V AC/DC adapter (we recommend getting one that supplies 12V and 1 amps).

Power can also be provided to **three pins** to power C.H.I.P. Pro:

* **CHG-IN** - connect 4.8 to 6 V of power to pin 4 (and GND) to provide power to C.H.I.P. Pro. If you have a 3.7V Lithium Polymer (LiPo) battery connected to BAT, then power provided to CHGIN will also charge the battery.
* **BAT** - connect a 3.7V Lithium Polymer (LiPo) battery to pin 8 (and GND) to provide power to C.H.I.P. Pro. You can charge the battery by providing voltage to the CHG-IN pin. When a battery is connected, short the PWRON (PWR) pin to ground for 2 seconds to start current flow.
* **VBUS** - connect 5V to pin 50 (and GND to pin 53) to provide power to C.H.I.P. Pro.

## Power Out

The C.H.I.P. Pro Dev kit can provide power to sensors and peripherals.

* **VCC-3V3** - pin 2 provides 3.3V for sensors and anything else. This pin can provide a maximum of 800mA. The 800mA supply takes into account system load and can vary depending on what the Wifi module and GR8 SOC are requiring from the AXP209 power management IC.
* For your servo needs PWM0 and PWM1 breakout through-holes provide 5V volts and 2.5A.
* **IPSOUT** - pin 3, this is AXP209’s **I**ntelligent **P**ower **S**elect pin. It automatically supplies current from available sources based on logic set in the registers.
* **USB1 Host** - provide power to USB peripherals.
* **PWRON** - connect to ground to turn C.H.I.P. Pro on and boot the operating system.

## Battery Charging and BTS Pin

The Dev Kit uses the **AXP209 IC** to manage charging. Pin 7 marked **BATTEMP or BTS** is directly connected to the **TS** pin on the AXP209. This pin supports a thermistor to monitor the battery temperature when the battery is charging or discharging.  If you do not incorporate a thermistor into your setup the pin may float from ground interferring with how much charge current is throttled to the **BAT** pin and the **JST connector**. To ensure maximum charge current without a thermistor disable the battery temperature monitoring system.

There are two ways to do this:

* Connect BTS pin to ground
* Disable the temperature functionality in software:

```shell
sudo i2cset -y -f 0 0x34 0x82 0x82
```

The AXP209 IC is seen as a I2C device on C.H.I.P. Pro. By default the AXP209 is tuned for a 10KΩ 1% thermistor at 25°C with a programmable register for thermistor current to adapt to different devices. You can find more information on this setup in the [AXP209 Datasheet](https://github.com/NextThingCo/CHIP-Hardware/blob/master/CHIP%5Bv1_0%5D/CHIPv1_0-BOM-Datasheets/AXP209_Datasheet_v1.0en.pdf). Search "ts pin" to quickly find information.

## AXP209 Power Management

There are several ways to power the C.H.I.P. Pro Dev Kit and your creative endeavors. The Dev Kit boasts a AXP209 Power System Management IC designed to switch to any available power source. The following table details what happens with some different power scenarios.

Power Source | Result
----|----
Battery | C.H.I.P. Pro is powered by battery, USB1 does not receive 5V
Battery + DC In | C.H.I.P. Pro is powered by DC In, battery can be charged up to 1.8A
Battery + USB In | C.H.I.P. Pro is powered by USB in, battery can be charged up to 900mA by default, more if the no-limit setting is used
Battery + DC In + USB In | C.H.I.P. Pro is powered by DC In, battery is charged
Battery + low amperage DC or USB In | Battery powers C.H.I.P. Pro as needed to prevent shut down

Overvoltage can cause permanent damage. Find more details for each port's specifications in the [C.H.I.P. Pro datasheet](https://github.com/NextThingCo/CHIP_Pro-Hardware/blob/master/v0.9/Datasheets/CHIP_PRO_Datasheet_v1.0.pdf) and [AXP209 Datasheet.](https://github.com/NextThingCo/CHIP-Hardware/blob/master/CHIP%5Bv1_0%5D/CHIPv1_0-BOM-Datasheets/AXP209_Datasheet_v1.0en.pdf)
