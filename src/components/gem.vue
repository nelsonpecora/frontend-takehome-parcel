<style lang="scss">
  @import '../variables.scss';

  .gem {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .gem-text {
    align-items: flex-start;
    display: flex;
    flex: 0 1 100%;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .gem-title {
    flex: 0 0 100%;
    font-family: $body-stack;
    font-size: $h3-size;
    margin: 0;
  }

  .gem-link {
    color: $grey-lighter;
    font-size: $subtext-size;
    padding-left: 5px;
    text-decoration: none;
  }

  .gem-link:hover,
  .gem-link:focus {
    color: $grey-darker;
  }

  .gem-link:active {
    color: $dark;
  }

  .gem-authors {
    flex: 0 0 100%;
    font-family: $body-stack;
    font-size: $body-size;
    margin: 10px 0 0 20px;
  }

  .gem-info {
    flex: 0 0 100%;
    font-family: $body-stack;
    font-size: $body-size;
    margin: 10px 0 0 20px;
  }

  .gem-action {
    color: $grey-lighter;
    background: none;
    border: none;
    cursor: pointer;
    flex: 0 0 auto;
    font-family: $body-stack;
    font-size: $h3-size;
    outline: none;
    transition: color 200ms ease-out;
  }

  .gem-action:hover,
  .gem-action:focus {
    color: $grey-darker;
  }

  .gem-action:active {
    color: $dark;
  }
</style>

<template>
  <div class="gem">
    <div class="gem-text">
      <span class="gem-title">{{ itemTitle }} <a class="gem-link" :href="item.project_uri" target="_blank">(explore)</a></span>
      <span class="gem-authors">{{ itemAuthor }}</span>
      <p class="gem-info">{{ item.info }}</p>
    </div>
    <button type="button" class="gem-action" @click="$emit('action', item)">{{ action }}</button>
  </div>
</template>

<script>
  import { capitalize, truncate } from 'lodash';

  export default {
    name: 'gem',
    props: ['item', 'action', 'actionIcon'],
    data() {
      return {};
    },
    computed: {
      itemTitle() {
        return this.item.name.split(/[-_]/).map(capitalize).join(' ');
      },
      itemAuthor() {
        return this.item.authors || 'Unknown Author';
      }
    }
  }
</script>
