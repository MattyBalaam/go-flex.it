<script>
  export let mixTitle;
  export let mixUrl;
  export let imageUrl;

  //   console.log("image");
</script>

<style>
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
    max-width: 400px;
    width: 100%;
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

  a {
    background: rgba(255, 255, 120, 0.74);
    padding: 1em;
  }
</style>

<main style="background-image: {imageUrl}">
  <div class="header-holder">
    <h1>{mixTitle}</h1>
  </div>

  <audio src={mixUrl} controls />
  <p>
    <a href={mixUrl}>Download this podcast</a>
  </p>

</main>
