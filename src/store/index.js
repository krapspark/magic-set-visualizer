import Vue from 'vue';
import Vuex from 'vuex';

import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

import znr from '../../data/formatted/ZNR.json';

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    charts: [],
    sets: {
      znr,
    },
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});