import Vuex from 'vuex';
import SearchForm from './search-form';

describe('SearchForm', () => {
  let updateList, store;

  beforeEach(() => {
    updateList = jest.fn();
    store = new Vuex.Store({
      state: {},
      actions: {
        updateList
      }
    })
  });

  test('renders', () => {
    const wrapper = shallowMount(SearchForm, { store, localVue });

    expect(wrapper.html()).toContain('search-input');
    expect(wrapper.html()).toContain('search-button');
  });

  test('triggers list update on submit', () => {
    const wrapper = shallowMount(SearchForm, { store, localVue });

    wrapper.vm.inputText = 'rails';
    wrapper.find('form').trigger('submit');
    expect(updateList).toHaveBeenCalled();
  });
});
