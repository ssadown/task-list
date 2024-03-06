
<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from '@/Components/Header.vue'

export default {
  components: {
    Header
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