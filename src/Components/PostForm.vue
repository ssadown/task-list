<template>
    <form @submit.prevent>
        <h1>Создать новую задачу</h1>
        <Input
            v-model.trim="newTask.title"
            placeholderText="Введите название задачи"
        />
        <p class="error-text" v-show="errorForm.errorTitle">Вы не заполнили название задачи!</p>
        <Textarea
            v-model.trim="newTask.content"
            placeholderText="Введите описание задачи"
            class="content-input"
        />
        <p class="error-text" v-show="errorForm.errorContent">Вы не заполнили описание задачи!</p>
        <Button
            buttonText="Создать задачу"
            @click="createTask"
        />
    </form>
</template>

<script>
import Input from '@/Components/UI/Input.vue'
import Button from '@/Components/UI/Button.vue'
import Textarea from '@/Components/UI/Textarea.vue'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            newTask: {
                title: '',
                content: "",
            },
            errorForm: {
                errorTitle: false,
                errorContent: false,
            }
        }
    },
    components: {
        Input,
        Button,
        Textarea
    },
    methods: {
        createTask() {
            if (this.newTask.title !== '' && this.newTask.content !== '') {
                let addTask = {
                    id: Math.floor(Math.random() * 100000),
                    title: this.newTask.title,
                    content: this.newTask.content,
                    completed: false
                }
                let isDuplicate = false;
                for (let i = 0; i < this.tasks.length; i++) {
                    if (addTask.id === this.tasks[i].id) {
                        addTask.id = Math.floor(Math.random() * 100000);
                        i = -1; 
                        isDuplicate = true;
                    } else {
                        isDuplicate = false
                    }
                }
                if (!isDuplicate) {
                    this.tasks.push(addTask);
                    localStorage.setItem('tasks', JSON.stringify(this.tasks))
                }
                this.newTask.title = ''
                this.newTask.content = ''
                this.errorForm.errorTitle = false
                this.errorForm.errorContent = false
            } else if(this.newTask.title === '' && this.newTask.content === '') {
                this.errorForm.errorTitle = true
                this.errorForm.errorContent = true
            } else if (this.newTask.title === '') {
                this.errorForm.errorTitle = true
                this.errorForm.errorContent = false
            } else if (this.newTask.content === '') {
                this.errorForm.errorTitle = false
                this.errorForm.errorContent = true
            }
        },
    },
    computed: {
        ...mapState({
            tasks: state => state.tasks
        })
    }
}
</script>

<style lang="scss" scoped>
form {
    height: 60%;
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    h1 {
        font-size: 200%;
    }
    button {
        height: 10% !important;
        width: 60% !important;
    }
    input[type="text"]{
        height: 10% !important;
        width: 60% !important;
    }
    .content-input {
        height: 40% !important;
    }
    .error-text {
        color: red;
        font-size: 2vh;
        margin-top: 10px;
    }
}
</style>