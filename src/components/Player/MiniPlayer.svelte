<script>
  import { getContext, onMount } from "svelte";

  import { timeStringToSeconds, secondsToTime } from "../../utils/time.ts";

  import { CONTEXT_KEY } from "./Audio.svelte";
  import Controls from "./Controls.svelte";
  import Timer from "./Timer.svelte";

  let scroller;
  let text;

  const {
    handlePlayToggle,
    handleSeek,
    currentTrack,
    paused,
    currentTime,
    duration,
    playerState,
  } = getContext(CONTEXT_KEY);

  let frame;
  let count;

  $: $currentTime && loop();

  function loop() {
    count++;

    if (count < 20) return;

    const { clientWidth, scrollLeft, scrollWidth } = scroller;

    const keepScrolling = scrollLeft < scrollWidth - clientWidth;

    scroller.scrollLeft = keepScrolling ? scrollLeft + 10 : 0;

    count = 0;
  }
</script>

<style>
  .player {
    --player-width: 200px;
    display: flex;
    gap: var(--gap-small);
    font-family: Merkur;
    font-size: 20px;
    height: 30px;
  }

  .info {
    border-radius: 5px;
    width: var(--player-width);
    background: rgba(188, 215, 72);
    color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.4);
    text-shadow: 2px 2px 1px rgba(255, 255, 255, 0.4);
    height: 30px;
    overflow: hidden;
  }

  .scroll {
    height: 50px;
    padding: var(--gap-xsmall);
    text-align: left;
    overflow: scroll;
    font-variant: small-caps;
    font-weight: 900;
  }

  p {
    white-space: nowrap;
    margin: 0;
  }

  p.playing {
    padding: 0 var(--player-width);
  }

  .timer {
    margin-top: auto;
  }

  /* not the nicest way svelte */
  .timer :global(.duration) {
    opacity: 0.6;
  }
</style>

<section class="player player--{$playerState}">

  <div class="info">
    <div class="scroll" bind:this={scroller}>

      <p bind:this={text} class={$playerState}>
        {#if $currentTrack}
          {$currentTrack.artist} - {$currentTrack.title} : {$currentTrack.dj} :
          <Timer class="current-time" seconds={$currentTime} />
          /
          <Timer class="duration" seconds={$duration} />
        {:else}No podcast loaded{/if}
      </p>
    </div>
  </div>

  <button
    aria-label="play toggle"
    class="play {paused ? '' : 'play--playing'}"
    disabled={!$currentTrack}
    on:click={handlePlayToggle}>
    {#if paused}Play{:else}Pause{/if}
  </button>

</section>
