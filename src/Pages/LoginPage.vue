<template>
    <div class="wrapper">
        <Input
            v-model.trim="loginValue"
            placeholderText="Введите имя пользователя"
        />
        <p class="error-text" v-show="errorLogin">Вы не ввели имя пользователя!</p>    
        <Button
                buttonText="Войти"
                @click="() => {login(this.loginValue)}"
        />
    </div>
</template>

<script>
import Button from '@/Components/UI/Button.vue'
import Input from '@/Components/UI/Input.vue'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            loginValue: '',
            errorLogin: false
        }
    },
    components: {
        Button,
        Input
    },
    methods: {
        login(loginValue) {
            if (this.loginValue !== '') {
                localStorage.setItem('currentUser', loginValue)
                this.$store.dispatch('setUser', loginValue)
                localStorage.setItem('isLogin', true)
                this.$store.dispatch('setLogin', true)
                this.errorLogin = false
                this.$router.push('/alltasks')
            } else {
                this.errorLogin = true
            }
        }
    },
    computed: {
        ...mapState({
            currentUser: state => state.currentUser,
            isLogin: state => state.isLogin
        })
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
.error-text {
    font-size: 2vh;
    color: red;
}
</style>
