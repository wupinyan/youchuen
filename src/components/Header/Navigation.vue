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
                <router-link v-for="(commodity, i) in commodityList" 
                :to="`/commodity/${commodity.id}`" active-class="selected" :key="i">
                    <span>{{commodity.name}}</span>
                </router-link>
            </ul>
        </div>

    </div>
</div>

</template>

<script>
import axios from 'axios'
export default {
    props: ['openRootCate', 'openCommodityCate'],
    data() {
        return {
            commodityList:[
                { id:1, name:'輪椅' },
                { id:2, name:'耗材' },
                { id:3, name:'氧氣機' },
                { id:4, name:'代步車' },
                { id:5, name:'拐杖' },
                { id:6, name:'血壓計' },
                { id:7, name:'輪椅' },
                { id:8, name:'輪椅' },
                { id:9, name:'血糖機' },
            ]
        }
    },
    created() {
        axios.get('/api/init')
            .then( response=>{
                this.commodityList = response.data
            })
            .catch( err=>{
                console.log(err);
            })
    },
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
        font-size: 24px;
        font-weight: 900;
        position: relative;
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
    }

    .commodity-cate{
        background-color: $color1;
        width: 100%;
        position: absolute;
        left: 100%;
        transition: left .3s;
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
            display: flex;
            flex-direction: column;
        }
    }
    .open-commodity-cate{
        left: 0;
    }

}
.open-root-cate{
    left: 0;
}




@media screen and (orientation: landscape) {
    .root-cate{
        height: 100%;
        position: static;
        flex-direction: row;
        justify-content: space-around;
        width: 70vw;
        a{
            font-size: 20px;
            svg{
                display: none;
            }
        }
        .commodity-cate{
            top: 100%;
            left: unset;
            right: 0;
            width: 0;
            transition: width .3s;
        }
        .open-commodity-cate{
            width: 300px;
        }
    }
    .open-root-cate{
        left: unset;
    }
}
</style>