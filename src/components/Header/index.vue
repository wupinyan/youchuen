<template>
    <header>

        <img src="./logo.png" alt="無法顯示圖片">

        <Navigation :openRootCate='openRootCate'
        :openCommodityCate='openCommodityCate'
        @toggleRootCate='toggleRootCate' @toggleCommodityCate='toggleCommodityCate'/>
        
        <Btn @click.native="toggleRootCate()"/>

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
        toggleRootCate(){
            this.openRootCate = !this.openRootCate
        },
        toggleCommodityCate(){
            this.openCommodityCate = !this.openCommodityCate
        },
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
    padding: 8px 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 100px;
        margin-left: 8px;
    }

    svg{
        width: 40px;
        margin-right: 8px;
    }   
}

@media screen and (orientation: landscape) {
    header{
        height: 80px;
        padding: 0;
        svg{
            display: none;
        }
    }
}
</style>