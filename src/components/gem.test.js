import Vuex from 'vuex';
import Gem from './gem';

describe('Gem', () => {
  let save, remove, store;

  beforeEach(() => {
    save = jest.fn();
    remove = jest.fn();
    store = new Vuex.Store({
      state: {
        localGems: [{ project_uri: 'http://facebook.com' }]
      },
      actions: {
        save,
        remove
      }
    })
  });

  test('renders with name, url, author, info', () => {
    const wrapper = shallowMount(Gem, {
      propsData: {
        item: {
          name: 'foo-bar',
          project_uri: 'http://google.com',
          authors: 'Nelson',
          info: 'Some text here'
        }
      },
      store,
      localVue
    });

    expect(wrapper.html()).toContain('<span class="gem-title">Foo Bar');
    expect(wrapper.html()).toContain('href="http://google.com"');
    expect(wrapper.html()).toContain('<span class="gem-authors">Nelson</span>');
    expect(wrapper.html()).toContain('<p class="gem-info">Some text here</p>');
  });

  test('uses Unknown Author when author is undefined', () => {
    const wrapper = shallowMount(Gem, {
      propsData: {
        item: {
          name: 'foo-bar'
        }
      },
      store,
      localVue
    });

    expect(wrapper.html()).toContain('<span class="gem-authors">Unknown Author</span>');
  });

  test('displays remove button if gem is stored locally', () => {
    const wrapper = shallowMount(Gem, {
      propsData: {
        action: 'Covet',
        item: {
          name: 'baz-qux',
          project_uri: 'http://facebook.com'
        }
      },
      store,
      localVue
    });

    expect(wrapper.html()).toContain('Discard');
  });

  test('triggers save', () => {
    const wrapper = shallowMount(Gem, {
      propsData: {
        action: 'Covet',
        item: {
          name: 'foo-bar'
        }
      },
      store,
      localVue
    });

    wrapper.find('button').trigger('click');
    expect(save).toHaveBeenCalled();
  });

  test('triggers remove', () => {
    const wrapper = shallowMount(Gem, {
      propsData: {
        item: {
          name: 'baz-qux',
          project_uri: 'http://facebook.com'
        }
      },
      store,
      localVue
    });

    wrapper.find('button').trigger('click');
    expect(remove).toHaveBeenCalled();
  });
});
