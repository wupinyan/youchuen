<template>
    <main>

        <Swiper/>

        <ul ref="posterList">
            <div class="poster">
                <img src="./home1.png" style="right:0" alt="">
                <div class="text">
                    <h3>電動代步車</h3>
                    <p>長者出行更安全方便</p>
                </div>
            </div>
            
            <div class="poster">
                <img src="./home2.png" style="left:0" alt="">
                <div class="text">
                    <h3>氣墊床</h3>
                    <p>避免壓瘡</p>
                </div>
            </div>

            <div class="poster">
                <img src="./home3.png" style="right:0" alt="">
                <div class="text">
                    <h3>輪椅</h3>
                    <p>高背輪椅、低背輪椅均有</p>
                </div>
            </div>

            <div class="poster">
                <img src="./home4.png" style="right:0" alt="">
                <div class="text">
                    <h3>血壓計</h3>
                </div>
            </div>

            <div class="poster">
                <img src="./home5.png" style="right:0" alt="">
                <div class="text">
                    <h3>血糖機</h3>
                </div>
            </div>
        </ul>

        

    </main>
</template>

<script>
import Swiper from './Swiper'
export default {
    mounted() {
        const ioCallback = entries=>{
            const entry = entries[0]
            if (entry.isIntersecting) {
                entry.target.classList.add('poster-show')
            } 
        }
        const ioOption = {
            rootMargin: '0% 0% 10% 0%'
        }
        const io = new IntersectionObserver(ioCallback, ioOption)
        const posterList = this.$refs.posterList
        posterList.querySelectorAll('[class=poster]').forEach( e => {
            io.observe(e)
        });
    },
    components: { Swiper }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';
main > ul{
    text-align: center;
    .poster{
        margin: 35vw 0 0;
        width: 100vw;
        height: 100vw;
        opacity: 0;
        position: relative;
        top: 10vw;
        transition: all 1s;
        img{
            height: 100%;
            position: absolute;
        }
        .text{
            width: fit-content;
            font-weight: 900;
            text-shadow: 0 0 4vw black;
            position: absolute;
            bottom: 100%;
            left: 10%;
            h3{
                border-bottom: solid red 1vw;
                margin: 0;
                width: fit-content;
                font-size: 7vw;
            }
            p{
                margin: 0;
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
    main > ul{
        .poster {
            margin: 10vw 0 0;
            width: 100vw;
            height: 50vw;
            img{
                max-width: 100vw;
            }
            .text{
                top: 15%;
            }
        }

        .poster:nth-of-type(2) .text{
            left: unset;
            right: 20%;
            top: 30%;
        }
        .poster:nth-of-type(3) .text{
            left: 25%;
            top: 0;
        }
        .poster:nth-of-type(4) .text{
            left: 20%;
            top: 35%;
        }
        .poster:nth-of-type(5) .text{
            left: 20%;
            top: 30%;
        }
    }
}
</style>