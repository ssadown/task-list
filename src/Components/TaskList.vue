<template>
    <div class="task-list__wrapper" v-if="$store.state.tasks.length === 0">
        <h1>Все задачи выполнены!</h1>
    </div>
    <div class="task-list__wrapper" v-else>
        <h1>Задачи</h1>
        <TaskBlock 
            v-for="task in $store.state.tasks" 
            :key='task.id'
            :propsForCurrentTask="task"
            :propsTasks="propsTasks"
            :propsDeleteTask="deleteTask"
            @update:propsTasks="propsTasks.completed = $event"
        />           
    </div>
</template>

<script>
import TaskBlock from '@/Components/TaskBlock.vue'

export default {
    components: {
        TaskBlock
    },
    methods: {
            deleteTask (id) {
                let newTasks = this.propsTasks.filter(task => task.id !== id)
                console.log(newTasks)
                this.$emit('update:propsTasks', newTasks)
            }
        },
}
</script>

<style lang="scss" scoped>
.task-list__wrapper {
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    h1 {
        margin-top: 20px;
        font-size: 200%;
    }
    button {
        height: 10% !important;
        width: 60% !important;
    }
    input {
        height: 10% !important;
        width: 60% !important;
    }
}
</style>