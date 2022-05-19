<template>
    <main>

        <Swiper/>

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
ul{
    width: 100%;
    margin: 16px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    a{
        border-radius: 8px;
        margin: 8px 4px;
        position: relative;
        overflow: hidden;
        $size: 200px;
        width: $size;
        height: $size;
        h3{
            background-color: rgba(white, .7);
            width: 100%;
            margin: 0;
            color: black;
            font-weight: 900;
            text-align: center;
            position: absolute;
            bottom: 0;
        }
        img{
            $size: 100%;
            width: $size;
            height: $size;
            max-width: $size;
            max-height: $size;     
            transition: transform 3s;       
        }
    }
    a:hover > img{
        transform: scale(1.1, 1.1)
    }
    
}
</style>