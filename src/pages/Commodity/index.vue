<template>
    <main>
        <h2>{{infoList.name}}</h2>
        <ul>
            <Item v-for="(com, key) in commodityList" :commodity='com' :key='key'/>
        </ul>
        <!-- <Item :commodity='commodityList[0]'/>
        <Item :commodity='commodityList[1]'/>
        <Item :commodity='commodityList[2]'/> -->
    </main>
</template>

<script>
import Item from './Item'
export default {
    computed:{
        infoList(){
            const { $route, $store } = this
            const id = $route.params.id
            return $store.state.commodityList
                .commodityList[id] 
        },
        commodityList(){
            return this.infoList.commodity.map( v =>{
                const img = require('../../assets/commodity-images/' + v.img)
                v.img = img
                return v
            })
        },
    },
    components: { Item },
    mounted() {
        //console.log(this.commodityList);
    },
}
</script>

<style lang="scss" scoped>
main {
    background: #eeeeee;
}
</style>