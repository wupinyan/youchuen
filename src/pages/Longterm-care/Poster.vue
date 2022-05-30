<template>
    <div class="poster">
        <img src="./longterm-care1.png" alt="">
        <article>
            <h1>長照申請</h1>
            <p>佑春能幫您從頭至申請完成</p>
        </article>
    </div>
</template>

<style lang="scss" scoped>
.poster{
    width: 100vw;
    height: 100vw;
    position: relative;
    img {
        width: 200%;
        box-shadow: 0 0 5vw black;
        position: absolute;
        left: -25%;
        animation: img-ani 2s;
    }
    @keyframes img-ani {
        from { opacity: 0 }
    }
    article {
        width: fit-content;
        color: white;
        font-weight: 900;
        text-shadow: 0 0 5vw black;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: article-ani 2s;
        h1 {
            border-bottom: solid orange 1vw;
            margin-bottom: 0;
            font-size: 10vw;
        }
        p {
            margin-top: 2vw;
            font-size: 6vw;
            position: relative;
        }
    }
    @keyframes article-ani {
        from {
            opacity: 0;
            top: 0;
        }
    }
}

@media (min-width: 768px){
    .poster {
        height: 50vw;
        img {
            width: 100%;
            left: 0;
        }
    }
}
</style>