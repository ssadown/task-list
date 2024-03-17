<template>
    <div class="task-block">
        <router-link 
        :to="`/alltasks/${propsForCurrentTask.id}`"
        @click="() => {setTask()}"
        >
            <h1>
                {{propsForCurrentTask.id}}
            </h1>
        </router-link>
        <h2>{{propsForCurrentTask.title}}</h2>
        <p class="task-content">{{propsForCurrentTask.content}}</p>
        <div class="task-block__complete-block">
            <div class="complete-block__checkbox">
                <input 
                type="checkbox" 
                :id="['checkbox' + propsForCurrentTask.id]" 
                class="checkbox" 
                :checked="propsForCurrentTask.completed" 
                :value="propsForCurrentTask.completed" 
                @input="updateComplete"
                >
                <label :for="['checkbox' + propsForCurrentTask.id]">Выполнено</label>
            </div>
            <p :class="[propsForCurrentTask.completed ? 'task-complete' : 'task-not-complete']">{{propsForCurrentTask.completed ? 'Задача выполнена!' : 'Задача не выполнена!'}}</p>
            <button :disabled="!propsForCurrentTask.completed" @click="deleteTask">Удалить задачу</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    props: {
        propsForCurrentTask: Object,
        propsDeleteTask: Function
    }, 
    methods: {
        updateComplete(event) {
            this.propsForCurrentTask.completed = event.target.checked;
            this.$emit('update:propsTask', event.target)
            localStorage.removeItem('tasks')
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },

        deleteTask() {
            this.$emit('remove', this.propsForCurrentTask.id)
        },
        setTask() {
            this.$store.dispatch('setCurrentTask', this.propsForCurrentTask)
            console.log(this.$store.currentTask)
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
        min-height: 120px;
        margin-bottom: 20px;
        h1 {
            font-size: 150%;
            cursor: pointer;
        }
        a {
            text-decoration: none;
            color:black;
            transition-duration: 0.2s;
            border-bottom: 1px solid transparent;
        }
        a:hover {
            animation: k-link-anim 0.8s linear infinite ;
            border-bottom: 2px solid black;
        }
        h2 {
            font-size: 150%;
            width: 20%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        p {
            font-size: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        label {
            font-size: 100%;
            cursor: pointer;
        }
        .task-content {
            width: 30%;
            max-height: 100%;
        }
        .task-complete {
            color: green;
            font-weight: bold;
            transition-duration: 0.4s;
            font-size: 1.5vh;
        }

        .task-not-complete {
            color: red;
            font-weight: bold;
            transition-duration: 0.4s;
            font-size: 1.5vh;
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
            height: 25%;
            display: flex;
            align-items: center;
            justify-content: center;
            input {
                margin: 0;
                height: unset;
                width: unset;
            }
        }
        .checkbox {
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
        .checkbox:not(:disabled):active+label::before {
            background-color: #b3d7ff;
            border-color: #b3d7ff;
        }
        .checkbox:focus:not(:checked)+label::before {
            border-color: rgb(0, 13, 18);
        }
        .checkbox:disabled+label::before {
            background-color: rgb(0, 13, 18);
        }
        button {
            padding: 5px 10px;
            margin-top: 10px;
            height: 30%;
            width: 50%;
            border: 1px solid rgb(0, 13, 18);
            background-color: transparent;
            border-radius: 12px;
            transition-duration: 0.4s;
            cursor: pointer;
            font-size: 1.3vh
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
    @keyframes k-link-anim {
        0% {
            
        }
        25% {
            margin-bottom: 10px;
        }
        50% {
            margin-bottom: 0;
        }
        75% {
            margin-top: 10px;
        }
        100% {
            margin-top: 0;
        }
    }
    @media screen and (max-width: 600px) {
        .task-block {
            height: 60%;
            min-height: 300px;
            flex-direction: column;
            h2 {
                width: 100%;
                text-align: center;
            }
            .task-content {
                width: 100%;
                max-height: 100%;
                text-align: center;
            }
        }
        .task-block__complete-block {
            height: 40% !important;
            width: 100% !important;
        }
    }
</style>