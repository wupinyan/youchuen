<template>
    <main ref="page">
        
        <Poster/>

        <h2>商品 &nbsp; {{commodityList.name}}</h2>
        
        <ul ref="commodityUl">
            <Item v-for="(commodity, key) in commodityList.commodity" :commodity='commodity' :key='key'/>
        </ul>

    </main>
</template>

<script>
import Poster from './Poster'
import Item from './Item'
export default {
    computed:{
        commodityList(){
            const { $route, $store } = this
            const id = $route.params.id
            return $store.state.commodityList
                .commodityList[id] 
        },
    },
    components: { Poster, Item },
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