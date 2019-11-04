import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const todoData = {
  namespaced: true,
  state: {
    todos: [
      { id: 0, title: 'title0', message: 'body0', isDone: false },
      { id: 1, title: 'title1', message: 'body1', isDone: true },
      { id: 2, title: 'title2', message: 'body2', isDone: false },
    ],
    todo: {},
  },
  mutations: {
    addTodo(state, payload) {
      const item = {
        id: new Date().getTime(),
        title: payload.title,
        message: payload.message,
      }
      state.todos.push(item);
    },
    setTodo(state, payload) {
      state.todo = payload;
    }
  },
  actions: {
    addTodo({ commit }, payload) {
      commit('addTodo', payload)
    },
    setTodo({ commit }, payload) {
      commit('setTodo', payload)
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getTodoCount(state) {
      return state.todos.length;
    },
    getTodo(state) {
      return state.todo;
    }
    // getTodo: (state) => (id) => {
    //   return state.todos.find(todo => todo.id === id);
    // }
  }
}


export default new Vuex.Store({
  state: {
    todos: [
      {id: 0, title: 'sample', message: 'sample', isDone: false}
    ]
  },
  modules: {
    todoData,
  },
});