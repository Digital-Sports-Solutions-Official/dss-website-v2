---
id: settings
title: Settings
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## ⚙️ Settings Menu Overview

This guide provides a breakdown of all settings found in the tinyLeague™ Hub app, from device management to advanced preferences. Use the visuals below to get familiar with each feature.

---

### 📶 Available Devices

This section lets you scan for and connect to available tinyLeague™ modules over Bluetooth.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <img
    src={useBaseUrl('https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/App_Screenshots/settings_available_devices_searching.png')}
    alt="Searching for Available Devices"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Scan for nearby modules to connect to</p>
</div>

<div style={{ textAlign: 'center', marginBottom: '2rem' }}>
  <img
    src={useBaseUrl('https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/App_Screenshots/settings_available_devices_connected.png')}
    alt="Connected Device Screenshot"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Device connected and ready</p>
</div>

---

### ✏️ Rename Module

Change the display name of the connected module — perfect for identifying clocks by location (e.g., "Court A", "Left Shot Clock").

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <img
    src={useBaseUrl('https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/App_Screenshots/settings_rename_module.png')}
    alt="Rename Module Screenshot"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Enter a custom label for your connected device</p>
</div>

:::info
The name for the Founders Edition Shot Clock Module has a default character limit of 14.
:::

---

### 🎨 Color Controls

Select primary and secondary LED colors to match team colors or improve visibility. Changes are immediately applied to the connected module.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <img
    src={useBaseUrl('https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/App_Screenshots/settings_primary_secondary_color_controls.png')}
    alt="Color Controls Screenshot"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Customize your display's LED color scheme</p>
</div>

:::info
Primary color sets the color of the clock when the time is above 5 seconds. Secondary color sets the color of the clock for the last 5 seconds, during the tenth-of-a-second rundown timer.
:::

---

### 🔒 Settings PIN

Add a layer of protection by requiring a PIN to access settings. Great for ensuring volunteers or players don’t modify critical configuration.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <img
    src={useBaseUrl('https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/App_Screenshots/settings_pin_enabled.png')}
    alt="Settings PIN Screenshot"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>PIN-protect sensitive settings access</p>
</div>

---

### ⏱ Timer Settings

Adjust the default values for high and low player count shot clock durations. These will affect how much time appears on the clock when reset after the [High/Low Switch](/docs/tinyLeague-app/how-to-use#-high--low-toggle-switch) is toggled.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <img
    src={useBaseUrl('https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/App_Screenshots/settings_timer_settings.png')}
    alt="Timer Settings Screenshot"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Fine-tune timing presets for game flow</p>
</div>

:::info
Setting the high and low shot clock limits to the same value will result in the [Timer Switch](/docs/tinyLeague-app/how-to-use#-high--low-toggle-switch) doing nothing.
:::

---

### 🔊 Sound Settings

Enable audio cues and buzzer alerts for players and officials. These can be toggled independently for noise-conscious environments.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <img
    src={useBaseUrl('https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/App_Screenshots/settings_sound_settings.png')}
    alt="Sound Settings Screenshot"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Control buzzer and in-game sound behavior</p>
</div>

---

### 🔁 True Undo

When enabled, the app will continue tracking clock time in the background after a reset, allowing for more accurate "Undo" operations.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <img
    src={useBaseUrl('https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/App_Screenshots/settings_true_undo.png')}
    alt="True Undo Screenshot"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Enhance undo accuracy by tracking elapsed time</p>
</div>

---

### 📲 Module Firmware Update

Upon connecting to your shot clock module, you may be prompted to perform a wireless **firmware update** using **Over-The-Air (OTA)** technology. Please acknowledge all three checkboxes, and set the phone as close as possible to ensure the module recieves all needed data.

:::tip
**The DSS™ team reccommends all users update their firmware via OTA whenever prompted. This ensures your modules firmware is always working as best as possible!**
:::


<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <img
    src={useBaseUrl('https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/App_Screenshots/settings_ota_update.png')}
    alt="OTA Screenshot"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Stay up-to-date by following along with this prompt whenever you see it</p>
</div>