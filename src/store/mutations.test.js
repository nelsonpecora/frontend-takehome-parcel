'use strict';
import * as lib from './mutations';

describe('mutations', () => {
  describe('updateAll', () => {
    test('updates allGems', () => {
      expect(lib.updateAll({ allGems: [] }, [1, 2, 3])).toEqual({
        allGems: [1, 2, 3]
      });
    });
  });
});
