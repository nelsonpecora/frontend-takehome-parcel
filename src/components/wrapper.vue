<style>
  html,
  body {
    color: #111;
    background: #efefef;
    margin: 0;
    padding: 0;
  }
  .wrapper {
    margin: 0;
    padding: 20px;
  }

  .header {
    margin: 0 auto;
    text-align: center;
  }

  .page-title {
    font-family: 'Parisienne', cursive;
    font-size: 10vw;
    margin: 0;
  }

  .page-byline {
    font-family: 'Averia Libre', serif;
    font-size: 5vw;
    margin: 0;
  }

  .page-motif {
    max-width: 250px;
    object-fit: contain;
    width: 75%;
  }
</style>

<template>
  <section class="wrapper">
    <header class="header">
      <h1 class="page-title">The bountiful Hoard</h1>
      <p class="page-byline">By Nelson Pecora</p>
      <img class="page-motif" src="../../media/dragon.png" />
    </header>
  </section>
</template>

<script>
'use strict';

export default {
  data() {
    return {};
  }
}
</script>
