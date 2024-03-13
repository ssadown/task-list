<template>
    <div class="wrapper">
        <div class="tasks-page__wrapper">
            <PostForm/>
            <TaskList/>
        </div>
    </div>
</template>

<script>
import PostForm from '@/Components/PostForm.vue'
import TaskList from '@/Components/TaskList.vue'
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            tasks: state => state.tasks
        })
    },
    beforeMount() {
        const tasks = localStorage.getItem('tasks')
        const currentUser = localStorage.getItem('currentUser')
        if (tasks) {
            this.setTasks(JSON.parse(tasks))
        }
        if(currentUser) {
            this.setCurrentUser(currentUser)
            localStorage.setItem('isLogin', true)
            this.setLogin(true)
        }
    },
    methods: {
        setTasks (tasks) {
                this.$store.dispatch('setTasks', tasks)
            },
        setCurrentUser(user) {
            this.$store.dispatch('setUser', user)
        },
        setLogin(isLogin) {
            this.$store.dispatch('setLogin', isLogin)
        }
    },
    components: {
        PostForm,
        TaskList
    },

}
</script>

<style lang="scss" scoped>
    .tasks-page__wrapper {
        height: 100%;
        width: 100%;
        display: flex;
    }
</style>