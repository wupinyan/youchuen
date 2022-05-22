<template>
    <main>

        <Swiper/>

        <div>
            <div class="text">
                <h3>電動代步車</h3>
                <p>長者出行更安全方便</p>
            </div>
            <img src="./home1.png" alt="">
        </div>
        

    </main>
</template>

<script>
import Swiper from './Swiper'
export default {
    components: { Swiper }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';
main{
    text-align: center;
    div{
        margin: 5vw 0;
        position: relative;
        div{
            color: whitesmoke;
            font-size: 5vw;
            font-weight: 900;
            text-shadow: 0 0 4vw black;
            position: absolute;
            top: 25%;
            h3{
                border-bottom: solid red 1vw;
                margin: 0;
                width: fit-content;
            }
            p{
                margin: 0;
            }            
        }
        img{
            width: 100%;
        }
    }
    
}
</style>