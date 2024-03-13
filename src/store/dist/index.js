"use strict";
exports.__esModule = true;
var vuex_1 = require("vuex");
exports["default"] = vuex_1.createStore({
    state: {
        isLogin: false,
        tasks: [],
        users: [],
        currentUser: {}
    },
    getters: {},
    mutations: {
        setTasks: function (state, tasks) {
            state.tasks = tasks;
        },
        deleteTask: function (state, id) {
            state.tasks = state.tasks.filter(function (removeTask) { return removeTask.id !== id; });
        }
    },
    actions: {
        deleteTask: function (context, id) {
            context.commit('deleteTask', id);
        }
    },
    modules: {}
});
