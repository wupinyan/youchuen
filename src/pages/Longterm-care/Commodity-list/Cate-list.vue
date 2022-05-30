<template>
    <div>
        <h3 class="cate-name" @click.stop="toggle()">
            <slot name="cate-name"/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 4"> 
                <polyline points="1,1 3,3 5,1" 
                    style="fill:none;stroke:currentColor;stroke-width:1" />
            </svg>
        </h3>
        <div :style="{height:itemsH}" class="items" ref="items">
            <ul>
                <slot name="items"/>
            </ul> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemsH: '0px'
        }
    },
    methods: {
        // toggle(){
        //     this.itemsH = this.itemsH=='0px' ?
        // }
    },
    mounted() {
        this.itemsH = this.$refs.items.clientHeight + 'px'
    },
}
</script>

<style lang="scss" scoped>
.cate-name {
    margin: 0;
    padding: 4px 0;
    text-align: center;
    svg {
        width: 16px;
    }
}
.items {
    ul {
        padding: 8px 0 8px 32px;
        list-style-type: square;
        overflow: hidden; 
    }
}
</style>