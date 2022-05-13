<template>
    <div class="swiper">

        <ul :class="['img-list']" :style="{left,transition:transition?'left 1s':'unset'}">
            
                <img src="./home4.png" alt="">

                <img src="./home1.png" alt="">
                <img src="./home2.png" alt="">
                <img src="./home3.png" alt="">
                <img src="./home4.png" alt="">

                <img src="./home1.png" alt="">

        </ul>

        <ul class="text-list">
            <span :style="{top:'30px'}" :class="{'not-selected':index!==1}">111</span>
        </ul>

        <div class="btn-list">
            <svg @click.stop="transfer(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 6"> 
                <polyline points="3,1 1,3 3,5" 
                    style="fill:none;stroke:currentColor;stroke-width:2" />
            </svg> 
            <ul>
                <li v-for="key in total" :class="{selected:index===key?true:false}" :key="key"/>
            </ul>
            <svg @click.stop="transfer(1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 6"> 
                <polyline points="1,1 3,3 1,5" 
                    style="fill:none;stroke:currentColor;stroke-width:2" />
            </svg>        
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 1,
            total: 4,
            transition: true
        }
    },
    computed: {
        left(){
            return this.index * -100 +'vw'
        },
        transitionValue(){
            return this.transition ? 'left 1s' : 'unset'
        }
    },
    methods:{
        transfer(x){
            const {index, total} = this
            
            if (index>=total && x==1) {
                this.transition = false
                this.index = 0         
                setTimeout(() => {
                    this.transition = true
                    this.index++
                }, 0);     
            }else if (index<=1 && x==-1) {
                this.transition = false
                this.index = total+1         
                setTimeout(() => {
                    this.transition = true
                    this.index--
                }, 0);     
            }else {
                this.index += x
            }   
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';
.swiper{
    background-color: rgba($color1, .7);
    margin: 32px 0;
    width: 100vw;
    height: calc(100vw / 3 + 32px);
    overflow: hidden;
    position: relative;
    .img-list{
        position: absolute;
        display: flex;
        img{
            width: 100vw;
            height: calc(100vw / 3);
            max-width: 100%;
            height: 100%;
        }
    }

    .text-list{
        width: 100vw;
        height: calc(100vw / 3);
        position: relative;
        span{
            position: absolute;
            transition: all 1s;
        }
        .not-selected{
            display: none;
        }
    }

    .btn-list{
        width: 100%;
        position: absolute;
        bottom: 0;
        display: flex;
        $color: orange;
        ul{
            width: 100%;
            height: 6vw;
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                margin: 0 3vw;
                border: solid 1px back;
                border-radius: 100%;
                background-color: rgba($color, .3);
                box-shadow: 0 0 8px black;
                $size: 2vw;
                width: $size;
                height: $size;
                $max-size: 16px;
                max-width: $max-size;
                max-height: $max-size;
                transition: background-color 1s;
            }
            .selected{
                background-color: $color;
            }
        }
        svg{
            margin: 0 6vw;
            width: 3vw;
            color: $color;
        }
        
    }
}
</style>