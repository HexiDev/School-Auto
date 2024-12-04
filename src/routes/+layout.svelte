<script>
  import { App as CapacitorApp } from "@capacitor/app";
  import "../app.css";
  import "./styles.css";
  let { children } = $props();
  if (typeof window !== "undefined") {
    CapacitorApp.addListener("backButton", ({ canGoBack }) => {
      if (!canGoBack) {
        CapacitorApp.exitApp();
      } else {
        window.history.back();
      }
    });
  }
</script>

<div class="containerLayout">
  {@render children()}
</div>
