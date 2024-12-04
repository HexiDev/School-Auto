<script lang="ts">
  import type { ScanResult } from "@capacitor-community/bluetooth-le";
  import { faCross, faPlus } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { cubicOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  // get the props
  let {
    opened,
    onClose,
    title,
    bluetoothDevices,
  }: {
    opened: boolean;
    onClose: () => void;
    title: string;
    bluetoothDevices: ScanResult[];
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
            <ul>
              {#each bluetoothDevices as device}
                <li>{device.device.deviceId}</li>
              {/each}
            </ul>
          {/if}
        </div>
      </div>
    </div>
  </main>
{/if}

<style>
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
