<script lang="ts">
  import "./styles.css";
  let { children } = $props();
</script>

<div class="containerLayout">
  {@render children()}
</div>
