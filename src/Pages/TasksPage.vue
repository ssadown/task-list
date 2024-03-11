<template>
    <div class="wrapper">
        <div class="tasks-page__wrapper">
            <PostForm
            :propsTasks="tasks"
            @update="tasks = $event"
            />
            <TaskList
            :propsTasks="tasks"
            @update:propsTasks="tasks = $event"
            />
        </div>
    </div>
</template>

<script>
import PostForm from '@/Components/PostForm.vue'
import TaskList from '@/Components/TaskList.vue'

export default {
    data() {
        return {
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
        }
    },
    components: {
        PostForm,
        TaskList
    }
}
</script>

<style lang="scss" scoped>
    .tasks-page__wrapper {
        height: 100%;
        width: 100%;
        display: flex;

    }
</style>