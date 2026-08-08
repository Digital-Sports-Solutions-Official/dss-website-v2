---
id: how-set-up
title: How to set-up
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## ⚙️ Setting Up the Founders Edition Shot Clock

Getting started with your **Founders Edition** module is quick and easy. Follow the steps below to power on the unit and prepare it for Bluetooth connection with the **tinyLeague™ Hub app**.

---

<div style={{ textAlign: 'center', margin: '2rem 0' }}>
  <img
    src={useBaseUrl('https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Product_Photos/Founders_Edition_Front.png')}
    alt="Founders Edition Unit"
    style={{ maxWidth: '90%', borderRadius: '12px', boxShadow: '0 6px 18px rgba(0,0,0,0.15)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Founders Edition Shot Clock — ready to power on</p>
</div>

---

## 🔋 Step 1 – Ensure the Battery is Charged

Each Founders Edition unit comes with a **10,000mAh rechargeable battery bank**.

- 🔌 Charge the battery using a USB-C cable for best results
- 💡 The provided banks have indicator LEDs to show charge level. Make sure the battery has at least **1–2 LEDs** before proceeding, but **3-4 LEDs** is reccomended.

:::caution
Do **not** attempt to power the module using a wall outlet or non-battery power source. Only use the included battery bank or a compatible USB power source.
:::

---

## 📡 Step 2 - Attach the antenna

Attach the included RF antenna to the back antenna port on your module. This is done simply by screwing the antenna onto the RF jack. This will signifigantly increase the connection range of your module.

---

## 🔌 Step 3 – Connect the Battery to the Clock

Using the included USB-A to USB-C cable:

1. Plug the USB-C connector into the **USB C input on the compute module** (if not already plugged in), visible from the back and side.
2. Plug the USB-A into the **battery bank’s USB output port**.

The compute module powers on automatically once it receives power.

:::tip
The Type-C port on the compute module may be difficult to access. We recommend you keep the USB cable plugged into the compute module and unplug the battery bank at the USB-A (Battery Side) for easier use
:::

---

## 🔵 Step 4 – Look for the Blue Spinning Dot

Once the module powers on:

- The **seven-segment display** will briefly flash
- Then it will begin showing a **blue spinning dot animation**

This means the unit is **advertising itself via Bluetooth** and is ready to pair with the app.

:::caution
If the display stays blank or doesn’t start the animation within 10 seconds, double-check:
- The battery charge level
- The USB cable connection (both ends)

If the display shows the blue spinning dot, but it is not moving around the seven-segments, restart your module.
:::

---

## 📱 Step 5 – Connect via the tinyLeague™ Hub App

Open the [tinyLeague™ Hub app](/docs/tinyLeague-app/app-installation) on your Android device.

1. Go to **Settings → Available Devices**
2. Look for your module in the Bluetooth list
3. Tap to connect

Once connected, the display will stop spinning and respond to timer controls.

:::info
Do **not** attempt to connect through Android Bluetooth settings. Always pair from inside the **tinyLeague™ Hub app** to ensure proper communication.
:::

---

Looking for an easy way to get started practicing with your unit? Check out the [Easy Tabletop Stand](/docs/shotclock-stands/tabletop-stand)!

Need help connecting? Visit our [How to Connect guide](/docs/tinyLeague-app/how-to-connect) for Bluetooth troubleshooting tips.
