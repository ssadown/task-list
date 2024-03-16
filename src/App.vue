<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from '@/Components/Header.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Header
  },
  beforeMount () {
    if(localStorage.getItem('currentUser')) {
            this.setCurrentUser(localStorage.getItem('currentUser'))
            localStorage.setItem('isLogin', true)
            this.setLogin(true)
        }
  },
  methods: {
    setCurrentUser(user) {
            this.$store.dispatch('setUser', user)
        },
    setLogin(isLogin) {
        this.$store.dispatch('setLogin', isLogin)
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin,
      currentUser: state => state.currentUser
    }),
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  body, html {
    min-height: 100%;
    overflow: hidden;
  }
  #app {
    min-height: 100%;
    width: 100%;
  }
  .wrapper {
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: column;
    background-color: rgb(241, 250, 250);
}
</style>