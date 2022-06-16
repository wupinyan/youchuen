<template>
  <div id="app" ref="app">

    <div class="display" v-if="!$store.state.error.error">
      <Header/>
      <keep-alive>
        <router-view/>
      </keep-alive>
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
  watch: {
    '$route.path'(){
      this.$refs.app.scrollTop = 0
    }
  },
  components: {
    Header,
    Footer,
    Error
}
}
</script>

<style lang="scss" scoped>
#app{
  overflow-x: hidden;
  height: 100vh;  
}
</style>