<template>
    <main>

        <Swiper/>

        <ul class="poster-list" ref="posterList">
            <li v-for="(poster,key) in posterList" :key="key">
                <img :src="poster.img" :style="poster.style" alt="">
                <div class="text">
                    <h3>{{poster.title}}</h3>
                    <p>{{poster.scription}}</p>
                </div>
            </li>
        </ul>

        

    </main>
</template>

<script>
import Swiper from './Swiper'
export default {
    data() {
        return {
            posterList: [
                { 
                    title:'電動代步車', scription:'長者出行更安全方便',
                    style:{right:0}, img:require("./home1.png")
                },
                { 
                    title:'氣墊床', scription:'避免壓瘡',
                    style:{left:0}, img:require("./home2.png")
                },
                { 
                    title:'輪椅', scription:'',
                    style:{right:0}, img:require("./home3.png")
                },
                { 
                    title:'血壓計', scription:'',
                    style:{right:0}, img:require("./home4.png")
                },
                { 
                    title:'血糖機', scription:'',
                    style:{right:0}, img:require("./home5.png")
                },
            ]
        }
    },
    mounted() {
        const ioOption = {
            rootMargin: '0% 0% 10% 0%'
        }
        const io = new IntersectionObserver( entries =>{
            entries.forEach( e => {
                if (e.isIntersecting) e.target.classList.add('poster-show')
            });
        }, ioOption)
        const posterList = this.$refs.posterList
        posterList.querySelectorAll('li').forEach( e => {
            io.observe(e)
        });
    },
    components: { Swiper }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';
main > .poster-list{
    text-align: center;
    li{
        margin: 35vw 0 0;
        width: 100vw;
        height: 100vw;
        opacity: 0;
        position: relative;
        top: 10vw;
        transition: all 1s ease-out;
        img{
            height: 100%;
            position: absolute;
        }
        .text{
            width: fit-content;
            font-weight: 900;
            position: absolute;
            bottom: 100%;
            left: 10%;
            h3{
                margin: 0;
                width: fit-content;
                color: red;
                font-size: 7vw;
            }
            p{
                margin: 0;
                //color: blue;
                font-size: 4vw;
            }            
        }
    }
    .poster-show {
        opacity: 1;
        top: 0;
    }
    
}

@media (min-width: 768px) {
    main > .poster-list{
        li {
            margin: 10vw 0 0;
            width: 100vw;
            height: 50vw;
            img{
                width: 100vw;
            }
            .text{
                top: 15%;
            }
        }

        li:nth-of-type(2) .text{
            left: unset;
            right: 20%;
            top: 30%;
        }
        li:nth-of-type(3) .text{
            left: 25%;
            top: 0;
        }
        li:nth-of-type(4) .text{
            left: 20%;
            top: 35%;
        }
        li:nth-of-type(5) .text{
            left: 20%;
            top: 30%;
        }
    }
}
</style>