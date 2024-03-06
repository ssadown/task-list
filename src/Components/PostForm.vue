<template>
    <form @submit.prevent>
        <h1>Создать новую задачу</h1>
        <Input
            :valueText="newTask.title"
            @update:valueText="newTask.title = $event"
            placeholderText="Введите название задачи"
        />
        <Input
            :valueText="newTask.content"
            @update:valueText="newTask.content = $event"
            placeholderText="Введите описание задачи"
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

export default {
    data() {
        return {
            newTask: {
                title: '',
                content: "",
            },
        }
    },
    components: {
        Input,
        Button
    },
    methods: {
        createTask() {
            alert(`id: ${Math.floor(Math.random() * 100000)}, title: ${this.newTask.title}, content: ${this.newTask.content}, completed: ${false}`)
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
    input {
        height: 10% !important;
        width: 60% !important;
    }
}
</style>