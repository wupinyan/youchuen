<template>
    <div>

        <div class="poster">
            <img class="background" src="./oxygen1.png" alt="">
            <img class="image" src="./oxygen2.png" ref="image" alt="">
            <article>
                <h2 ref="title">氧氣機租賃</h2>
                <p ref="scription">
                    為呼吸困難的人提供氧氣                     
                </p>
            </article>
        </div>

        <Sec>
            <template v-slot:title>                
                租金
            </template>
            <template v-slot:content> 
                <p>              
                    佑春氧氣機租金為每月2500元。 
                </p>
                <p>
                    耗材包含潮濕瓶、鼻導管，
                    耗材更換費用已包含在租金內。
                </p>
                <p>
                    押金為2500元。
                </p>
            </template>
        </Sec>

        <Sec>
            <template v-slot:title>                
                使用方法
            </template>
            <template v-slot:content>   
                <p>             
                    氧氣機使用非常簡單，
                    大致上只要把開水倒入潮濕瓶，
                    裝上鼻導管，再插電即可開始使用，
                    但每款氧氣機的使用方法略有不同，
                    具體使用方法請您至佑春洽詢。
                </p>
                <p>
                    潮濕瓶每2個月換一次，鼻導管每1個月換一次。
                </p>
                <p>
                    氧氣機所產生的氧氣是來自於環境中的空氣，
                    因此不必填充氧氣。
                </p>
            </template>
        </Sec>

        <Sec>
            <template v-slot:title>                
                注意事項
            </template>
            <template v-slot:content> 
                <ul class="style-ul">
                    <li><p>若氧氣機故障，請先將病患送醫，以保安全。</p></li>
                    <li><p>將氧氣機放置於通風、空氣清新處。</p></li>
                    <li><p>氧氣機必須離牆壁至少10公分。</p></li>
                </ul>                       
            </template>
        </Sec>

        <Sec>
            <template v-slot:title>                
                氧氣機購買
            </template>
            <template v-slot:content>     
                <p>佑春也有販售全新氧氣機。</p>
                <a class="sale" href="">
                    前往購買
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 6"> 
                        <polyline points="1,1 3,3 1,5" 
                            style="fill:none;stroke:currentColor;stroke-width:1" />
                    </svg>
                </a>                 
            </template>
        </Sec>

    </div>
</template>

<script>
import Sec from './Sec'
export default {
    components: { Sec }
}
</script>

<style lang="scss" scoped>
.poster{
    padding: 0;
    width: 200vw;
    height: 100vw;
    position: relative;
    .background{
        $size: 100%;
        width: $size;
        height: $size;
        animation: background-ani 2s;
    }
    @keyframes background-ani {
        from{ opacity: 0 }
    }
    .image{
        width: 50vw;
        position: absolute;
        top: 5%;
        left: 5%;
        animation: image-ani 2s;
    }
    @keyframes image-ani {
        from{ left: -50% }
    }
    article{
        position: absolute;
        right: 60%;
        top: 60%;
        animation: article-ani 2s;
        h2{
            margin: 0;
            color: red;
            font-size: 200%;
            font-weight: 900;
        }
        p{
            margin: 3vw;
            font-weight: 900;
            color: white;
            position: relative;
        }
    }
    @keyframes article-ani {
        from { right: -50% }
    }
    
}

.style-ul{
    list-style:square;
    margin-left: 4vw;
}

.sale{
    width: fit-content;
    $color: blue;
    color: $color;
    display: block;
    transition: all 1s;
    svg{
        width: 16px;
        vertical-align: text-bottom;
        stroke: $color;
    }
}
.sale:hover{
    transform: scale(1.2);
}

@media (min-width: 768px) {
    .poster{
        width: 100vw;
        height: 50vw;
        .image{
            width: 40%;
            top: 10%;
            left: -5%;
        }
        article{
            top: 20%;
            left: unset;
            right: 15%;
            h2{
                font-size: 6vw;
            }
            p{
                font-size: 2vw;
            }
        }
    }
}
</style>