<template>
    <div class="store">

        <img src="./contact2.png" alt="">

        <article>
            <p>
                佑春醫療器材行創立於民國82年，價格實惠，
                用心做好售後服務，販售多種醫療器材，
                提供氧氣機租賃，也協助您向政府申請補助，
                包含長照補助和身障補助，您若有任何醫療器材需求，
                可以來電或親赴本店洽詢。
            </p>
        </article>

    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/style.scss';
.store {
    margin-bottom: 32px;
    // padding: 32px 5%;
    background-color: #dddddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        border-radius: 2vw;
        margin: 5%;
        width: 95%;
    }
    article {
        border-top: solid orange;
        border-bottom: solid orange;
        margin: 5%;
        p {
            font-weight: 900;
        }
    }
}

@media (min-width: 768px) {
    .store {
        flex-direction: row;
        img {
            width: 50%;
        }
        article {
            margin-left: 5%;
        }
    }
}
</style>