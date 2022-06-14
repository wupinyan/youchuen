<template>
    <main>

        <Overlayer :overlayer='overlayer' :overlayerInfo='overlayerInfo' @closeOverlayer='overlayer=false'/>
        
        <Poster/>

        <h2>商品 &nbsp; {{commodityList.name}}</h2>
        
        <ul ref="commodityUl">
            <Item v-for="commodity in commodityList.commodity" 
                :commodity='commodity' @openOverlayer="openOverlayer"
                :key='commodity.img'/>
        </ul>

    </main>
</template>

<script>
import Overlayer from './Overlayer'
import Poster from './Poster'
import Item from './Item'
export default {
    data() {
        return {
            overlayer: false,
            overlayerInfo: false
        }
    },
    computed:{
        commodityList(){
            const { $route, $store } = this
            const id = $route.params.id
            return $store.state.commodityList
                .commodityList[id] 
        },
    },
    methods:{
        openOverlayer(overlayerInfo){
            this.overlayerInfo = overlayerInfo
            this.overlayer = true
        }
    },
    watch:{
        commodityList(){
            document.querySelector('#app').scrollTop = 0 
        }
    },
    components: { Overlayer, Poster, Item },
}
</script>

<style lang="scss" scoped>
main {
    background: #eeeeee;
    h2 {
        border-bottom: solid orangered ;
        width: fit-content;
        margin: 16px;
        padding: 0;
        text-align: center;
    }
    ul {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
}
</style>