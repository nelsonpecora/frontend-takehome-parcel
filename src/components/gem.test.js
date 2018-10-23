import Gem from './gem';

describe('Gem', () => {
  test('renders with name, url, author, info', () => {
    const wrapper = shallowMount(Gem, {
      propsData: {
        item: {
          name: 'foo-bar',
          project_uri: 'http://google.com',
          authors: 'Nelson',
          info: 'Some text here'
        }
      }
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
      }
    });

    expect(wrapper.html()).toContain('<span class="gem-authors">Unknown Author</span>');
  });

  test('emits action on click', () => {
    const wrapper = shallowMount(Gem, {
      propsData: {
        item: {
          name: 'foo-bar'
        }
      }
    });

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().action[0]).toEqual([{ name: 'foo-bar' }]);
  });
});
