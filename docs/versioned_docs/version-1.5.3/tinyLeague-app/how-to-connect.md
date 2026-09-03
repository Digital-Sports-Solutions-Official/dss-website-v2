---
id: how-to-connect
title: How to Connect
sidebar_position: 3
---

## 📶 Connecting to your Module

#### Follow these steps to get connected and running in minutes!

---

## 🔗 Step-by-Step Instructions

1. Open the **tinyLeague™ Hub app** on your smart device.

2. Tap the **Shot Clock Icon** in the top left of the screen to access the Connections Menu.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.4/Light_Mode/Main_Timer_Light.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.4/Dark_Mode/Main_Timer_Dark.png"
    alt="tL Logo"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Select the button in the top left corner of your screen</p>
</div>

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.4/Light_Mode/ShotClk_Icon_black.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.4/Dark_Mode/ShotClk_Icon_white.png"
    alt="tL Logo"
    style={{ maxWidth: '90%' }}
  />
  <p style={{ fontStyle: 'italic' }}>Tap this button to navigate to the Connections Menu</p>
</div>

3. Accept any permissions required for the settings by tapping **"Allow"** on the prompts.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.4/Light_Mode/Permission_Screen_Light.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.4/Dark_Mode/Permission_Screen_Dark.png"
    alt="tL Logo"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Allow the needed permissions to access connections</p>
</div>

4. The app will scan for nearby shot clock modules via **BLE**. Under the **Available Devices Section**, tap the ➕ next to **Founders**, or if you have renamed your device, select your device name from the list.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.4/Light_Mode/Available_Devices_Light.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.4/Dark_Mode/Available_Devices_Dark.png"
    alt="tL Logo"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Example of the available devices list in the Connections Menu</p>
</div>

If you have previously connected to your module, it will show up in the **Saved Devices Section**. Tap the ➕ to connect to your device.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.4/Light_Mode/Saved_Devices_Light.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.4/Dark_Mode/Saved_Devices_Dark.png"
    alt="tL Logo"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Example of the saved devices list in the Connections Menu</p>
</div>

> ✅ Make sure your unit is powered on and ready to be connected.

5. Wait for the BLE connection to be established. If the connection is not established, re-select your device to try again.
6. Once connected, you'll see the Currently Paired section updated with your device name. Tapping the ⚙ icon will take to your [Device Settings](/docs/tinyLeague-app/device-settings).

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
