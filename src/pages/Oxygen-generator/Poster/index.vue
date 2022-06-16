<template>
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
</template>

<style lang="scss" scoped>
.poster{
    padding: 0;
    width: 200vw;
    height: 100vw;
    box-shadow: 0 0 5vw black;
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
        text-align: center;
        position: absolute;
        left: 5%;
        bottom: 10%;
        animation: article-ani 2s;
        h2{
            border-bottom: solid orange;
            margin: 0;
            color: red;
            font-size: 10vw;
            font-weight: 900;
        }
        p{
            margin: 3vw;
            width: max-content;
            font-weight: 900;
            color: red;
            font-size: 6vw;
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
        height: 30vw;
        .image{
            width: 30%;
            top: 10%;
            left: 10%;
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