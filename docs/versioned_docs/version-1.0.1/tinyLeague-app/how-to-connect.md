---
id: how-to-connect
title: How to Connect
sidebar_position: 2
---

## 📶 Connecting to your Module

#### The tinyLeague™ Hub app uses **Bluetooth Low Energy (BLE)** to connect to your modules. Follow these steps to get up and running in minutes!

---

## 🔗 Step-by-Step Instructions

1. **Open the tinyLeague™ Hub app** on your Android smart device.
2. Tap the **⚙ Settings icon** in the top right of the screen to access the settings menu.
3. Accept any permissions required for the settings by tapping **"Allow"** on the prompts.
4. The app will scan for nearby shot clock modules via **BLE**. Under the [Available Devices Section](./settings#-available-devices), tap **"Founders"**, or if you have renamed your device, select your device name from the list.

import useBaseUrl from '@docusaurus/useBaseUrl';

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <img src={useBaseUrl('https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/App_Screenshots/available-devices-screenshot.png')} alt="Available Devices Screenshot" style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
  <p style={{ fontStyle: 'italic' }}>Example of the available devices list in the Settings menu</p>
</div>

> ✅ Make sure your unit is powered on and ready to be connected.

5. Wait for the BLE connection to be established. If the connection is not established, re-select your deivce to try again.
6. Once selected, you'll see the settings page updated with your devices name, marked as **Connected**.

---

## 📶 Required Permissions

To ensure a successful connection, the app may prompt you to grant the following:

- **Bluetooth Access** – To scan and connect with nearby devices.
- **Nearby Devices Permission** – Required for Bluetooth discovery on Android 12+.
- **Location Permission** – Required by Android for Bluetooth device scanning.

> 🔐 We do **not** collect or store your location — this is purely required by Android’s Bluetooth APIs.

---

## 🛠 Troubleshooting

- **Device not showing up?** Ensure your unit is powered on and nearby.
- **Permissions denied?** Go to Android Settings → Apps → tinyLeague Hub → Permissions, and enable "Nearby Devices" + "Location".
- **Not connecting?** Try restarting your module and the app.
- **Still having issues?** Visit our Troubleshooting and FAQ sections for further support.
