import Vue from "vue";
import Vuex from "vuex";
import todos from "./todos";

// Load vuex
Vue.use(Vuex);

// Create store
export const store = new Vuex.Store({
  modules: {
    todos
  }
});
