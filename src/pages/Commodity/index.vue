<template>
    <main>

        <div class="mask" ref="mask" v-show="mask"></div>
        
        <Poster/>

        <h2  @click.stop="openMask">商品 &nbsp; {{commodityList.name}}</h2>
        
        <ul ref="commodityUl">
            <Item v-for="commodity in commodityList.commodity" :commodity='commodity' :key='commodity.img'/>
        </ul>

    </main>
</template>

<script>
import Poster from './Poster'
import Item from './Item'
export default {
    data() {
        return {
            mask: false
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
    methods: {
        openMask(){
            this.mask = true
            console.log(this.$refs.mask.offsetY);
        }
    },
    watch:{
        commodityList(){
            document.querySelector('#app').scrollTop = 0 
        }
    },
    components: { Poster, Item },
}
</script>

<style lang="scss" scoped>
main {
    background: #eeeeee;
    .mask {
        border: solid red;
        width: 90%;
        height: 100vh;
        background-color: rgba(#222222, .8);
        position: fixed;
        z-index: 5;
    }
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