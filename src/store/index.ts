import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false,
    tasks: [
      {
        id: 1,
        title: 'Название задачи №1',
        content: 'Содержание',
        completed: false
    },
    {
        id: 2,
        title: 'Название задачи №2',
        content: 'Содержание',
        completed: false
    },
    {
        id: 3,
        title: 'Название задачи №3',
        content: 'Содержание',
        completed: true
    },
    ],
    users: [],
    currentUser: {}
  },
  getters: {
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks 
    },
    addTask(state, newTask) {
      state.tasks.push(newTask)
    }
  },
  actions: {
  },
  modules: {
  }
})
