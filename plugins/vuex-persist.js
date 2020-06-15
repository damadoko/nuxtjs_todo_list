import VuexPersistence from "vuex-persist";

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: "DATA_LOCAL",
      storage: window.localStorag
    }).plugin(store);
  });
};
