import { getTodos, addTodo, deleteTodo, updateTodo } from '@/service/todo';

const state = {
  todos: {},
}

const mutations = {
  GET_TODOS: (state, data) => {
    state.todos = data.results;
  }
}

const actions = {
  getTodos: async({ commit }) => {
    const { data } = await getTodos();
    commit('GET_TODOS', data);
  },

  addTodo: async({ commit }, content) => {
    const { data } = await addTodo(content);
    commit('GET_TODOS', data);
  },

  deleteTodo: async({ commit }, id) => {
    const { data } = await deleteTodo(id);
    commit('GET_TODOS', data);
  },

  toggleTodo: async({ commit }, todo) => {
    const { data } = await updateTodo(todo);
    commit('GET_TODOS', data);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}