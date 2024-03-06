<template>
    <div class="task-list__wrapper">
        <TaskBlock 
        v-for="task in propsTasks" 
        :key='task.id'
        :propsTask="task"
        />
    </div>
</template>

<script>
import TaskBlock from '@/Components/TaskBlock.vue'

export default {
    props: {
        propsTasks: Array
    },
    components: {
        TaskBlock
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
    h1 {
        color: white;
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