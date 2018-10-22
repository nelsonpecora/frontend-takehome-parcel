<style>
  .gem-section {
    background-image: url(../../media/divider.png);
    background-position: top;
    background-repeat: no-repeat;
    margin: 20px auto;
    max-width: 800px;
    padding-top: 20px;
    width: 100%;
  }

  .section-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .section-title {
    font-family: 'Parisienne', cursive;
    font-size: 4.5vw;
    margin: 0;
  }

  .section-collapse-button {
    background: none;
    border: none;
    cursor: pointer;
    fill: #666;
    outline: none;
    transition: fill 200ms ease-out, transform 200ms ease-out;
  }

  .is-collapsed {
    transform: rotate(90deg);
  }

  .section-collapse-button:hover,
  .section-collapse-button:focus {
    fill: #444;
  }

  .section-collapse-button:active {
    fill: #111;
  }

  .section-collapse-button svg {
    transform: scale(2);
  }

  .no-gems {
    color: #444;
    font-family: 'Averia Libre', serif;
    font-size: 4vw;
    margin: 20px 0;
    text-align: center;
  }
</style>

<template>
  <section class="gem-section">
    <header class="section-header">
      <h2 class="section-title">{{ title }}</h2>
      <button v-if="collapse" type="button" class="section-collapse-button" :class="buttonClass" v-html="caret" @click="toggleCollapse"></button>
      <!-- <search-form v-else @list-update="updateList"></search-form> -->
    </header>
    <div v-if="isExpanded" class="section-body">
      <gem v-for="item in list" :item="item" :action="action" :actionIcon="actionIcon" @action="doAction"></gem>
      <p v-if="!list.length"  class="no-gems">No gems are to be found in these halls</p>
    </div>
  </section>
</template>

<script>
  import caret from '../../media/caret.svg';
  import Gem from './gem';

  export default {
    name: 'gem-section',
    props: ['title', 'collapse', 'list', 'action', 'actionIcon'],
    data() {
      return {
        caret,
        isExpanded: true
      };
    },
    computed: {
      buttonClass() {
        return {
          'is-collapsed': !this.isExpanded
        }
      }
    },
    methods: {
      toggleCollapse() {
        this.isExpanded = !this.isExpanded;
      },
      doAction(item) {
        this.$emit('action', item);
      }
    },
    components: {
      Gem
    }
  }
</script>
