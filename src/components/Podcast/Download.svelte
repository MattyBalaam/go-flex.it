<script>
  import { fade } from "svelte/transition";
  import Portal from "../Portal.svelte";

  export let mixUrls;

  $: portalOpen = false;

  function handleTogglePortal(forceClose = false) {
    portalOpen = forceClose ? false : !portalOpen;
  }
</script>

<style>
  button {
    font-family: var(--font-display);
    font-size: var(--font-display-size-small);
    background: var(--color-tango);
  }

  section {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.5);
  }

  h3 {
    font-family: var(--font-display);
    font-size: var(--font-display-size-baseline);
    color: var(--color-tango);
  }

  div {
    padding: 0 var(--gap-large) var(--gap-baseline);
    position: relative;
    z-index: 1;
  }

  div::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -10px;
    left: -10px;
    height: 100%;
    width: 100%;
    background: white;
    transform: rotate(-2deg);
    box-shadow: 0 0 0 3px black, -15px 10px 0 black;
  }

  ul {
    padding: 0;
  }

  li {
    margin-bottom: var(--gap-baseline);
  }

  .oh-god-no-svelte__sort-out-yer-whitespace-issue {
    display: inline-flex;
  }
</style>

<button on:click={() => handleTogglePortal()} type="button">
  Download podcast
</button>

{#if portalOpen}
  <Portal>
    <section transition:fade on:click={() => handleTogglePortal(true)}>
      <div>
        <h3>Download podcast</h3>
        <ul>
          <li>
            Higher quality
            <span class="oh-god-no-svelte__sort-out-yer-whitespace-issue">
              <a href={mixUrls.opus} target="_blank">Opus</a>
              :
            </span>
            for the cool kids
          </li>
          <li>
            Low quality
            <span class="oh-god-no-svelte__sort-out-yer-whitespace-issue">
              <a href={mixUrls.mp3} target="_blank">MP3</a>
              :
            </span>
            for lamers
          </li>
        </ul>

        <button>Close</button>

      </div>
    </section>
  </Portal>
{/if}
