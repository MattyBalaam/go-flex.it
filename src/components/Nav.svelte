<script>
  export let segment;
</script>

<style>
  nav {
    background: var(--colour-sunshine-50);
    margin: auto;
    font-size: 20px;
    font-family: var(--font-display);
    padding: 1em;
    height: var(--header-height);
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;
    list-style: none;
  }

  /* [aria-current] {
    position: relative;
    display: inline-block;
  } */

  /* [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  } */

  a {
    text-decoration: none;
    /* padding: 1em 0.5em; */
    /* display: block; */
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        <img src="images/the-flex-logo.png" alt="The Flex" height="50" />

      </a>
    </li>
    <!-- <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        about
      </a>
    </li> -->

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="podcasts">
        podcasts
      </a>
    </li> -->

  </ul>
</nav>
