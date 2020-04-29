<script>
  import { timeStringToSeconds, secondsToTime } from "../../utils/time.ts";
  import Controls, { SEEKING } from "./Controls.svelte";
  import Timer from "./Timer.svelte";
  import Download from "./Download.svelte";

  export let mixTitle;
  export let mixUrls;
  export let imageUrl;
  export let tracklisting;

  let player;
  let currentTime = 0;
  let duration;
  let currentTrack;
  let paused = true;
  let seekInterval;
  let playerExtraClass = "player--ready";

  console.log("todo: animate when songs change!");

  function handlePlayToggle(e) {
    if (paused) {
      playerExtraClass = "player--playing";
      player.play();
    } else {
      playerExtraClass = "player--idle";
      player.pause();
    }
  }

  const parsedTracklisting = tracklisting.map(track => ({
    ...track,
    seconds: timeStringToSeconds(track.time),
  }));

  const handleTimeUpdate = () => {
    currentTrack = parsedTracklisting
      .filter(({ seconds }) => seconds < currentTime)
      .reduce(
        (val, track) => (!val || val.seconds < track.seconds ? track : val),
        false
      );
  };

  const handleSeek = type => {
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
          player.currentTime = Math.max(0, currentTime - increment());
        }, 250);
        break;
      }
      case SEEKING.forward: {
        seekInterval = window.setInterval(function() {
          player.currentTime = currentTime + increment();
        }, 250);

        break;
      }
    }
  };
</script>

<style>
  @keyframes player-in {
    0% {
      transform: rotate3d(0, 0.8, 1, 75deg) scale3d(0, 0, 0);
    }
    50% {
      transform: rotate3d(0.8, 1, 0, 75deg) scale3d(0.5, 0.5, 0.5);
    }
    100% {
      transform: rotate3d(0, 0.3, -0.2, 25deg) scale3d(1, 1, 1);
    }
  }

  @keyframes player-spin {
    0%,
    100% {
      transform: rotate3d(0, 0.3, -0.2, 25deg);
    }
    25% {
      transform: rotate3d(0, 0.8, 1, 75deg);
    }
    67% {
      transform: rotate3d(0.8, 1, 0, 75deg);
    }
  }

  @keyframes player-playing {
    0%,
    100% {
      transform: rotate3d(0, 0.3, -0.2, 25deg);
    }
    25% {
      transform: rotate3d(0, 0.4, 0, 25deg);
    }
    67% {
      transform: rotate3d(0.2, 0.2, 0, 25deg);
    }
  }

  @keyframes player-face {
    0%,
    100% {
      background-position: top left;
    }
    25% {
      background-position: center;
    }
    67% {
      background-position: top right;
    }
  }

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

  audio {
    max-width: var(--maxWidth);
    width: 100%;
    background: transparent;
  }

  .player {
    transform: rotate3d(0, 0.3, -0.2, 25deg);
    transform-style: preserve-3d;
    position: relative;
    width: var(--player-width);
    height: var(--player-height);
    font-size: 20px;
    line-height: 20px;
    font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans",
      "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana,
      "Verdana Ref", sans-serif;
    overflow: visible;
  }

  .player--ready {
    animation: player-in 1s 1 backwards;
  }

  .player--playing {
    animation: player-playing 10s infinite 1s;
  }

  .player--playing .player__side {
    animation: player-face 10s infinite 1s;
  }

  .player__info {
    text-align: left;
    border-radius: 5px;
    margin: var(--gap-small);
    padding: var(--gap-baseline);
    height: 300px;
    background: rgba(188, 215, 72);
    color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.4);
    text-shadow: 2px 2px 1px rgba(255, 255, 255, 0.4);
    font-variant: small-caps;
    font-weight: 900;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    filter: blur(0.3px);
  }

  .player__side {
    position: absolute;
    background: linear-gradient(
        var(--colour-millennial-prince-75),
        var(--colour-millennial-prince-50)
      ),
      url("/images/steel-texture-polished-metal-texture-metallic-gray-background-steel-background-besthqwallpapers.com-1680x1050.jpg");
    height: 100%;
    width: 100%;
  }

  .player__side--face {
    transform: translateZ(calc(var(--player-depth) / 2));
    background: linear-gradient(
        var(--colour-millennial-prince-50),
        var(--colour-millennial-prince-50)
      ),
      url("/images/steel-texture-polished-metal-texture-metallic-gray-background-steel-background-besthqwallpapers.com-1680x1050.jpg");
    background-position: top left;
    background-size: cover;
    display: grid;
    grid-auto-columns: 100%;
    padding: var(--gap-baseline);
    gap: var(--gap-baseline);
    border-radius: 2px;
  }

  .player__side--back {
    transform: translateZ(-calc(var(--player-depth) / 2));
  }

  .player__side--left {
    left: 0;
    transform: rotateY(-90deg) translateZ(calc(var(--player-depth) / 2));
    width: var(--player-depth);
  }
  .player__side--right {
    right: 0;
    transform: rotateY(90deg) translateZ(calc(var(--player-depth) / 2));
    width: var(--player-depth);
  }
  .player__side--bottom {
    transform: rotateX(90deg) translateZ(calc(var(--player-depth) / 2));
    top: 100%;
    height: var(--player-depth);
  }
  .player__side--top {
    transform: rotateX(-90deg) translateZ(calc(var(--player-depth) / 2));
    bottom: 100%;
    height: var(--player-depth);
  }

  table {
    table-layout: fixed;
  }

  tr {
    height: 55px;
  }

  .row__dj {
    height: 30px;
  }

  th {
    padding-right: 0.3em;
    text-align: right;
    vertical-align: top;
  }

  td {
    width: 100%;
    vertical-align: top;
  }

  .timer {
    margin-top: auto;
  }

  /* not the nicest way svelte */
  .timer :global(.duration) {
    opacity: 0.6;
  }
</style>

<main>
  <img class="background" src={imageUrl} alt="" />
  <h1>{mixTitle}</h1>

  <section class="player {playerExtraClass}">
    <div class="player__side player__side--left" />
    <div class="player__side player__side--right" />
    <div class="player__side player__side--top" />
    <div class="player__side player__side--bottom" />
    <div class="player__side player__side--back" />
    <div class="player__side player__side--face">
      <div class="player__info">
        {#if currentTrack}
          <table>

            <tr>
              <th>Artist:</th>
              <td>{currentTrack.artist}</td>
            </tr>
            <tr>
              <th>Title:</th>
              <td>{currentTrack.title}</td>
            </tr>
            <tr class="row__dj">
              <th>DJ:</th>
              <td>{currentTrack.dj}</td>
            </tr>
          </table>
        {:else}
          <p class="player__idle">Press Play to Start</p>
        {/if}
        <p class="timer">
          <Timer class="current-time" seconds={currentTime} />
          /
          <Timer class="duration {$$props.class}" seconds={duration} />
        </p>
      </div>
      <audio
        bind:this={player}
        bind:paused
        bind:currentTime
        bind:duration
        on:timeupdate={handleTimeUpdate}>
        <source src={mixUrls.opus} type="audio/ogg; codec=opus" />
        <source src={mixUrls.mp3} type="audio/mpeg" />

      </audio>

      <Controls {handlePlayToggle} {handleSeek} {paused} />
    </div>
  </section>

  <Download {mixUrls} />

</main>
