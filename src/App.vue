<template>
  <div class="app">
    <Header/>
    <div class="view"></div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.app{
  overflow-x: hidden;
  .view{
    height: 1200px;
    background: rgba(yellow, .5);
  }
}
</style>