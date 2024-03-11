<template>
    <div class="wrapper">
        <Input
            :valueText="loginValue"
            @update:valueText="loginValue = $event"
            placeholderText="Введите логин"
        />    
        <Input
            :valueText="passwordValue"
            @update:valueText="passwordValue = $event"
            placeholderText="Введите пароль"
            type="password"
        />  
        <Button
                buttonText="Войти"
                @click="login"
        />
    </div>
</template>

<script>
import Button from '@/Components/UI/Button.vue'
import Input from '@/Components/UI/Input.vue'

export default {
    data() {
        return {
            loginValue: '',
            passwordValue: '',
        }
    },
    components: {
        Button,
        Input
    },
    methods: {
        login() {
            alert(this.loginValue + ' ' + this.passwordValue)
            this.$router.push('/task')
        }
    }
}
</script>

<style lang="scss" scoped>
input {
    width: 30%;
    height: 10%;
    margin-top: 40px;
    border: 1px solid rgb(0, 13, 18);
    outline: 0;
    border-radius: 16px;
    text-indent: 15px;
    font-size: 100%;
}
</style>
