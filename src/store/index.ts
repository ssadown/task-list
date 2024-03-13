import { createStore } from 'vuex'
import taskInterface from '@/Interfaces/taskInterface'

export default createStore({
  state: {
    tasks: <taskInterface[]>[],
    currentUser: '',
    isLogin: false,
  },
  getters: {
  },
  mutations: {
    deleteTask (state, id) {
      state.tasks = state.tasks.filter(removeTask => removeTask.id !== id)
    }, 
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setUser(state, user) {
      state.currentUser = user
    },
    setLogin (state, isLogin) {
      state.currentUser = isLogin
    }
  },
  actions: {
    deleteTask (context, id) {
        context.commit('deleteTask', id)
    },
    setTasks (context, tasks) {
      context.commit('setTasks', tasks)
    },
    setUser (context, user) {
      context.commit('setUser', user)
    },
    setLogin (context, isLogin) {
      context.commit('setLogin', isLogin)
    }
},
  modules: {
  }
})
