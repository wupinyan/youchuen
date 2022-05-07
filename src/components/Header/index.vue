<template>
    <header>

        <img src="./logo.png" alt="無法顯示圖片">

        <Navigation :openRootCate='openRootCate'
        :openCommodityCate='openCommodityCate'
        @toggleRootCate='toggleRootCate' @toggleCommodityCate='toggleCommodityCate'/>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
            <line x1="0" y1="2.5" x2="10" y2="2.5"
                style="stroke:rgb(255,255,255);stroke-width:1"/>
            <line x1="0" y1="5" x2="10" y2="5"
                style="stroke:rgb(255,255,255);stroke-width:1"/>
            <line x1="0" y1="7.5" x2="10" y2="7.5"
                style="stroke:rgb(255,255,255);stroke-width:1"/>    
        </svg>

    </header>
</template>

<script>
import Navigation from './Navigation'
export default {
    data() {
        return {
            openRootCate: true,
            openCommodityCate: false
        }
    },
    methods: {
        toggleRootCate(openRootCate){
            this.openRootCate = openRootCate
        },
        toggleCommodityCate(openCommodityCate){
            this.openCommodityCate = openCommodityCate
        },
    },
    components: {
        Navigation,
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';
header{
    background-color: $color1;
    padding: 8px 12px;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 100px;
    }

    svg{
        width: 40px;
    }   
}

@media screen and (orientation: landscape) {
    header{
        svg{
            display: none;
        }
    }
}
</style>