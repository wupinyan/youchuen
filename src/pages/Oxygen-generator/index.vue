<template>
    <div>

        <div class="poster">
            <img class="background" src="./oxygen1.png" alt="">
            <img class="image" src="./oxygen2.png" ref="image" alt="">
            <article>
                <h2 ref="title">氧氣機租賃</h2>
                <p ref="scription">
                    為呼吸困難的人提供氧氣 <br>
                    使用簡單
                </p>
            </article>
        </div>

        <Sec>
            <template v-slot:title>                
                租金
            </template>
            <template v-slot:content>                
                佑春氧氣機租金為每月一千元，
                耗材須自行額外購買，
                耗材包含氧氣瓶、鼻導管。
            </template>
        </Sec>

        <Sec>
            <template v-slot:title>                
                使用方法
            </template>
            <template v-slot:content>                
                氧氣機使用非常簡單，
                每款氧氣機的使用方式不盡相同，
                但大致上只要把開水倒入氧氣瓶，
                裝上鼻導管，再插電即可開始使用，
                具體使用方法請您至佑春洽詢
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
            margin: 3vw 0;
            font-weight: 900;
            color: white;
            position: relative;
        }
    }
    @keyframes article-ani {
        from { right: -50% }
    }
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