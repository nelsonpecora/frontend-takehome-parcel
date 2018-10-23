'use strict';
import * as lib from './actions';

jest.mock('./local');

describe('actions', () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  describe('save', () => {
    const fn = lib.save;

    test('adds gem to front of list', () => {
      fn({
        commit,
        state: {
          localGems: [{ name: 'gem1' }]
        }
      }, { name: 'gem2' });
      expect(commit).toHaveBeenCalledWith('updateLocal', [{ name: 'gem2' }, { name: 'gem1' }]);
    });
  });

  describe('remove', () => {
    const fn = lib.remove;

    test('removes gem from local list', () => {
      fn({
        commit,
        state: {
          localGems: [{ project_uri: 'gem1' }]
        }
      }, { project_uri: 'gem1' });
      expect(commit).toHaveBeenCalledWith('updateLocal', []);
    });

    test('does not remove gem if it is not found', () => {
      fn({
        commit,
        state: {
          localGems: [{ project_uri: 'gem1' }]
        }
      }, { project_uri: 'gem2' });
      expect(commit).toHaveBeenCalledWith('updateLocal', [{ project_uri: 'gem1' }]);
    });
  });

  describe('updateList', () => {
    const fn = lib.updateList;

    beforeEach(() => {
      fetch.resetMocks();
    });

    test('queries for gems', () => {
      fetch.once(JSON.stringify([{ name: 'foo' }, { name: 'bar' }]));
      return fn({ commit }, 'rails').then(() => {
        expect(commit).toHaveBeenCalledWith('updateAll', [{ name: 'foo' }, { name: 'bar' }]);
      });
    });

    test('sets error message if list update errors', () => {
      fetch.mockRejectOnce(new Error('nope'));
      return fn({ commit }, 'rails').then(() => {
        expect(commit).toHaveBeenCalledWith('updateMessage', 'The fault lies not in our stars, but in ourselves');
      });
    });

    test('sets error message if no gems in response', () => {
      fetch.once(JSON.stringify([]));
      return fn({ commit }, 'rails').then(() => {
        expect(commit).toHaveBeenCalledWith('updateMessage', 'The wilds hold nothing for you');
      });
    });
  });
});
