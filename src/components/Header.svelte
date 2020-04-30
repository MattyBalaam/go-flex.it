<script>
  import Nav from "../components/Nav.svelte";
  import MiniPlayer from "../components/Player/MiniPlayer.svelte";

  let segment;
</script>

<style>
  header {
    position: absolute;
    width: 100%;
    background: var(--colour-sunshine-50);
    top: 0;
    z-index: var(--z-index-top);
    display: flex;
    align-items: center;
  }
</style>

<header>

  <Nav {segment} />
  <MiniPlayer />

</header>
