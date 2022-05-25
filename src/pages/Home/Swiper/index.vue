<template>
    <div class="swiper">

        <ul class="poster-list" :style="{left,transition:this.transitionValue}" ref="posterList">
            <li>
                <img src="./home-2-4.png" alt="">
                <article class="article-show">
                    <h3>伴您康復</h3>
                </article>
            </li>

            <li v-for="(poster,key) in posterList" :key="key">
                <img :src="poster.img" alt="">
                <article class="article-show">
                    <h3>{{poster.title}}</h3>
                    <p>{{poster.scription}}</p>
                </article>
            </li>

            <li>
                <img src="./home-2-1.png" alt="">
                <article class="article-show">
                    <h3>幫您孝順的夥伴</h3>
                </article>
            </li>
        </ul>

        <div class="btn-list" ref="btn">
            <svg @click.stop="clickBtn(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 6"> 
                <polyline points="3,1 1,3 3,5" 
                    style="fill:none;stroke:currentColor;stroke-width:2" />
            </svg> 
            <ul>
                <li v-for="key in posterList.length" :class="{selected:index===key?true:false}" :key="key"/>
            </ul>
            <svg @click.stop="clickBtn(1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 6"> 
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
            posterList: [
                { 
                    title:'幫您孝順的夥伴', scription:'',
                    img:require("./home-2-1.png")
                },
                { 
                    title:'長照補助', scription:'本店可協助您申請長趙',
                    img:require("./home-2-2.png")
                },
                { 
                    title:'各種醫療器材', scription:'',
                    img:require("./home-2-3.png")
                },
                { 
                    title:'伴您康復', scription:'',
                    img:require("./home-2-4.png")
                },
            ]
        }
    },
    computed: {
        left(){
            return this.index * -100 +'vw'
        },
        transitionValue(){
            return this.transition ? 'left 1s ease-out' : 'unset'
        }
    },
    methods:{
        transfer(x){
            const {index, posterList} = this
            const total = posterList.length
            
            if (index>=total && x==1) {
                this.transition = false
                this.index = 0         
                setTimeout(() => {
                    this.transition = true
                    this.index++
                });     
            }else if (index<=1 && x==-1) {
                this.transition = false
                this.index = total+1 
                setTimeout(() => {
                    this.transition = true
                    this.index--    
                });               
            }else {
                this.index += x
            }   
        },
        setInterval(){
            this.timer = setInterval( ()=>{
                this.transfer(1)
            }, 3000)
        },
        clearInterval(){
            clearInterval(this.timer)
        },
        clickBtn(x){
            this.transfer(x)
            this.clearInterval()
            this.setInterval()
        }
    },
    mounted() {
        {
            const cssSelector = 'li:not(:nth-child(1)):not(:nth-last-child(1)) > article'
            const articleList = this.$refs.posterList.querySelectorAll(cssSelector)

            const io = new IntersectionObserver( entries=>{
                entries.forEach( e => {
                    e.isIntersecting ?
                        e.target.classList.add('article-show') :
                        e.target.classList.remove('article-show')
                });
            })
            articleList.forEach( e => {
                io.observe(e)    
            });
        }
        
        {
            this.setInterval()
        }

        
    },
    beforeDestroy() {
        this.clearInterval()
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';
.swiper{
    background-color: rgba($color1, .7);
    width: 100vw;
    height: 75vw;
    overflow: hidden;
    box-shadow: 0 0 8px black;
    position: relative;

    .poster-list {
        display: flex;
        width: fit-content;
        height: 100%;
        position: absolute;
        
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
                opacity: 0;
                position: relative;
                top: -20%;
                transition: all 1s ease-out;
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
            .article-show{
                top: 0;
                opacity: 1;
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
    .swiper{
        height: 60vw;
        .poster-list > li{
            position: relative;
            article{
                position: absolute;
                top: 0;
                left: 5%;
            }
            .article-show{
                top: 20%;
            }
        }
    }
}
</style>