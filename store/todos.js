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
  curentFilter: state => state.filter,
  getRecord: state => {
    const status = {};
    status.all = state.todos.length;
    status.done = state.todos.filter(item => item.completed).length;
    status.remain = state.todos.filter(item => !item.completed).length;

    return status;
  },
  getSelectedTodo: state => id => {
    return state.todos.filter(item => item.id === id);
  }
};

export const mutations = {
  setComplete: (state, id) => {
    const index = state.todos.findIndex(item => item.id === id);
    // Change todo complete status
    state.todos[index].completed = !state.todos[index].completed;
    // Change Tasks complete status && percentage
    if (state.todos[index].completed) {
      state.todos[index].tasks.map(item => (item.isDone = true));
      state.todos[index].percentage = 100;
    } else {
      state.todos[index].tasks.map(item => (item.isDone = false));
      state.todos[index].percentage = 0;
    }
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
  clearDoneTask: state => {
    state.todos = state.todos.filter(item => !item.completed);
    localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  },
  changeFilter: (state, status) => {
    state.filter = status;
    // localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  },
  delTask: (state, loadID) => {
    const index = state.todos.findIndex(item => item.id === loadID.todoID);
    console.log(
      state.todos[index].tasks.filter(item => item.taskID !== loadID.taskID)
    );
    state.todos[index].tasks = state.todos[index].tasks.filter(
      item => item.taskID !== loadID.taskID
    );
    localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  }
};
