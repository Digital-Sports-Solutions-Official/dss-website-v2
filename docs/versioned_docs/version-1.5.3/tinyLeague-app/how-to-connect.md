---
id: how-to-connect
title: How to Connect
description: Pair the tinyLeague™ Hub app with your shot clock module over Bluetooth, including the permissions it needs and what to try if it fails.
sidebar_position: 3
---

## 📶 Connecting to your Module

**Follow these steps to get connected and running in minutes!**

---

## 🔗 Step-by-Step Instructions

1. Open the **tinyLeague™ Hub app** on your smart device.

2. Tap the **Shot Clock Icon** in the top left of the screen to access the Connections Menu.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Light_Mode/Main_Timer_Light.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Dark_Mode/Main_Timer_Dark.png"
    alt="The tinyLeague Hub main timer screen, with the shot clock icon in the top left"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
</div>

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <p style={{ fontStyle: 'italic' }}>Icon to tap to navigate to the Connections Menu</p>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Light_Mode/ShotClk_Icon_black.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Dark_Mode/ShotClk_Icon_white.png"
    alt="The shot clock icon that opens the Connections Menu"
    style={{ maxWidth: '110px' }}
  />
</div>

3. Accept any permissions required for the settings by tapping **"Allow"** on the prompts.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Light_Mode/Connections_Permissions_Light.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Dark_Mode/Connections_Permissions_Dark.png"
    alt="The Permissions Required panel, with toggles for Location (Precise) and Nearby Devices (Bluetooth) above an Open App Settings button"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Both toggles must be on</p>
</div>

4. The app will scan for nearby shot clock modules via **BLE**. Under **Available**, tap the ➕ next to **Founders**, or if you have renamed your device, select your device name from the list.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Light_Mode/Connections_Available_Light.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Dark_Mode/Connections_Available_Dark.png"
    alt="The Available section of the Connections Menu, listing nearby devices each with a plus button, still scanning"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Nearby modules appear under Available, each with a ➕ to connect</p>
</div>

If you have previously connected to your module, it will show up under **Saved**. Tap the ➕ to connect to your device.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Light_Mode/Connections_Saved_Light.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Dark_Mode/Connections_Saved_Dark.png"
    alt="The Saved section above the Available list, the saved device showing a trash button and a plus button"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>A previously connected module sits under Saved, with 🗑 and ➕ beside it</p>
</div>

> ✅ Make sure your unit is powered on and ready to be connected.

5. Wait for the BLE connection to be established. If the connection is not established, re-select your device to try again.
6. Once connected, your device moves to the **Paired** section at the top of the Connections Menu. Tapping the ⚙ icon will take you to your [Device Settings](/docs/tinyLeague-app/device-settings).

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Light_Mode/Connections_Paired_Light.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Dark_Mode/Connections_Paired_Dark.png"
    alt="The Paired section above the Available list, the connected device showing a single gear button"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>A connected device sits under Paired, with the ⚙ icon replacing the ➕</p>
</div>

---

## 📶 Required Permissions

To ensure a successful connection, the app may prompt you to grant the following:

- **Bluetooth Access** – To scan and connect with nearby devices.
- **Nearby Devices Permission** – Required for Bluetooth discovery on iOS and Android 12+.
- **Location Permission** – Required by iOS and Android for Bluetooth device scanning.

> 🔐 We do **not** collect or store your location. This is purely required by the Bluetooth APIs.

---

## 🛠 Troubleshooting

- **Device not showing up?** Ensure your unit is powered on and nearby.
- **Not connecting?** Try restarting your module and the app.
- **Still having issues?** Visit our Troubleshooting and FAQ sections for further support.
