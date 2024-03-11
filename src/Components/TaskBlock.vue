<template>
    <div class="task-block">
        <h1>{{propsForCurrentTask.id}}</h1>
        <h2>{{propsForCurrentTask.title}}</h2>
        <p class="task-content">{{propsForCurrentTask.content}}</p>
        <div class="task-block__complete-block">
            <div class="complete-block__checkbox">
                <input type="checkbox" :id="['checkbox' + propsForCurrentTask.id]" class="checkbox" :checked="propsForCurrentTask.completed" :value="propsForCurrentTask.completed" @input="updateComplete">
                <label :for="['checkbox' + propsForCurrentTask.id]">Выполнено</label>
            </div>
            <p :class="[propsForCurrentTask.completed ? 'task-complete' : 'task-not-complete']">{{propsForCurrentTask.completed ? 'Задача выполнена!' : 'Задача не выполнена!'}}</p>
            <button :disabled="!propsForCurrentTask.completed" @click="deleteTask">Удалить задачу</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        propsForCurrentTask: Object,
        propsTasks: Array,
        propsDeleteTask: Function
    }, 
    methods: {
        updateComplete(event) {
            this.propsForCurrentTask.completed = event.target.checked;
            this.$emit('update:propsTask', event.target)
        },

        deleteTask() {
            this.propsDeleteTask(this.propsForCurrentTask.id)
        }
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
        transition-duration: 0.4s;
        h1 {
            font-size: 150%;
        }
        h2 {
            font-size: 150%;
            width: 20%;
            word-wrap: break-word;
        }
        p {
            font-size: 100%;

        }
        label {
            font-size: 100%;
            cursor: pointer;
        }
        .task-content {
            width: 30%;
            word-wrap: break-word;
        }
        .task-complete {
            color: green;
            font-weight: bold;
            transition-duration: 0.4s;
        }

        .task-not-complete {
            color: red;
            font-weight: bold;
            transition-duration: 0.4s;
        }
        .task-block__complete-block {
            height: 100%;
            width: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        .complete-block__checkbox {
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            input {
                margin: 0;
                height: unset;
                width: unset;
                margin-right: 10px;
            }
        }
        .checkbox {
            position: absolute;
            z-index: -1;
            opacity: 0;
        }
        .checkbox+label {
            display: inline-flex;
            align-items: center;
            user-select: none;
        }
        .checkbox+label::before {
            content: '';
            display: inline-block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid rgb(0, 13, 18);
            border-radius: 0.25em;
            margin-right: 0.5em;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
            cursor: pointer;
            transition-duration: 0.15s;
            outline: 0;
        }
        .checkbox:checked+label::before {
            border-color: rgb(0, 13, 18);
            background-color: rgb(0, 13, 18);
            background-image: url("../images/checkmark-svgrepo-com.svg");
        }
        .checkbox:not(:disabled):not(:checked)+label:hover::before {
            border-color: #b3d7ff;
        }
          /* стили для активного состояния чекбокса (при нажатии на него) */
        .checkbox:not(:disabled):active+label::before {
            background-color: #b3d7ff;
            border-color: #b3d7ff;
        }
          /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
        .checkbox:focus:not(:checked)+label::before {
            border-color: rgb(0, 13, 18);
        }
          /* стили для чекбокса, находящегося в состоянии disabled */
        .checkbox:disabled+label::before {
            background-color: rgb(0, 13, 18);
        }
        button {
            padding: 5px 10px;
            margin-top: 10px;
            height: 20%;
            width: 50%;
            border: 1px solid rgb(0, 13, 18);
            background-color: transparent;
            border-radius: 12px;
            transition-duration: 0.4s;
            cursor: pointer;
        }
        button:hover {
            color:white;
            background-color: rgb(0, 13, 18);
        }
        button:disabled {
            color: gray;
            background-color: rgb(26, 28, 29);
            cursor: not-allowed;
        }
    }
</style>