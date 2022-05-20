<template>
    <main>

        <Swiper/>

        <div>
            <p>電動代步車</p>
            <img src="./home5.png" alt="">
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
        p{
            border-bottom: solid 1vw red;
            margin: 0 auto 8px;
            padding-bottom: 4px;
            width: max-content;
            font-size: 4vw;
            font-weight: 900;
        }
        img{
            width: 100%;
            box-shadow: 0 0 .5vw black;
        }
    }
    
}
</style>