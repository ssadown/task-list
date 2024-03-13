"use strict";
exports.__esModule = true;
var vuex_1 = require("vuex");
exports["default"] = vuex_1.createStore({
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
    getters: {},
    mutations: {
        setTasks: function (state, tasks) {
            state.tasks = tasks;
        },
        addTask: function (state, newTask) {
            state.tasks.push(newTask);
        }
    },
    actions: {},
    modules: {}
});
