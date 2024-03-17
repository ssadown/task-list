<template>
    <div class="task-list__wrapper" v-if="$store.state.tasks.length === 0">
        <h1>Все задачи выполнены!</h1>
    </div>
    <div class="task-list__wrapper" v-else>
        <h1>Задачи</h1>
        <transition-group name="task">
            <TaskBlock 
            v-for="task in tasks" 
            :key='task.id'
            :propsForCurrentTask="task"
            :propsDeleteTask="deleteTask"
            @update:propsTasks="tasks.completed = $event"
            @remove="deleteTask"
        />   
        </transition-group>        
    </div>
</template>

<script>
import TaskBlock from '@/Components/TaskBlock.vue'
import { mapState } from 'vuex'

export default {
    components: {
        TaskBlock
    },
    methods: {
            deleteTask (id) {
                this.$store.dispatch('deleteTask', id)
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            }
        },
    computed: {
        ...mapState({
            tasks: state => state.tasks
        })
    }
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
    overflow-x: hidden;
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
    .task-enter-active,
    .task-leave-active {
        transition: all 0.4s ease;
    }
    .task-enter-from,
    .task-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }
    .task-move {
        transition: transform 0.4s ease;
    }
}
@media screen and (max-width: 1024px) {
    .task-list__wrapper {
        width: 100%;
    }
}
</style>