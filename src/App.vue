<template>
  <div class="app">

    <div class="display" v-if="!$store.state.error.error">
      <Header/>
      <div class="view"></div>
      <Footer/>
    </div>

    <Error v-else/>
  
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error/index.vue'
export default {
  components: {
    Header,
    Footer,
    Error
}
}
</script>

<style lang="scss" scoped>
.app{
  overflow-x: hidden;
  height: 100vh;
  .display{
    .view{
      height: 300px;
    }
  }
  
}
</style>