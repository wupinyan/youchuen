<template>
    <div class="swiper">

        <ul class="img-list" :style="{left}">
            <li>
                <img src="./images/home-2-4.png" alt="">
                <article>
                    <h3>各種醫療器材</h3>
                </article>
            </li>

            <li>
                <img src="./images/home-2-1.png" alt="">
                <article>
                    <h3>幫您孝順的夥伴</h3>
                </article>
            </li>
            <li>
                <img src="./images/home-2-2.png" alt="">
                <article>
                    <h3>長照補助</h3>
                    <p>本店可協助您申請長照</p>
                </article>
            </li>
            <li>
                <img src="./images/home-2-3.png" alt="">
                <article>
                    <h3>各種醫療器材</h3>
                </article>
            </li>
            <li>
                <img src="./images/home-2-4.png" alt="">
                <article>
                    <h3>伴您康復</h3>
                </article>
            </li>

            <li>
                <img src="./images/home-2-1.png" alt="">
                <article>
                    <h3>幫您孝順的夥伴</h3>
                </article>
            </li>
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
                require('./images/home-2-1.png'),
                require('./images/home-2-2.png'),
                require('./images/home-2-3.png'),
                require('./images/home-2-4.png'),
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
    mounted() {


        // this.timer = setInterval( ()=>{
        //     this.transfer(1)
        // }, 6000)
    },
    // beforeDestroy() {
    //     clearInterval(this.timer)
    // }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';
.swiper{
    background-color: rgba($color1, .7);
    width: 100vw;
    height: 75vw;
    overflow: hidden;
    position: relative;

    .img-list {
        display: flex;
        width: fit-content;
        height: 100%;
        position: absolute;
        transition: left 1s;
        li{
            height: 100%;
            img {
                width: 100vw;
            }
            article{
                width: fit-content;
                margin: auto;
                color: whitesmoke;
                font-size: 6vw;
                font-weight: 900;
                text-shadow: 0 0 4vw black;
                text-align: center;
                h3{
                    border-bottom: solid orange;
                    margin: 0;
                    font-size: 7vw;
                }
                p{
                    margin: 0;
                    font-size: 4vw;
                }
            }
        }
    }

    .btn-list{
        width: 100%;
        position: absolute;
        bottom: 0;
        display: flex;
        background-image: linear-gradient(0deg, $color1 0%, rgba(white,0));
        $color: #dddddd;
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
                background-color: rgba($color, .1);
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

@media (min-width: 768px) {
    .text-list{
    }
}
</style>