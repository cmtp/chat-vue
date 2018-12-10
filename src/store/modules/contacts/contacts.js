import Contacts from '../../../api/Api';

// initial state
const state = {
  all: [],
};

// getters
const getters = {};

// actions
const actions = {
  getAllContacts({ commit }) {
    Contacts.getContacts((contacts) => {
      commit('setContacts', contacts);
    });
  },
};

// mutations
const mutations = {
  setContacts(state, contacts) {
    state.all = contacts;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
