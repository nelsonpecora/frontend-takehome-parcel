<style lang="scss">
  @import '../variables.scss';

  .search-form {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  .search-input {
    background: none;
    border: none;
    border-bottom: 2px solid $dark;
    color: $dark;
    font-family: $body-stack;
    font-size: $body-size;
    outline: none;
  }

  .search-input:placeholder {
    color: #grey-lighter;
  }

  .search-button {
    background: none;
    border: none;
    cursor: pointer;
    fill: $grey-lighter;
    outline: none;
    transition: fill 200ms ease-out;
  }

  .search-button svg {
    transform: scale(.8);
  }

  .search-button:hover,
  .search-button:focus {
    fill: $grey-darker;
  }

  .search-button:active {
    fill: $dark;
  }
</style>

<template>
  <form class="search-form" @submit.prevent="updateList">
    <input class="search-input" type="search" v-model="inputText" />
    <button type="submit" class="search-button" v-html="quill"></button>
  </form>
</template>

<script>
  import quill from '../media/quill.svg';

  export default {
    name: 'search-form',
    data() {
      return {
        quill,
        inputText: ''
      };
    },
    methods: {
      updateList() {
        this.$emit('update-list', this.inputText)
      }
    }
  }
</script>
