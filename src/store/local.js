'use strict';
import { createStore } from 'store/src/store-engine';
import localStore from 'store/storages/localStorage';
import memoryStore from 'store/storages/memoryStorage';

const local = createStore([
  // persist to localStorage, falling back to memory storage when that's unavailable
  localStore,
  memoryStore
]);

export default local;
