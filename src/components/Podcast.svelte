<script>
  export let mixTitle;
  export let mixUrls;
  export let imageUrl;

  const DJS = {
    HPs: "H.P. Sorcery",
    FB: "Femme Bison",
    AS: "Amadeus Silk",
    DS: "DJ Spinach",
    MB: "Matteo Balsaamico",
  };

  const TIME_MULTIPLIER = 60;

  function timeToSeconds(time) {
    const [hour, minute, seconds] = time.split(":").map(Number);

    const minutes = hour * TIME_MULTIPLIER + minute;

    return minutes * TIME_MULTIPLIER + seconds;
  }

  let tracklisting = [
    {
      time: "0:00:00",
      artist: "Patrick Cowley",
      title: "Get a Little",
      dj: DJS.FB,
    },
    {
      time: "0:05:46",
      artist: "Haruomi Hosono",
      title: "-レゲ・エーゲ・ウーマン ( Reggae Aegean Woman)",
      dj: DJS.FB,
    },
    {
      time: "0:9:00",
      artist: "Sadistic Mika Band",
      title: "Dashiru Harmet & Popcorn ",
      dj: DJS.FB,
    },
    { time: "0:12:50", artist: "Brand Image", title: "Movin’ Up", dj: DJS.FB },
    {
      time: "0:17:40",
      artist: "Lilly & the Pink",
      title: "Frustration",
      dj: DJS.FB,
    },
    {
      time: "0:22:23",
      artist: "Sharazade",
      title: "Move Our Feet",
      dj: DJS.DS,
    },
    { time: "0:25:00", artist: "Boytronic", title: "Communicate", dj: DJS.DS },
    { time: "0:27:58", artist: "400 Blows", title: "Breakdown", dj: DJS.DS },
    { time: "0:31:17", artist: "Colourbox", title: "Breakdown", dj: DJS.DS },
    {
      time: "0:34:27",
      artist: "Naked Eyes",
      title: "Voices In My Head",
      dj: DJS.DS,
    },
    {
      time: "0:38:03",
      artist: "Nina Hagen",
      title: "New York / N.Y",
      dj: DJS.MB,
    },
    {
      time: "0:42:40",
      artist: "Candi Staton",
      title: "You Got The Love (Extended Vocal)",
      dj: DJS.MB,
    },
    {
      time: "0:48:55",
      artist: "Torch Song",
      title: "Prepare To Energize (The Fong Test) (8-Track Version)",
      dj: DJS.MB,
    },
    {
      time: "0:54:00",
      artist: "Gladiators",
      title: "Quo Vadiz?",
      dj: DJS.MB,
    },
    {
      time: "0:58:53",
      artist: "Mouzons Electric Band",
      title: "Everybody Get Down (special_version)",
      dj: DJS.MB,
    },
    {
      time: "1:05:35",
      artist: "慕潔溪",
      title: "害羞的男孩",
      dj: DJS.AS,
    },
    {
      time: "1:09:30",
      artist: "Saâda Bonaire",
      title: "You Could Be More As You Are",
      dj: DJS.AS,
    },
    {
      time: "1:15:00",
      artist: "Руся",
      title: "Tiльки я",
      dj: DJS.AS,
    },
    {
      time: "1:18:33",
      artist: "김완선",
      title: "리듬 속의 그 춤을",
      dj: DJS.AS,
    },
    {
      time: "1:22:29",
      artist: "Bolter",
      title: "Zapomnisz O Wczorajszym Dniu",
      dj: DJS.AS,
    },
    {
      time: "1:27:07",
      artist: "The Manhattan Project",
      title: "Guinessmen",
      dj: DJS.HP,
    },
    {
      time: "1:30:02",
      artist: "Pankow",
      title: "Das Wodkachaos",
      dj: DJS.HP,
    },
    {
      time: "1:32:57",
      artist: "Fun Fun",
      title: "Happy Station (Dub Mix)",
      dj: DJS.HP,
    },
    {
      time: "1:35:40",
      artist: "Marina Morgan",
      title: "Tonight",
      dj: DJS.HP,
    },
    {
      time: "1:38:10",
      artist: "Madleen Kane",
      title: "Fire In My Heart",
      dj: DJS.HP,
    },
  ];

  const parsedTracklisting = tracklisting.map(track => ({
    ...track,
    seconds: timeToSeconds(track.time),
  }));

  let player;
  let currentTime = Math.random() * 300;
  let currentTrack;

  const handleTimeUpdate = () => {
    currentTrack = parsedTracklisting
      .filter(({ seconds }) => seconds < currentTime)
      .reduce(
        (val, track) => (!val || val.seconds < track.seconds ? track : val),
        false
      );
  };
</script>

<style>
  :root {
    --maxWidth: 900px;
    --gap: 20px;
  }

  main {
    background-size: cover;
    background-position: center;
    /* backdrop-filter: blur(4); */
    padding: 1em;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  audio {
    max-width: var(--maxWidth);
    width: 100%;
    background: transparent;
  }

  .player {
    width: 500px;

    font-size: 26px;
    line-height: 1;
    display: grid;
    background: black;
    padding: var(--gap);
    gap: var(--gap);
  }

  .track-info {
    text-align: left;
    padding: var(--gap);
    height: 200px;
    display: grid;
    background: rgba(255, 255, 120, 0.74);
  }

  table {
    outline: 1px solid red;
  }

  th {
    padding-right: 0.3em;
    color: darkblue;
    text-align: right;
  }

  h1 {
    display: inline-block;
    color: black;
    background: rgba(255, 255, 120, 0.74);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    padding: 20px;
    margin: 0;
  }

  /* a {
    background: rgba(255, 255, 120, 0.74);
    padding: 1em;
  } */
</style>

<main style="background-image: url({imageUrl})">
  <div class="header-holder">
    <h1>{mixTitle}</h1>
  </div>

  <section class="player">
    <div class="track-info">
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
          <tr>
            <th>DJ:</th>
            <td>{currentTrack.dj}</td>
          </tr>
        </table>
      {:else}
        <p>Press Play to start</p>
      {/if}
    </div>
    <audio
      controls
      bind:this={player}
      bind:currentTime
      on:timeupdate={handleTimeUpdate}>
      <source src={mixUrls.opus} type="audio/ogg; codecs=opus" />
      <source src={mixUrls.mp3} type="audio/mpeg" />

    </audio>

  </section>

  <button>Download this podcast</button>
  <!-- <a href={mixUrl} /> -->
  <!-- TODO: option to download HQ opus, or low-quality mp3 -->

</main>
