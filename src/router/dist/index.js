"use strict";
exports.__esModule = true;
var LoginPage_vue_1 = require("@/Pages/LoginPage.vue");
var TasksPage_vue_1 = require("@/Pages/TasksPage.vue");
var CurrentTaskPage_vue_1 = require("@/Pages/CurrentTaskPage.vue");
var vue_router_1 = require("vue-router");
var PageNotFound_vue_1 = require("@/Pages/PageNotFound.vue");
var routes = [
    {
        path: "/index.html",
        redirect: "/task-list"
    },
    {
        path: '/task-list',
        component: LoginPage_vue_1["default"]
    },
    {
        path: '/alltasks',
        component: TasksPage_vue_1["default"]
    },
    {
        path: '/alltasks/:id',
        component: CurrentTaskPage_vue_1["default"]
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound_vue_1["default"]
    }
];
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHistory(process.env.BASE_URL),
    routes: routes
});
exports["default"] = router;
