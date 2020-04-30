<script>
  import { getContext } from "svelte";

  import { CONTEXT_KEY } from "../Player/Audio.svelte";
  import Player from "../Player/Player.svelte";

  import Download from "./Download.svelte";

  export let mixTitle;
  export let mixUrls;
  export let imageUrl;
  export let tracklisting;

  const { setData } = getContext(CONTEXT_KEY);

  console.log(mixUrls);

  setData({ mixUrls, tracklisting });
</script>

<style>
  :root {
    --maxWidth: 900px;
    --player-width: 350px;
    --player-height: 500px;
    --player-depth: 90px;
  }

  main {
    padding: calc(var(--header-height) + 1em) 1em 1em;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    perspective: 1000px;
  }

  .background {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0.4;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    z-index: -1;
  }

  h1 {
    display: inline-block;
    font-family: var(--font-display);
    font-size: var(--font-display-size-large);
    color: black;
    text-transform: uppercase;
    padding: var(--gap-baseline);
    margin: 0;
  }
</style>

<main>
  <img class="background" src={imageUrl} alt="" />
  <h1>{mixTitle}</h1>

  <Player />

  <Download {mixUrls} />

</main>
