"use strict";
exports.__esModule = true;
var vuex_1 = require("vuex");
exports["default"] = vuex_1.createStore({
    state: {
        tasks: [],
        currentUser: '',
        isLogin: false
    },
    getters: {},
    mutations: {
        deleteTask: function (state, id) {
            state.tasks = state.tasks.filter(function (removeTask) { return removeTask.id !== id; });
        },
        setTasks: function (state, tasks) {
            state.tasks = tasks;
        },
        setUser: function (state, user) {
            state.currentUser = user;
        },
        setLogin: function (state, isLogin) {
            state.currentUser = isLogin;
        }
    },
    actions: {
        deleteTask: function (context, id) {
            context.commit('deleteTask', id);
        },
        setTasks: function (context, tasks) {
            context.commit('setTasks', tasks);
        },
        setUser: function (context, user) {
            context.commit('setUser', user);
        },
        setLogin: function (context, isLogin) {
            context.commit('setLogin', isLogin);
        }
    },
    modules: {}
});
