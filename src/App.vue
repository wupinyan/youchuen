<template>
  <div class="app">
    <Header/>
    <div class="view"></div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Footer,
    Footer
}
}
</script>

<style lang="scss" scoped>
.app{
  overflow-x: hidden;
  .view{
    height: 300px;
  }
}
</style>