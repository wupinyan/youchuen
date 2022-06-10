<template>
    <header>

        <img src="./logo.png" alt="無法顯示圖片">

        <Navigation :openRootCate='openRootCate'
        :openCommodityCate='openCommodityCate'
         @toggleCommodityCate='toggleCommodityCate'/>
        
        <Btn @click.native="openRootCate=!openRootCate" :openRootCate='openRootCate'/>

    </header>
</template>

<script>
import Navigation from './Navigation'
import Btn from './Btn'
export default {
    data() {
        return {
            openRootCate: false,
            openCommodityCate: false
        }
    },
    methods: {
        toggleCommodityCate(){
            this.openCommodityCate = !this.openCommodityCate
        },
    },
    watch: {
        '$route.path'(){
            this.openRootCate = false
            this.openCommodityCate = false
        }
    },
    components: {
    Navigation,
    Btn,
    Btn
}
}
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';
header{
    background-color: $color1;
    width: 100%;
    height: 40px;
    padding: 8px 0;
    box-shadow: 0 0 8px black;
    position: relative;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;

    img{
        width: 100px;
        margin-left: 8px;
    } 
}

@media screen and (min-width: 786px)  {
    header{
        height: 56px;
        padding: 0;
    }
}
</style>