<style lang="scss">
  @import '../variables.scss';

  .gem-section {
    background-image: url(../media/divider.png);
    background-position: top;
    background-repeat: no-repeat;
    margin: 40px auto;
    max-width: 800px;
    padding-top: 14px;
    width: 100%;
  }

  .section-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .section-title {
    font-family: $title-stack;
    font-size: $h2-size;
    margin: 0;
  }

  .section-collapse-button {
    background: none;
    border: none;
    cursor: pointer;
    fill: $grey-lighter;
    outline: none;
    transition: fill 200ms ease-out, transform 200ms ease-out;
  }

  .is-collapsed {
    transform: rotate(90deg);
  }

  .section-collapse-button:hover,
  .section-collapse-button:focus {
    fill: $grey-darker;
  }

  .section-collapse-button:active {
    fill: $dark;
  }

  .section-collapse-button svg {
    transform: scale(2);
  }

  .no-gems {
    color: $grey-lighter;
    font-family: $body-stack;
    font-size: $h3-size;
    margin: 20px 0;
    text-align: center;
  }
</style>

<template>
  <section class="gem-section">
    <header class="section-header">
      <h2 class="section-title">{{ title }}</h2>
      <button v-if="collapse" type="button" class="section-collapse-button" :class="buttonClass" v-html="caret" @click="toggleCollapse"></button>
      <search-form v-else></search-form>
    </header>
    <div v-if="isExpanded" class="section-body">
      <gem v-for="item in list" :item="item" :action="action"></gem>
      <p v-if="!list.length"  class="no-gems">{{ message }}</p>
    </div>
  </section>
</template>

<script>
  import caret from '../media/caret.svg';
  import Gem from './gem';
  import SearchForm from './search-form';

  export default {
    name: 'gem-section',
    props: ['title', 'collapse', 'sectionMessage', 'list', 'action'],
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
      },
      message() {
        return this.sectionMessage || 'No gems are to be found in these halls';
      }
    },
    methods: {
      toggleCollapse() {
        this.isExpanded = !this.isExpanded;
      }
    },
    components: {
      Gem,
      SearchForm
    }
  }
</script>
