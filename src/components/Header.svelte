<script>
  import Nav from "../components/Nav.svelte";

  let segment;
</script>

<style>
  header {
    position: absolute;
    width: 100%;
    top: 0;
    z-index: var(--z-index-top);
  }
</style>

<header>

  <Nav {segment} />

</header>
