<script>
  import Nav from "../components/Nav.svelte";
  import Header from "../components/Header.svelte";
  import Audio from "../components/Player/Audio.svelte";

  export let segment;
</script>

<Audio>
  <Header {segment} />

  <slot />
</Audio>
