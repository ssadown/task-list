import { createStore } from 'vuex'
import taskInterface from '@/Interfaces/taskInterface'

export default createStore({
  state: {
    isLogin: false,
    tasks: <taskInterface[]>[],
    users: [],
    currentUser: {}
  },
  getters: {
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks 
    },
    deleteTask (state, id) {
      state.tasks = state.tasks.filter(removeTask => removeTask.id !== id)
    }
  },
  actions: {
    deleteTask (context, id) {
        context.commit('deleteTask', id)
    }
},
  modules: {
  }
})
