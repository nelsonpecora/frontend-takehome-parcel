'use strict';
import * as lib from './mutations';

describe('mutations', () => {
  test('updateAll', () => expect(lib.updateAll({ allGems: [] }, [1, 2, 3])).toEqual({
    allGems: [1, 2, 3]
  }));

  test('updateLocal', () => expect(lib.updateLocal({ localGems: [] }, [1, 2, 3])).toEqual({
    localGems: [1, 2, 3]
  }));

  test('updateMessage', () => expect(lib.updateMessage({ message: '' }, 'hi')).toEqual({
    message: 'hi'
  }));
});
