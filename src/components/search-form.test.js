import SearchForm from './search-form';

describe('SearchForm', () => {
  test('renders', () => {
    const wrapper = shallowMount(SearchForm);

    expect(wrapper.html()).toContain('search-input');
    expect(wrapper.html()).toContain('search-button');
  });
});
