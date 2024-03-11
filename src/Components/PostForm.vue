<template>
    <form @submit.prevent>
        <h1>Создать новую задачу</h1>
        <Input
            :valueText="newTask.title"
            @update:valueText="newTask.title = $event"
            placeholderText="Введите название задачи"
        />
        <Textarea
            :valueText="newTask.content"
            @update:valueText="newTask.content = $event"
            placeholderText="Введите описание задачи"
            class="content-input"
        />
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

export default {
    data() {
        return {
            newTask: {
                title: '',
                content: "",
            },
        }
    },
    props: {
        propsTasks: Array
    },
    components: {
        Input,
        Button,
        Textarea
    },
    methods: {
        createTask(event) {
            let newTasks = this.propsTasks
            newTasks.push({
                id: Math.floor(Math.random() * 100000),
                title: this.newTask.title,
                content: this.newTask.content,
                completed: false
            })
            this.$emit('update', newTasks)
            this.newTask.title = ''
            this.newTask.content = ''
        }
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
}
</style>