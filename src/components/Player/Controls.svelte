<script>
  import { SEEKING } from "./Audio.svelte";

  export let paused;
  export let handlePlayToggle;
  export let handleSeek;

  function handleMouseUp() {
    handleSeek(SEEKING.idle);
  }
</script>

<style>
  @keyframes running {
    50% {
      color: green;
    }
  }

  button {
    border: 0 none;
    height: 60px;
    width: 60px;
    font-size: 30px;
    border-radius: 50%;
    background: radial-gradient(
        var(--colour-millennial-prince-75),
        var(--colour-millennial-prince-50) 90%,
        black 100%
      ),
      linear-gradient(
        var(--colour-millennial-prince-75),
        var(--colour-millennial-prince-50)
      ),
      url("/images/steel-texture-polished-metal-texture-metallic-gray-background-steel-background-besthqwallpapers.com-1680x1050.jpg");
    background-position: center;
    background-size: cover;
    color: white;
    box-shadow: inset 3px 0 0 rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
  }

  .controls {
    display: grid;
    align-items: center;
    gap: 10px;
    grid-auto-columns: 1fr;
  }

  .play {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    grid-column: 1;
    font-size: 20px;
  }

  .play--playing {
    animation: running infinite 2s;
  }

  .rewind {
    grid-column: 2;
    justify-self: flex-end;
  }

  .forward {
    grid-column: 3;
  }

  /* .mute {
    grid-column: 4;
    justify-self: flex-end;
  } */
</style>

<div class="controls">
  <button
    aria-label="play toggle"
    class="play {paused ? '' : 'play--playing'}"
    on:click={handlePlayToggle}>
    {#if paused}Play{:else}Pause{/if}
  </button>
  <button
    aria-label="seek backward"
    class="rewind"
    on:mousedown={() => handleSeek(SEEKING.back)}
    on:mouseup={handleMouseUp}>
    «
  </button>

  <button
    aria-label="seek forward"
    class="forward"
    on:mousedown={() => handleSeek(SEEKING.forward)}
    on:mouseup={handleMouseUp}>
    »
  </button>
  <!-- <button class="mute">Mute</button> -->

</div>
