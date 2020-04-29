<script>
  let ref;
  $: ref && document.body.appendChild(ref);
</script>

<style>
  div {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: var(--z-index-portal);
  }
</style>

<div bind:this={ref}>
  <slot />
</div>
