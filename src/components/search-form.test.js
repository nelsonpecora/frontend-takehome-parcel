import SearchForm from './search-form';

describe('SearchForm', () => {
  test('renders', () => {
    const wrapper = shallowMount(SearchForm);

    expect(wrapper.html()).toContain('search-input');
    expect(wrapper.html()).toContain('search-button');
  });

  test('emits update-list when submitted', () => {
    const wrapper = shallowMount(SearchForm);

    wrapper.vm.inputText = 'rails';
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted()['update-list'][0]).toEqual(['rails']);
  });
});
