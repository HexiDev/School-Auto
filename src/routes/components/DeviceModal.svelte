<script lang="ts">
  import { goto } from "$app/navigation";
  import {
    BleClient,
    type ScanResult,
  } from "@capacitor-community/bluetooth-le";
  import { ScreenOrientation } from "@capacitor/screen-orientation";
  import { faBluetoothB } from "@fortawesome/free-brands-svg-icons";
  import {
    faCross,
    faPlus,
    faSpinner,
  } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { cubicOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  // get the props
  type CustomResult = ScanResult & { loading: boolean };
  let {
    opened,
    onClose,
    title,
    bluetoothDevices,
  }: {
    opened: boolean;
    onClose: () => void;
    title: string;
    bluetoothDevices: CustomResult[];
  } = $props();
  // make onclose event
  bluetoothDevices = bluetoothDevices.filter(
    (device, index, self) =>
      index ===
      self.findIndex((t) => t.device.deviceId === device.device.deviceId)
  );
</script>

{#if opened}
  <main>
    <div
      class="overlay"
      onclick={() => {
        onClose();
      }}
      onkeydown={() => {}}
      aria-hidden={true}
      transition:fade={{ duration: 200, easing: cubicOut }}
    ></div>
    <div
      class="modal"
      transition:fly={{ duration: 250, y: 200, easing: cubicOut }}
    >
      <div class="modalContainer">
        <div class="top">
          <div class="topInfo">
            <h1>{title}</h1>
            <button class="unstyled-button closeButton" onclick={onClose}>
              <Fa icon={faPlus} rotate="45" size="1.8x" />
            </button>
          </div>
        </div>
        <!-- check if bluetoothDevices length is longer then 0 -->
        <div class="devicesList flex items-center justify-center m-3">
          {#if bluetoothDevices.length <= 0}
            <div
              class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
              >
            </div>
          {:else}
            <!-- filter the empty device.device.localname -->
            <div class="bluetoothDevicesContainer">
              {#each bluetoothDevices
                .filter((device) => !!device.device.name)
                .sort((a, b) => (b.rssi || 0) - (a.rssi || 0)) as device}
                <button
                  class="unstyledButton"
                  onclick={async () => {
                    device.loading = true;
                    await BleClient.connect(device.device.deviceId);
                    // await ScreenOrientation.lock({ orientation: "landscape" });
                    goto("/controller/" + device.device.deviceId);
                  }}
                >
                  <div class="bluetoothDeviceContainer">
                    <div class="bluetoothDevice">
                      <div class="bluetoothIcon">
                        {#if device.loading}
                          <Fa icon={faSpinner} pulse />
                        {:else}
                          <Fa icon={faBluetoothB} size="1.25x" />
                        {/if}
                      </div>
                      <div class="bluetoothDeviceDetails">
                        <h3>{device.device.name}</h3>
                        <p>{device.device.deviceId}</p>
                      </div>
                    </div>
                  </div>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </main>
{/if}

<style>
  .bluetoothDevicesContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 18rem;
    overflow-y: auto;
    width: 100%;
  }
  .bluetoothDeviceContainer {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.205);
    width: 100%;
  }
  .bluetoothDevice {
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;
  }
  .bluetoothIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(53, 53, 53);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    padding: 0.5rem;
  }
  .bluetoothDeviceDetails {
    flex-direction: column;
    text-align: right;
    /* align to right */
    gap: 0.5rem;
    width: 100%;
  }
  .bluetoothDeviceDetails p {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
  }

  .topInfo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .topInfo h1 {
    margin: 0;
    margin-right: auto;
    font-size: 1.4rem;
  }
  .closeButton {
    margin-left: auto;
    margin-right: 0;
  }
  .modal {
    position: fixed;
    bottom: 0%;
    z-index: 101;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .modalContainer {
    background-color: rgb(53, 53, 53);
    padding: 1rem;
    border-radius: 1.5rem;
    width: 100%;
    margin: 0.8rem 1rem;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* add blur */
    backdrop-filter: blur(3px);
    z-index: 100;
  }
</style>
