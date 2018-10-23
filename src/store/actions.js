'use strict';
import { pick } from 'lodash';
import local from './local';

const STORAGE_KEY = 'local-gems',
  ERROR_MESSAGE = 'The fault lies not in our stars, but in ourselves',
  SEARCH_MESSAGE = 'Enscribe your query to begin your quest';

/**
 * save a gem to the local list
 * @param  {object} store
 * @param  {object} gem
 * @return {Promise}
 */
export function save(store, gem) {
  const localGems = [...store.state.localGems]

  localGems.unshift(gem);
  store.commit('updateLocal', localGems);
  local.set(STORAGE_KEY, localGems);
}

/**
 * remove a gem from the local list
 * @param  {object} store
 * @param  {object} gem
 * @return {Promise}
 */
export function remove(store, gem) {
  const index = store.state.localGems.findIndex((g) => g.project_uri === gem.project_uri),
    localGems = [...store.state.localGems];

  if (index > -1) {
    localGems.splice(index, 1);
  }
  store.commit('updateLocal', localGems);
  local.set(STORAGE_KEY, localGems);
}

/**
 * query the api for a new list
 * @param  {object} store
 * @param  {string} query
 * @return {Promise}
 */
export function updateList(store, query) {
  if (!query.length) {
    store.commit('updateMessage', SEARCH_MESSAGE);
    return;
  }

  return fetch(`http://localhost:3000/api/v1/search.json?query=${encodeURIComponent(query)}`)
    .then((res) => {
      if (!res.status || res.status < 200 || res.status >= 400) {
        store.commit('updateMessage', ERROR_MESSAGE);
        return [];
      } else {
        return res.json();
      }
    })
    .then((gemList) => {
      // only use the properties we care about,
      // since we're potentially putting the whole objects into localStorage
      const allGems = gemList.map((gem) => pick(gem, ['name', 'project_uri', 'authors', 'info']));

      if (!gemList.length && query) {
        store.commit('updateMessage', 'The wilds hold nothing for you');
      }

      store.commit('updateAll', allGems);
    })
    .catch(() => {
      store.commit('updateMessage', ERROR_MESSAGE);
    });
}
