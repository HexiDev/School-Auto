<script lang="ts">
  import { faCross, faPlus } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { cubicOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";

  // get the props
  let {
    opened,
    onClose,
    title,
  }: { opened: boolean; onClose: () => void; title: string } = $props();
  // make onclose event
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
              <Fa icon={faPlus} rotate="45" size="2x" />
            </button>
          </div>
          .loading
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
    padding: 2rem;
    border-radius: 1rem;
    width: 100%;
    margin: 2rem 2.5rem;
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
