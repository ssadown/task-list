<template>
    <div class="task-block">
        <h1>{{propsTask.id}}</h1>
        <h2>{{propsTask.title}}</h2>
        <p class="task-content">{{propsTask.content}}</p>
        <p v-if="propsTask.completed === true" class="task-complete">Задача выполнена!</p>
        <p v-if="propsTask.completed === false" class="task-not-complete">Задача не готова!</p>
    </div>
</template>

<script>
export default {
    props: {
        propsTask: Object
    }
}
</script>

<style lang="scss" scoped>
    .task-block {
        width: 80%;
        height: 15%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 20px;
        border: 2px solid rgb(0, 13, 18);
        border-radius: 16px;
        h1 {
            font-size: 200%;
        }
        h2 {
            font-size: 150%
        }
        p {
            font-size: 100%;
        }
        .task-content {
            width: 50%;
            word-wrap: break-word;
        }
        .task-complete {
            color: green;
            font-weight: bold;
        }
        .task-not-complete {
            color: red;
            font-weight: bold;
        }
    }
</style>