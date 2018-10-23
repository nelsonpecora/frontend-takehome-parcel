import { shallowMount, createLocalVue } from '@vue/test-utils';
import fetchMock from 'jest-fetch-mock';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

localVue.config.productionTip = false;
window.shallowMount = shallowMount; // don't render child components
window.fetch = fetchMock;
