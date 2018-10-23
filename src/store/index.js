'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations';
import * as actions from './actions';
import local from './local';

const STORAGE_KEY = 'local-gems',
  SEARCH_MESSAGE = 'Enscribe your query to begin your quest';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    allGems: [],
    localGems: local.get(STORAGE_KEY) || [], // preload on startup
    message: SEARCH_MESSAGE
  },
  mutations,
  actions
});

export default store;
