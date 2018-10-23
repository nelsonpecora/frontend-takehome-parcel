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
    <gem-section title="My Hoard" :collapse="true" :list="localGems" action="Discard" @action="remove"></gem-section>
    <gem-section title="The Wilds" :section-message="sectionMessage" :list="allGems" action="Covet" @action="save" @update-list="updateList"></gem-section>
  </section>
</template>

<script>
  import GemSection from './gem-section';
  import { createStore } from 'store/src/store-engine';
  import localStore from 'store/storages/localStorage';
  import memoryStore from 'store/storages/memoryStorage';

  const store = createStore([
      // persist to localStorage, falling back to memory storage when that's unavailable
      localStore,
      memoryStore
    ]),
    ERROR_MESSAGE = 'The fault lies not in our stars, but in ourselves',
    SEARCH_MESSAGE = 'Enscribe your query to begin your quest',
    STORAGE_KEY = 'local-gems';

  export default {
    data() {
      return {
        localGems: store.get(STORAGE_KEY) || [],
        allGems: [],
        sectionMessage: SEARCH_MESSAGE
      };
    },
    methods: {
      save(item) {
        this.localGems.unshift(item);
        store.set(STORAGE_KEY, this.localGems);
      },
      remove(item) {
        const index = this.localGems.indexOf(item);

        this.localGems.splice(index, 1);
        store.set(STORAGE_KEY, this.localGems);
      },
      updateList(inputText) {
        if (!inputText) {
          this.sectionMessage = SEARCH_MESSAGE;
          return;
        }

        fetch(`http://localhost:3000/api/v1/search.json?query=${encodeURIComponent(inputText)}`)
          .then((res) => {
            if (!res.status || res.status < 200 || res.status >= 400) {
              this.sectionMessage = ERROR_MESSAGE;
              return [];
            } else {
              return res.json();
            }
          })
          .then((gemList) => {
            this.allGems = gemList.map(({ name, project_uri, authors, info }) => ({ name, project_uri, authors, info }));

            if (!gemList.length && inputText) {
              this.sectionMessage = 'The wilds hold nothing for you'
            }
          })
          .catch(() => {
            this.sectionMessage = ERROR_MESSAGE;
          });
      }
    },
    components: {
      GemSection
    }
  }
</script>
