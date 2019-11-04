import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const todoData = {
  namespaced: true,
  state: {
    todos: [
      { id: 0, title: 'title0', body: 'body0', isDone: false },
      { id: 1, title: 'title1', body: 'body1', isDone: true },
      { id: 2, title: 'title2', body: 'body2', isDone: false },
    ],
  },
  mutations: {
    addTodo(state, item) {
      state.todos.push(item);
    }
  },
  actions: {
    addTodo({ commit }, payload) {
      const item = {
        id: new Date().getTime(),
        title: payload.title,
        message: payload.message,
      }
      commit('addTodo', item)
    }
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getTodoCount(state) {
      return state.todos.length;
    }
  }
}


export default new Vuex.Store({
  state: {
    todos: [
      {id: 0, title: 'sample', message: 'sample', isDone: false}
    ]
  },
  mutations: {
    addTodo(state, item) {
      state.todos.push(item);
    },
  },
  actions: {
    addTodo({ commit }, payload) {
      const item = {
        id: new Date().getTime(),
        title: payload.title,
        message: payload.message,
      }
      commit('addTodo', item)
    },

  },

  modules: {
    todoData,
  },
});