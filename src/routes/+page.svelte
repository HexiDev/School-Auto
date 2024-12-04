<script lang="ts">
  import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
  import DeviceModal from "./components/DeviceModal.svelte";
  import Fa from "svelte-fa";

  let deviceModal = {
    opened: false,
    title: "Add Device",
    onClose: () => {
      deviceModal.opened = false;
    },
  };
</script>

<DeviceModal
  opened={deviceModal.opened}
  onClose={deviceModal.onClose}
  title="Add Device"
/>
<main>
  <button
    class="unstyled-button add-device-button"
    onclick={() => (deviceModal.opened = true)}
  >
    <h1>Add Device</h1>
    <Fa icon={faSquarePlus} size="1.3x" />
  </button>
</main>

<style>
  main {
    padding-top: 2rem;
  }
  .add-device-button:hover,
  .add-device-button:focus {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.02);
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
  }
  .add-device-button h1 {
    font-size: 1.2rem;
    font-weight: 500;
  }
</style>
