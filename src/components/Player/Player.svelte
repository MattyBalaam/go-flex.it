<script>
  import { getContext } from "svelte";

  import { timeStringToSeconds, secondsToTime } from "../../utils/time.ts";

  import { CONTEXT_KEY } from "./Audio.svelte";
  import Controls from "./Controls.svelte";
  import Timer from "./Timer.svelte";

  const {
    handlePlayToggle,
    handleSeek,
    currentTrack,
    paused,
    currentTime,
    duration,
    playerState,
  } = getContext(CONTEXT_KEY);
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

  .player {
    /* animation-play-state: paused; */
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

  .player .player__side {
    animation-play-state: inherit !important;
  }

  .player:hover {
    animation-play-state: paused;
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

<section class="player player--{$playerState}">
  <div class="player__side player__side--left" />
  <div class="player__side player__side--right" />
  <div class="player__side player__side--top" />
  <div class="player__side player__side--bottom" />
  <div class="player__side player__side--back" />
  <div class="player__side player__side--face">
    <div class="player__info">
      {#if $currentTrack}
        <table>

          <tr>
            <th>Artist:</th>
            <td>{$currentTrack.artist}</td>
          </tr>
          <tr>
            <th>Title:</th>
            <td>{$currentTrack.title}</td>
          </tr>
          <tr class="row__dj">
            <th>DJ:</th>
            <td>{$currentTrack.dj}</td>
          </tr>
        </table>
      {:else}
        <p class="player__idle">Press Play to Start</p>
      {/if}
      <p class="timer">
        <Timer class="current-time" seconds={$currentTime} />
        /
        <Timer class="duration" seconds={$duration} />
      </p>
    </div>

    <Controls {handlePlayToggle} {handleSeek} paused={$paused} />
  </div>
</section>
