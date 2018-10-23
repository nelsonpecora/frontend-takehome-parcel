'use strict';
import Vue from 'vue';
import wrapper from './components/wrapper.vue';
import store from './store/index';

Vue.component('wrapper', wrapper);

new Vue({
  strict: true,
  el: '#app',
  render(h) {
    return h('wrapper');
  },
  store
});
