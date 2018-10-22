'use strict';
import Vue from 'vue';
import wrapper from './components/wrapper.vue';

const Wrapper = Vue.component('wrapper', wrapper),
  app = new Wrapper().$mount();

// add the vue app to the page
document.body.appendChild(app.$el);
