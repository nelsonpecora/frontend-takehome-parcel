<style>
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
    font-family: 'Averia Libre', serif;
    font-size: 3vw;
    margin: 0;
  }

  .gem-link {
    color: #666;
    font-size: 2.2vw;
    padding-left: 5px;
    text-decoration: none;
  }

  .gem-link:hover,
  .gem-link:focus {
    color: #444;
  }

  .gem-link:active {
    color: #111
  }

  .gem-authors {
    flex: 0 0 100%;
    font-family: 'Averia Libre', serif;
    font-size: 2.5vw;
    margin: 10px 0 0 20px;
  }

  .gem-info {
    flex: 0 0 100%;
    font-family: 'Averia Libre', serif;
    font-size: 2.5vw;
    margin: 10px 0 0 20px;
  }

  .gem-action {
    color: #666;
    background: none;
    border: none;
    cursor: pointer;
    flex: 0 0 auto;
    font-family: 'Averia Libre', serif;
    font-size: 3vw;
    outline: none;
    transition: color 200ms ease-out;
  }

  .gem-action:hover,
  .gem-action:focus {
    color: #444;
  }

  .gem-action:active {
    color: #111;
  }
</style>

<template>
  <div class="gem">
    <div class="gem-text">
      <span class="gem-title">{{ itemTitle }} <a class="gem-link" :href="item.project_uri" target="_blank">(explore)</a></span>
      <span class="gem-authors">{{ item.authors }}</span>
      <p class="gem-info">{{ itemInfo }}</p>
    </div>
    <button type="button" class="gem-action" @click="$emit('action', item)">{{ action }}</button>
  </div>
</template>

<script>
  import { capitalize, truncate } from 'lodash';
  import attachment from '../../media/attachment.svg';

  export default {
    name: 'gem',
    props: ['item', 'action', 'actionIcon'],
    data() {
      return {
        itemLink: attachment
      };
    },
    computed: {
      itemTitle() {
        return this.item.name.split('-').map(capitalize).join(' ');
      },
      itemInfo() {
        return truncate(this.item.info, 100)
      }
    }
  }
</script>
