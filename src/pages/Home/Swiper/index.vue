<template>
    <div class="swiper">

        <ul :class="['img-list']" :style="{left,transition:transition?'left 1s':'unset'}">
            
                <img :src="imgList.slice(-1)" alt="無圖">

                <img v-for="(img,key) in imgList" :src="img" :key="key">

                <img :src="imgList[0]" alt="無圖">
        </ul>

        <ul class="text-list">
            <span :style="[{color:'whitesmoke','text-shadow':'0 0 4vw black',top:'10%',left:'5%'},index!=1?{top:'-20%',opacity:0}:'']">
                長照申請<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                找佑春
            </span>
            <span :style="[{color:'#444444','text-shadow':'0 0 4vw black',top:'10%',right:'5%'},index!=2?{right:'-25%',opacity:0}:'']">
                各類<br>&nbsp;&nbsp;&nbsp;
                醫材
            </span>
            <span :style="[{color:'whitesmoke','text-shadow':'0 0 4vw black',top:'10%',left:'15%'},index!=3?{top:'40%',opacity:0}:'']">
                伴您孝順<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                的夥伴
            </span>
            <span :style="[{color:'#444444','text-shadow':'0 0 4vw black',top:'20%',right:'15%'},index!=4?{right:'-15%',opacity:0}:'']">
                佑春<br>&nbsp;&nbsp;
                協助您
            </span>
        </ul>

        <div class="btn-list">
            <svg @click.stop="transfer(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 6"> 
                <polyline points="3,1 1,3 3,5" 
                    style="fill:none;stroke:currentColor;stroke-width:2" />
            </svg> 
            <ul>
                <li v-for="key in imgList.length" :class="{selected:index===key?true:false}" :key="key"/>
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
            transition: true,
            imgList:[
                require('./images/home1.png'),
                require('./images/home2.png'),
                require('./images/home3.png'),
                require('./images/home4.png'),
            ]
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
            const {index, imgList} = this
            const total = imgList.length
            
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
    },
    // mounted() {
    //     this.timer = setInterval( ()=>{
    //         this.transfer(1)
    //     }, 6000)
    // },
    // beforeDestroy() {
    //     clearInterval(this.timer)
    // }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';
.swiper{
    background-color: rgba($color1, .7);
    margin: 32px 0;
    width: 100vw;
    height: calc(100vw / 3);
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
            font-size: 6vw;
            font-weight: 900;
            letter-spacing: 2px;
            transition: all 2s;
        }
    }

    .btn-list{
        width: 100%;
        position: absolute;
        bottom: 0;
        display: flex;
        $color: #666666;
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