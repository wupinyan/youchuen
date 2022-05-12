<template>
    <main>
        
        <ul>
            <router-link to="/question/mobility-scooter">
                <img src="./demoimg1.png" alt="">
            </router-link>
            <router-link to="/question/oxygen-generator">
                <img src="./demoimg1.png" alt="">
            </router-link>
            <router-link to="/question/sputum-suction-machine">
                <img src="./demoimg1.png" alt="">
            </router-link>
        </ul>

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
ul{
    width: 100%;
    margin: 16px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    a{
        border-radius: 8px;
        margin: 8px 4px;
        overflow: hidden;
        $size: 150px;
        width: $size;
        height: $size;
        img{
            $size: 100%;
            width: $size;
            height: $size;
            max-width: $size;
            max-height: $size;     
            transition: transform 3s;       
        }
        img:hover{
            transform: scale(1.1, 1.1)
        }
    }
    
}
</style>