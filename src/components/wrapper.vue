<style lang="scss">
  @import '../variables.scss';

  html,
  body {
    color: $dark;
    background: $light;
    margin: 0;
    padding: 0;
  }

  // typographic scale: we're using augmented fourths,
  // but adjusting the type based on the viewport width.
  // it's a pretty neat technique, and solves the issues that
  // simply using vw units for font-size presents
  html {
    font-size: calc(12px + (24 - 12) * ((100vw - 300px) / (2048 - 300)));
    line-height: calc(1 + (1.5 - 1) * ((100vw - 300px)/(2048 - 300)));
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
    font-family: $title-stack;
    font-size: $title-size;
    margin: 0;
  }

  .page-byline {
    font-family: $body-stack;
    font-size: $h2-size;
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
      <h1 class="page-title">The Bountiful Hoard</h1>
      <p class="page-byline">By Nelson Pecora</p>
      <img class="page-motif" src="../media/dragon.png" />
    </header>
    <gem-section title="My Hoard" :collapse="true" :list="localGems" action="Discard"></gem-section>
    <gem-section title="The Wilds" :section-message="sectionMessage" :list="allGems" action="Covet"></gem-section>
  </section>
</template>

<script>
  import GemSection from './gem-section';

  export default {
    data() {
      return {};
    },
    computed: {
      localGems() {
        return this.$store.state.localGems;
      },
      allGems() {
        return this.$store.state.allGems;
      },
      sectionMessage() {
        return this.$store.state.message;
      }
    },
    components: {
      GemSection
    }
  }
</script>
