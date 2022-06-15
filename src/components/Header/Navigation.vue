<template>
<div>
    <div :class="['root-cate',{'open-root-cate':openRootCate}]">

        <router-link to="/home" active-class="selected">
            <span>首頁</span>
        </router-link>        
        <a :class="{selected:$route.path.search('commodity')>=0}"
        @click.stop="$emit('toggleCommodityCate')">
            <span>商品</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 6"> 
                <polyline points="1,1 3,3 1,5" 
                    style="fill:none;stroke:currentColor;stroke-width:1" />
            </svg>
        </a>
        <router-link to="/longterm-care"  active-class="selected">
            <span>長照申請</span>
        </router-link>
        <router-link to="/oxygen-generator"  active-class="selected">
            <span>氧氣機租賃</span>
        </router-link>
        <router-link to="/connection"  active-class="selected">
            <span>聯絡店家</span>
        </router-link>        

        <div :class="['commodity-cate',{'open-commodity-cate':openCommodityCate}]">
            <div class="pre" @click.stop="$emit('toggleCommodityCate')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 6"> 
                    <polyline points="1,1 3,3 1,5" 
                        style="fill:none;stroke:currentColor;stroke-width:1" />
                </svg>
            </div>
            <ul>
                <router-link v-for="(com, key) in commodityList" :key="key"
                :to="`/commodity/${key}`" active-class="selected">
                    <span>{{com.name}}</span>
                </router-link>
            </ul>
        </div>

    </div>
</div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ['openRootCate', 'openCommodityCate'],
    computed: {
        ...mapState('commodityList', ['commodityList'])
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';
.root-cate{
    background-color: $color1;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 100%;
    display: flex;
    flex-direction: column;   
    transition: left .3s;
    a{
        display: block;
        padding: 16px 0;
        text-align: center;
        cursor: pointer;
        color: white;
        font-size: 20px;
        font-weight: 900;
        position: relative;
        span{
            transition: all .5s;
        }
        svg{
            width: 16px;
            color: white;
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
        }
    }
    .selected > span{
        padding: 2px 0;
        border-bottom: solid orange 4px;
        color: orange;
    }

    .commodity-cate{
        background-color: $color1;
        width: 100%;
        height: calc(100vh - 56px);
        overflow: hidden;
        position: absolute;
        left: 100%;
        transition: all .3s;
        display: flex;
        flex-direction: column;
        .pre{
            padding: 8px 12px;
            background-color: $color2;
            direction: rtl;
            svg{
                width: 16px;
                color: white;
            }
        }
        ul{
            height: 100%;
            display: flex;
            flex-direction: column;
            overflow-y: scroll;
        }
        ul::-webkit-scrollbar {
            width: 16px;
            opacity: 0;
        }
        ul::-webkit-scrollbar-track {
            background-color: $color3;
        }
        ul::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background-color: $color4;
        }
    }
    .open-commodity-cate{
        left: 0;
    }

}
.open-root-cate{
    left: 0;
}

@media (min-width: 768px) {
    .root-cate{
        height: 100%;
        position: static;
        flex-direction: row;
        justify-content: space-around;
        width: 70vw;
        a{
            svg{
                display: none;
            }
        }
        .commodity-cate{
            top: 100%;
            left: 0;
            width: 100vw;
            height: 0;
            .pre {
                text-align: center;
                svg {
                    transform: rotate(-90deg);
                }
            }
            ul {
                overflow: hidden;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
                align-content: space-around;
                a {
                    margin: 0 24px;                  
                }
            }
        }
        .open-commodity-cate{
            height: 250px;
        }
    }
    .open-root-cate{
        left: unset;
    }
}
</style>