<template>
    <div class="item">
        <img :src="commodity.img" alt="暫無圖片">
        <div class="text">
            <h1>{{commodity.name}}</h1>
            <p>
                型號: <br>
                {{commodity.model}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['commodity'],
    mounted() {
        //console.log(this.commodity)
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';
.item {
    border-radius: 4px;
    margin: 16px auto;
    padding: 5%;
    width: 270px;
    background: white;
    text-align: center;
    img{
        $size: 180px;
        width: $size;
        height: $size;
        max-width: $size;
        max-height: $size;
    }
    .text {
        h1 {
            border-bottom: solid orange;
            margin: 0;
            color: $color1;
        }
        p {
            margin: 0;
            font-weight: 900;
        }
    }
}
</style>