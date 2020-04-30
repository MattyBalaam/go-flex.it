<script context="module">
  export const CONTEXT_KEY = "audio-player";
  export const PLAYER_STATE = {
    READY: "ready",
    PLAYING: "playing",
    IDLE: "idle",
  };
  export const SEEKING = {
    forward: "forward",
    back: "back",
    idle: "idle",
  };
</script>

<script>
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import { timeStringToSeconds, secondsToTime } from "../../utils/time.ts";

  let player;

  let currentTime = writable(0);

  let paused = writable(true);
  let duration = writable();
  let playerState = writable(PLAYER_STATE.ready);
  let currentTrack = writable();

  let seekInterval;
  let mixUrls;
  let tracklisting;

  function handlePlayToggle() {
    if ($paused) {
      $playerState = PLAYER_STATE.PLAYING;
      player.play();
    } else {
      $playerState = PLAYER_STATE.IDLE;
      $currentTrack = "what?";
      player.pause();
    }
  }

  $: parsedTracklisting =
    tracklisting &&
    tracklisting.map(track => ({
      ...track,
      seconds: timeStringToSeconds(track.time),
    }));

  function handleTimeUpdate() {
    const track = parsedTracklisting
      .filter(({ seconds }) => seconds < $currentTime)
      .reduce(
        (val, track) => (!val || val.seconds < track.seconds ? track : val),
        false
      );

    if (
      $currentTrack &&
      (track.seconds == $currentTrack.seconds &&
        track.title == $currentTrack.title)
    ) {
      return;
    }

    $currentTrack = track;
  }

  function handleSeek(type) {
    let incrementVal = 5;
    const increment = () => {
      incrementVal = Math.min(incrementVal * 1.33, 500);
      return incrementVal;
    };

    switch (type) {
      case SEEKING.idle: {
        window.clearInterval(seekInterval);

        break;
      }
      case SEEKING.back: {
        seekInterval = window.setInterval(function() {
          player.currentTime = Math.max(0, $currentTime - increment());
        }, 250);
        break;
      }
      case SEEKING.forward: {
        seekInterval = window.setInterval(function() {
          player.currentTime = $currentTime + increment();
        }, 250);

        break;
      }
    }
  }

  setContext(CONTEXT_KEY, {
    setData: function(data) {
      mixUrls = data.mixUrls;
      tracklisting = data.tracklisting;
    },
    handlePlayToggle,
    handleSeek,
    paused,
    currentTime,
    currentTrack,
    duration,
    playerState,
  });
</script>

<style>

</style>

{#if mixUrls}

  <audio
    bind:this={player}
    bind:paused={$paused}
    bind:currentTime={$currentTime}
    bind:duration={$duration}
    on:timeupdate={handleTimeUpdate}>
    <source src={mixUrls && mixUrls.opus} type="audio/ogg; codec=opus" />
    <source src={mixUrls && mixUrls.mp3} type="audio/mpeg" />

  </audio>
{/if}
<slot />
