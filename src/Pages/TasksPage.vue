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
    components: {
        PostForm,
        TaskList
    },
    computed: {
        ...mapState({
            tasks: state => state.tasks
        })
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