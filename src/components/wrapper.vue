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
      <h1 class="page-title">The Bountiful Hoard</h1>
      <p class="page-byline">By Nelson Pecora</p>
      <img class="page-motif" src="../../media/dragon.png" />
    </header>
    <gem-section title="My Hoard" :collapse="true" :list="localGems" action="Discard" @action="remove"></gem-section>
    <gem-section title="The Wilds" :list="allGems" action="Covet" @action="save"></gem-section>
  </section>
</template>

<script>
  import GemSection from './gem-section';

  export default {
    data() {
      return {
        localGems: [],
        allGems: [{
          "name": "builder",
          "authors": "Jim Weirich",
          "info": "Builder provides a number of builder objects that make creating structured data\nsimple to do.  Currently the following builder objects are supported:\n\n* XML Markup\n* XML Events\n",
          "project_uri": "https://rubygems.org/gems/builder",
        },
        {
          "name": "jbuilder",
          "authors": "David Heinemeier Hansson",
          "info": "Create JSON structures via a Builder-style DSL",
          "project_uri": "https://rubygems.org/gems/jbuilder",
        }]
      };
    },
    methods: {
      save() {

      },
      remove() {

      }
    },
    components: {
      GemSection
    }
  }
</script>
