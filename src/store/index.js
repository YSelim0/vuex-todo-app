import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos:[],
    ends:[],
  },
  getters:{

  },
  mutations: {
    addNewTodo(state, todo){
      state.todos.push(todo);
    },
    moveTodo(state,index){
      state.ends.push(state.todos[index]);
      state.todos.splice(index,1);
    }
  },
  actions: {
    addTodoTask({ commit }, todo){
      commit('addNewTodo',todo);
    },
    moveTodoItem({ commit }, index){
      commit('moveTodo',index);
    }
  }
})

export default store;