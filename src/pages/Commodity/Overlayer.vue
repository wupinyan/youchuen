<template>
    <div v-if="overlayerInfo" class="overlayer" v-show="overlayer">

        <svg @click.stop="$emit('closeOverlayer')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
            <line x1="1" y1="1" x2="9" y2="9"
                style="stroke:rgb(255,255,255);stroke-width:1"/>
            <line x1="1" y1="9" x2="9" y2="1"
                style="stroke:rgb(255,255,255);stroke-width:1"/>    
        </svg>

        <div class="info">
            <img :src="require('../../assets/commodity-images/'+overlayerInfo.img)" alt="暫無圖片"/>
            <h2>{{overlayerInfo.name}}</h2>
             <p>
                型號: <br>
                {{overlayerInfo.model}}
            </p>
             <p v-show="overlayerInfo.description!=''">
                商品資訊: <br>
                {{overlayerInfo.description}}
            </p>
        </div>

    </div>
</template>

<script>
export default {
    props: ['overlayer', 'overlayerInfo'],
}
</script>

<style lang="scss" scoped>
.overlayer {
    width: 100vw;
    height: 100vh;
    background-color: rgba(#222222, .8);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    svg {
        width: 32px;
        color: whitesmoke;
        position: absolute;
        $margin: 16px;
        top: $margin;
        right: $margin;
    }
    .info {
        width: 100vw;
        position: absolute;
        top: 48px;
        text-align: center;
        img {
            $size: 100vw;
            max-width: $size;
            max-height: $size;
        }
        h2 {
            color: orange;
        }
        p {
            margin: 16px 5%;
            color: whitesmoke;
        }
    }
}


</style>