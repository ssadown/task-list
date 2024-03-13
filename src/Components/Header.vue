<template>
  <header>
    <h1 v-if="this.currentUser">{{ this.currentUser }}</h1>
    <h1>TaskList on Vue + TypeScript</h1>
    <Button
    v-if="this.currentUser"
    :buttonText="'Выйти'"
    @click="() => {exitFromApp}"
    />
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Button from '@/Components/UI/Button.vue';

export default {
  computed: {
    ...mapState({
      currentUser: state => state.currentUser
    })
  },
  components: {
    Button
  },
  methods: {
    setCurrentUser(user) {
            this.$store.dispatch('setUser', user)
        },
    setLogin(isLogin) {
            this.$store.dispatch('setLogin', isLogin)
        },
    exitFromApp () {
      this.$router.push('/')
      localStorage.removeItem('currentUser')
      localStorage.setItem('isLogin', false)
      this.setCurrentUser('')
      this.setLogin(false)
    },
  }
}
</script>

<style lang="scss" scoped>
    header {
        width: 100%;
        height: 10vh;
        background-color: rgb(0, 13, 18);
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        h1 {
            font-size: 300%;
            
        }
    }
    button {
      width: 10%;
      height: 50%;
      margin-top: 0;
      border: 1px solid white;
      color: white;
      outline: 0;
      border-radius: 16px;
      font-size: 100%;
      transition-duration: 0.4s;
      cursor: pointer;
      background-color: transparent;
  }
  button:hover {
      background-color: white;
      color:rgb(0, 13, 18)
  }
</style>