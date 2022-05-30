<template>
    <div>
        <h3 class="cate-name" @click.stop="toggle()">
            <slot name="cate-name"/>
            <svg :class="{'svg-open':isOpen}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 4"> 
                <polyline points="1,1 3,3 5,1" 
                    style="fill:none;stroke:currentColor;stroke-width:1" />
            </svg>
        </h3>
        <div :style="{height}" class="items" ref="items">
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
            height: '0px',
            isOpen: false,
            mounted: false
        }
    },
    computed:{
        itemsClientH(){
            const {mounted, $refs} = this
            if (!mounted) return
            return $refs.items.scrollHeight + 'px'
        }
    },
    methods: {
        toggle(){
            const { height, isOpen } = this
            this.height = height=='0px' ?
                this.itemsClientH :
                '0px'
            this.isOpen = !isOpen
        }
    },
    mounted() {
        this.mounted = true
    },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';
$font-color: whitesmoke;
.cate-name {
    margin: 0;
    padding: 8px 16px;
    color: $font-color;
    font-size: 24px;
    cursor: pointer;
    transition: background-color .5s;
    svg {
        width: 16px;
        transition: transform .5s;
    }
    .svg-open {
        transform: rotate(-180deg);
    }
}

.items {
    color: $font-color;
    background-color: $color2;
    overflow: hidden;
    cursor: default;
    transition: height .3s;
    ul {
        padding: 8px 0 8px 48px;
        list-style-type: square;
        overflow: hidden; 
        li {
            margin: 8px 0;
            font-size: 24px;
        }
    }
}
</style>