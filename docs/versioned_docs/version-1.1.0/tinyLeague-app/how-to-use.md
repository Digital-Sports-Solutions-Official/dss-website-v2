---
id: how-to-use
title: How to Use
sidebar_position: 5
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ImageSwitcher from '@site/src/components/ImageSwitcher';

## ⏱ Using the Shot Clock Timer Interface

This guide walks you through the main timer interface of the tinyLeague™ Hub app. Whether you're resetting the clock, changing the time, or switching between high/low settings — here's what every button does.

---

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.4/Light_Mode/Main_Timer_Light.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.4/Dark_Mode/Main_Timer_Dark.png"
    alt="tL Logo"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>The main timer interface</p>
</div>

---

## 🧭 Interface Breakdown

### ➖ / ➕ Increment Buttons

- Located at the top, beside the current shot clock
- **Decrease or increase the time on the current shot clock** by 1 second, or 0.1 seconds for the last 5 seconds of the clock
- Dynamically updates the displayed time on both the application and on your connected module

:::tip
Use these buttons during a pause to correct the clock, perfect for making quick adjustments.
:::

---

### 🟧 Reset & Unpause Button

- Large central button
- Resets the shot clock to current max time limit **and immediately unpauses it**
- While the clock is running, this button will change to say **"Reset"**, as it cannot unpause the clock if it is already running

:::info
This is your main in-game control — one tap to reset and resume play instantly.
:::

---

### 🎚 High / Low Toggle Switch

- Sets the max clock to High or Low, respective to the switch's position
- Using this swaps the current max time with its high/low counterpart, which can be customized in [Timer Settings](/docs/tinyLeague-app/settings#-timer-settings)
- New max clock will be applied upon next reset

:::note
Switching to "Low" or "High" automatically updates the current shot clock reset time on your module as well via BLE.
:::

---

### ↩ Undo Button

- Reverts the **most recent reset action**, regardless if it was a reset from unpased or paused
- Helpful for quick corrections if the user needs to continue to allow the clock to run. If the user accidentally resets the clock for an invalid throw, undo can be pressed to return to the previous running shot clock
- Undo has two modes, **Regular** and **True Undo**. Please see the App Settings docuementation for an in-depth guide on the difference between these two

:::tip
Accidentally hit Reset? Tap Undo to revert immediately without confusion.
:::

---

### ▶ Pause/Unpause Button

- If the clock is paused (or at its max value):
    - The button will read "Unpause"
    - Starts the timer from where it left off

- If the clock is unpaused (i.e. running, counting down):
    - The button will read "Pause"
    - Pauses the timer at the value it was when pressed

- Useful when play resumes without a full reset — great for clean pauses or timeouts.

:::info
When the pause button is pressed, the connected shot clock module will show **"-- --"** to indicate the clock is currently paused.
:::

---

## ✅ Tips

- All timer interactions automatically update the connected module over BLE.
- If no device is connected, the timer will be in **Practice Mode**. Please visit the [Practice Mode](./practice-mode) documentation to learn more.
