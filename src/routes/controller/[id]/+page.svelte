<script lang="ts">
  import { page } from "$app/stores";
  import {
    BleClient,
    numbersToDataView,
  } from "@capacitor-community/bluetooth-le";
  import { onDestroy, onMount } from "svelte";
  const deviceId = $page.params.id;
  const BLEServices = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
  const BLECharacteristics = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
  const colors = {
    red: 0x01,
    green: 0x02,
    blue: 0x03,
  };
  let rgbColors = {
    red: 0,
    green: 0,
    blue: 0,
  } as Record<keyof typeof colors, number>;
  let oldRgbColors = {
    red: 0,
    green: 0,
    blue: 0,
  } as Record<keyof typeof colors, number>;
  let isConnected = false;

  async function connectToDevice() {
    if (!isConnected) {
      await BleClient.connect(deviceId);
      isConnected = true;
    }
  }

  // set rgb to object <string, number>
  async function sendBleColor(rgb: typeof rgbColors) {
    await connectToDevice();
    await BleClient.write(
      deviceId,
      BLEServices,
      BLECharacteristics,
      numbersToDataView([0x10, rgb.red, rgb.green, rgb.blue])
    );
  }
  let interval: NodeJS.Timeout;
  onMount(async () => {
    interval = setInterval(async () => {
      if (
        oldRgbColors.red !== rgbColors.red ||
        oldRgbColors.green !== rgbColors.green ||
        oldRgbColors.blue !== rgbColors.blue
      ) {
        oldRgbColors = { ...rgbColors };
        await sendBleColor(rgbColors);
      }
    }, 70);
  });
  onDestroy(async () => {
    clearInterval(interval);
  });
</script>

{deviceId}
<!-- add slider for red green and blue -->
<div class="sliders">
  <h1>Red</h1>
  <input
    onchange={async (e) => {
      const target = e.target;
      if (target instanceof HTMLInputElement) {
        if (target) {
          rgbColors.red = parseInt(target.value);
        }
      }
    }}
    oninput={async (e) => {
      const target = e.target;
      if (target instanceof HTMLInputElement) {
        if (target) {
          rgbColors.red = parseInt(target.value);
        }
      }
    }}
    type="range"
    min="0"
    max="255"
    value="0"
    step="1"
  />
  <h1>Green</h1>
  <input
    onchange={async (e) => {
      const target = e.target;
      if (target instanceof HTMLInputElement) {
        if (target) {
          rgbColors.green = parseInt(target.value);
        }
      }
    }}
    oninput={async (e) => {
      const target = e.target;
      if (target instanceof HTMLInputElement) {
        if (target) {
          rgbColors.green = parseInt(target.value);
        }
      }
    }}
    type="range"
    min="0"
    max="255"
    value="0"
    step="1"
  />
  <h1>Blue</h1>
  <input
    onchange={async (e) => {
      const target = e.target;
      if (target instanceof HTMLInputElement) {
        if (target) {
          rgbColors.blue = parseInt(target.value);
        }
      }
    }}
    oninput={async (e) => {
      const target = e.target;
      if (target instanceof HTMLInputElement) {
        if (target) {
          rgbColors.blue = parseInt(target.value);
        }
      }
    }}
    type="range"
    min="0"
    max="255"
    value="0"
    step="1"
  />
</div>

<style>
  .sliders {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* centerr */
    margin: 0 45px;
  }

  .colorsContainer {
    display: flex;
    gap: 1rem;
  }
  button {
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.205);
  }
  button:hover {
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  button:active {
    transform: scale(0.98);
    background-color: rgba(255, 255, 255, 0.03);
  }
</style>
