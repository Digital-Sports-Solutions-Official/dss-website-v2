---
id: app-settings
title: App Settings
description: App settings in the tinyLeague™ Hub, covering theme, the settings pin, timer limits, live adjustment, true undo, and the audio cue controls.
sidebar_position: 6
---

## ⚙️ Settings Menu Overview

This guide provides a breakdown of all app settings found in the tinyLeague™ Hub app, making it easy to change how your app works. The settings screen is arranged in three groups, covered below in the order they appear.

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Light_Mode/App_Settings_1_Light.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Dark_Mode/App_Settings_1_Dark.png"
    alt="The top of the app settings screen, showing the General and Timer Logic groups"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>The General and Timer Logic groups</p>
</div>

<div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
  <ImageSwitcher
    lightSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Light_Mode/App_Settings_2_Light.png"
    darkSrc="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Updated_tL_Hub_App_Screenshots/v1.5/Dark_Mode/App_Settings_2_Dark.png"
    alt="The lower part of the app settings screen, showing the Audio and Cues group"
    style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
  />
  <p style={{ fontStyle: 'italic' }}>Scrolling down reveals the Audio &amp; Cues group</p>
</div>

---

### ⚙️ General

#### 🌙 Theme

Set your app theme to light or dark mode!

#### 🔒 Settings Pin

Add a layer of protection by requiring a PIN to access settings. Great for ensuring volunteers or players don’t modify critical configuration.

#### 🧹 Reset to Default

This button will restore your app to default settings.

---

### ⏱ Timer Logic

#### High Limit and Low Limit

Adjust the default values for high and low player count shot clock durations. These will affect how much time appears on the clock when reset after the [High/Low Switch](/docs/tinyLeague-app/how-to-use#-high--low-toggle-switch) is toggled.

:::info
Setting the high and low shot clock limits to the same value will result in the [Timer Switch](/docs/tinyLeague-app/how-to-use#-high--low-toggle-switch) doing nothing.
:::

#### 🎚 Live Adjustment

When enabled, the ➖ and ➕ buttons stay active while the timer is running, so you can correct the clock without pausing first. Turn it off if you would rather the clock only be adjustable while paused.

#### 🔁 True Undo

When enabled, the app will continue tracking clock time in the background after a reset, allowing for more accurate "Undo" operations.

---

### 🔊 Audio &amp; Cues

#### End Buzzer

Sounds the buzzer when the shot clock reaches zero.

#### Timer Cues

Plays an audible cue as the clock counts down, at the spacing set by Cue Interval.

#### Cue Interval

Sets how often a timer cue plays, in seconds.

#### Final 5s Cues

Plays a cue for each of the last five seconds, during the tenth-of-a-second rundown.

:::tip
End Buzzer, Timer Cues and Final 5s Cues toggle independently, so you can keep the buzzer and silence everything else in noise-conscious venues.
:::
