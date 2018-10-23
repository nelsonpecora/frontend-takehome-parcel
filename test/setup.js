import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import fetchMock from 'jest-fetch-mock';

Vue.config.productionTip = false;
window.shallowMount = shallowMount; // don't render child components
window.fetch = fetchMock;
