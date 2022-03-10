import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    planetsData: [],
    charactersData: []
  },
  actions: {
    getPlanetsData({ commit }){
      axios.get("https://swapi.dev/api/planets").then(res => {
        commit('SET_PLANETS', res.data.results)
      }).catch(error => {
        console.log(error)
      })
    },
    getCharactersData({ commit }){
      axios.get("https://swapi.dev/api/people").then(res => {
        commit('SET_CHARACTERS', res.data.results)
      }).catch(error => {
        console.log(error);
      })
    }
  },
  mutations: {
    SET_PLANETS(state, planetsData){
      state.planetsData = planetsData
    },
    SET_CHARACTERS(state, charactersData){
      state.charactersData = charactersData
    }
  },
  modules: {},
  getters: {},
});
