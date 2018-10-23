'use strict';

/**
 * update the found gems list with a new array
 * @param  {object} state
 * @param  {array} newList
 * @return {object}
 */
export function updateAll(state, newList) {
  state.allGems = newList;
  return state;
}

/**
 * update the local gems list with a new array
 * @param  {object} state
 * @param  {array} newList
 * @return {object}
 */
export function updateLocal(state, newList) {
  state.localGems = newList;
  return state;
}

/**
 * update the message we pass into sections
 * @param  {object} state
 * @param  {string} message
 * @return {object}
 */
export function updateMessage(state, message) {
  state.message = message;
  return state;
}
