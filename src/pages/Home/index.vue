<template>
    <main>

        <Swiper/>

        <ul class="poster-list" ref="posterList">
            <li v-for="(poster,key) in posterList" :key="key">
                <img :src="poster.img" :style="poster.style" alt="">
                <div class="text">
                    <h3>{{poster.title}}</h3>
                    <router-link :to="poster.commodityPath">
                        <p>前往觀看</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 6"> 
                            <polyline points="1,1 3,3 1,5" 
                                style="fill:none;stroke:currentColor;stroke-width:1" />
                        </svg>
                    </router-link>
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
                    title: '電動代步車',
                    style: {right:0}, 
                    img: require("./home1.png"),
                    commodityPath: '/commodity/mobilityScooter'
                },
                { 
                    title:'氣墊床',
                    style:{left:0}, 
                    img:require("./home2.png"),
                    commodityPath: '/commodity/airBed'
                },
                { 
                    title:'輪椅',
                    style:{right:0}, 
                    img:require("./home3.png"),
                    commodityPath: '/commodity/wheelchair'
                },
                { 
                    title:'血壓計',
                    style:{right:0}, 
                    img:require("./home4.png"),
                    commodityPath: '/commodity/bloodPressureMonitor'
                },
                { 
                    title:'血糖機',
                    style:{right:0}, 
                    img:require("./home5.png"),
                    commodityPath: '/commodity/glucoseMeter'
                },
            ]
        }
    },
    mounted() {
        const io = new IntersectionObserver( entries =>{
            entries.forEach( e => {
                if (e.isIntersecting) e.target.classList.add('poster-show')
            });
        })
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
                color: orangered;
                font-size: 7vw;
            }        
            a {
                margin: 0;
                color: blue;
                p {
                    margin: 0;
                    color: 2vw;
                    font-size: 2vw;
                    display: inline-block;
                    vertical-align: middle;
                }
                svg {
                    display: inline-block;
                    height: 3vw;
                    vertical-align: middle;
                }
            }
            a:hover {
                color: red;
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