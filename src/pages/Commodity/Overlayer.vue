<template>
<transition name="fade">
    <div v-if="overlayerInfo" class="overlayer" v-show="overlayer">

        <svg @click.stop="$emit('closeOverlayer')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
            <line x1="1" y1="1" x2="9" y2="9"
                style="stroke:rgb(255,255,255);stroke-width:1"/>
            <line x1="1" y1="9" x2="9" y2="1"
                style="stroke:rgb(255,255,255);stroke-width:1"/>    
        </svg>

        <div class="info">
            
            
            <div class="img">
                <img :src="require('../../assets/commodity-images/'+overlayerInfo.img)" alt="暫無圖片"/>
            </div>            
            <article>
                <h2>{{overlayerInfo.name}}</h2>
                <section>
                    <h4> 型號:</h4>
                    {{overlayerInfo.model}}
                </section>
                <section v-show="overlayerInfo.description!=''">
                    <h4>商品資訊:</h4>
                    {{overlayerInfo.description}}
                </section>
            </article> 
        </div>

    </div>
</transition>
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
    background-color: rgba(black, .8);
    overflow: hidden;
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
        height: calc(100vh - 48px);
        position: absolute;
        top: 48px;
        display: flex;
        flex-direction: column;

        
        .img {
            height: 100%;
            position: relative;
            img {
                max-width: 100%;
                max-height: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        
        article {
            padding-bottom: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h2 {
                color: orange;
                margin: 4px;
            }
            section {
                margin: 4px 5%;
                color: whitesmoke;
                h4 {
                    border-bottom: solid orangered;
                    margin: 0 auto;
                    width: fit-content;
                }
            }
        }
        
    }
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  height: 0;
}

@media (min-width: 768px) {
    .overlayer > .info {
        flex-direction: row;
        .img {
            width: 100%;
        }
        article {
            width: 100%;
        }
    }
}
</style>