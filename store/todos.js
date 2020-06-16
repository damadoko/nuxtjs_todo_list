import { dataMockUp } from "./_dataMockup";
// const initdata = localStorage.getItem("DATA_LOCAL") || dataMockUp;

export const state = () => {
  let initdata = null;
  if (process.browser) {
    const localData = JSON.parse(localStorage.getItem("DATA_LOCAL"));
    if (localData) {
      initdata = localData;
    }
    localStorage.setItem("DATA_LOCAL", JSON.stringify(dataMockUp));
  } else {
    initdata = dataMockUp;
  }
  return initdata;
};

export const getters = {
  getTodos: state => state.todos,
  curentFilter: state => state.filter
};

export const actions = {
  completeTask({ commit }, id) {
    commit("setComplete", id);
  },
  deleteTask({ commit }, id) {
    commit("deleteTodo", id);
  },
  updateTask({ commit }, data) {
    commit("updateTodo", data);
  },
  addNew({ commit }, title) {
    commit("newTodo", title);
  },
  clearDonetask({ commit }) {
    commit("clear");
  },
  changeFilter({ commit }, status) {
    commit("filterTask", status);
  }
};

export const mutations = {
  setComplete: (state, id) => {
    const index = state.todos.findIndex(item => item.id === id);
    state.todos[index].completed = !state.todos[index].completed;
    localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  },
  deleteTodo: (state, id) => {
    state.todos = state.todos.filter(item => item.id !== id);
    localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  },
  updateTodo: (state, data) => {
    const index = state.todos.findIndex(item => item.id === data.id);
    state.todos[index].title = data.title;
    localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  },
  addTodo: (state, newTodo) => {
    newTodo.id = state.todos[0].id + 1;
    state.todos.unshift(newTodo);
    localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  },
  clear: state => {
    state.todos = state.todos.filter(item => !item.completed);
    localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  },
  filterTask: (state, status) => {
    state.filter = status;
    // localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  }
};
