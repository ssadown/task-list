<template>
    <div class="wrapper">
        <div class="wrapper__current-page">
            <h1>{{this.task.title}}</h1>
            <p>{{this.task.content}}</p>
            <input 
            type="checkbox"
            class="checkbox" 
            :id="`checkbox${task.id}`"
            :checked="task.completed"
            @input="updateComplete"
            :value="task.completed"
            >
            <label :for="`checkbox${task.id}`">Задание выполнено!</label>
            <Button
            :buttonText="'Удалить задачу'"
            :disabled="!task.completed" 
            @click="deleteTask"
            />
            <router-link to="/alltasks">Вернуться назад</router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Button from '@/Components/UI/Button.vue'

export default {
    components: {
        Button
    },
    methods: {
        updateComplete() {
            this.$store.dispatch('setCompleted', this.task.id);
        },
        deleteTask() {
            this.$store.dispatch('deleteTask', this.task.id)
            localStorage.removeItem('tasks')
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
            this.$router.push('/alltasks')
            
        },
    },
    computed: {
        ...mapState({
            task: state => state.currentTask,
            tasks: state => state.tasks
        }),
    }
}
</script>

<style lang="scss" scoped>
    .wrapper__current-page {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        h1 {
            font-size: 150%;
            cursor: pointer;
        }
        a {
            text-decoration: none;
            color:black;
            transition-duration: 0.6s;
            border-bottom: 2px solid transparent;
        }
        a:hover {
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