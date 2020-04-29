<script>
  import Podcast from "../components/Podcast/Podcast.svelte";
  const DJS = {
    HP: "H.P. Sorcery",
    FB: "Femme Bison",
    AS: "Amadeus Silk",
    DS: "DJ Spinach",
    MB: "Matteo Balsaamico",
  };

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
      title: "Quo Vadiz",
      dj: DJS.MB,
    },
    {
      time: "0:58:53",
      artist: "Mouzons Electric Band",
      title: "Everybody Get Down (Special Version)",
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
</script>

<style>

</style>

<svelte:head>
  <title>The Flex</title>
</svelte:head>

<Podcast
  mixTitle="Podcast 1"
  mixUrls={{ opus: 'audio/the-flex-podcast-1.opus', mp3: 'audio/the-flex-podcast-1.mp3' }}
  imageUrl="images/wish.jpg"
  {tracklisting} />
