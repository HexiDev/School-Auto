<script lang="ts">
  import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
  import DeviceModal from "./components/DeviceModal.svelte";
  import Fa from "svelte-fa";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { ScreenOrientation } from "@capacitor/screen-orientation";
  import {
    BleClient,
    numberToUUID,
    type ScanResult,
  } from "@capacitor-community/bluetooth-le";
  let deviceModal = $state({
    opened: false,
    title: "Add Device",
    onClose: () => {
      deviceModal.opened = false;
    },
  });
  const BLEServices = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
  let bluetoothDevices: ScanResult[] = $state([]);
  const loadDevices = async () => {
    bluetoothDevices = [];
    await BleClient.requestLEScan({}, (result) => {
      console.log(result.device.deviceId);
      // check if result.device.deviceId is already in the list
      if (
        !bluetoothDevices.some(
          (device) => device.device.deviceId === result.device.deviceId
        )
      ) {
        bluetoothDevices = [...bluetoothDevices, result];
      }
    });
  };
  onMount(async () => {
    ScreenOrientation.lock({ orientation: "portrait" });
    BleClient.initialize();
  });
</script>

<!-- get  -->
<DeviceModal
  opened={deviceModal.opened}
  onClose={deviceModal.onClose}
  title="Add Device"
  {bluetoothDevices}
/>
<main>
  <button
    class="unstyled-button add-device-button"
    onclick={() => {
      deviceModal.opened = true;
      loadDevices();
    }}
  >
    <h1>Add Device</h1>
    <Fa icon={faSquarePlus} size="1.3x" />
  </button>
  <!-- <button
    onclick={async () => {
      await ScreenOrientation.lock({ orientation: "landscape" });
      goto("/controller");
    }}>controller</button
  > -->
</main>

<style>
  main {
    padding-top: 2rem;
  }
  .add-device-button:hover,
  .add-device-button:focus {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(0.98);
  }
  .add-device-button {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    width: calc(100% - 5rem);
    /* make background color blurred */
    background-color: rgba(255, 255, 255, 0.057);
    border-radius: 0.5rem;
    backdrop-filter: blur(10px);
    transition: all 0.2s;
  }
  .add-device-button h1 {
    font-size: 1.2rem;
    font-weight: 500;
  }
</style>
