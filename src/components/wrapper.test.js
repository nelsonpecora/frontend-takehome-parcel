import Wrapper from './wrapper';

describe('Wrapper', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('renders', () => {
    const wrapper = shallowMount(Wrapper);

    expect(wrapper.html()).toContain('The Bountiful Hoard');
  });

  test('saves items', () => {
    const wrapper = shallowMount(Wrapper);

    wrapper.vm.localGems = [];
    wrapper.vm.allGems = [{ name: 'foo' }];
    wrapper.vm.save({ name: 'foo' });
    expect(wrapper.vm.localGems[0]).toEqual({ name: 'foo' });
  });

  test('unsaves items', () => {
    const wrapper = shallowMount(Wrapper);

    wrapper.vm.localGems = [{ name: 'foo' }];
    wrapper.vm.allGems = [];
    wrapper.vm.remove({ name: 'foo' });
    expect(wrapper.vm.localGems).toEqual([]);
  });

  test('updates list', () => {
    const wrapper = shallowMount(Wrapper);

    fetch.once(JSON.stringify([{ name: 'foo' }, { name: 'bar' }]));
    return wrapper.vm.updateList('foo').then(() => {
      expect(wrapper.vm.allGems).toEqual([{ name: 'foo' }, { name: 'bar' }]);
    });
  });

  test('sets error message if list update errors', () => {
    const wrapper = shallowMount(Wrapper);

    fetch.mockRejectOnce(new Error('nope'));
    return wrapper.vm.updateList('foo').then(() => {
      expect(wrapper.vm.sectionMessage).toBe('The fault lies not in our stars, but in ourselves');
    });
  });

  test('sets error message if list update returns nothing', () => {
    const wrapper = shallowMount(Wrapper);

    fetch.once(JSON.stringify([]));
    return wrapper.vm.updateList('foo').then(() => {
      expect(wrapper.vm.sectionMessage).toBe('The wilds hold nothing for you');
    });
  });
});
