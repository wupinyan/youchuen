<template>
    <div class="item" ref="item">

        <img @click.stop="$emit('openOverlayer', commodity)" 
            :src="require('../../assets/commodity-images/'+commodity.img)" alt="暫無圖片">
        
        <div class="text">
            <h2>{{commodity.name}}</h2>
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
        const item = this.$refs.item
        const io = new IntersectionObserver( entries =>{
            const entry = entries[0]
            if (entry.isIntersecting) {
                entry.target.classList.add('item-show')
            }
        })
        io.observe(item)
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
    opacity: 0;
    transform: translateY(10%);
    transition: all 1s;
    img{
        $size: 180px;
        max-width: $size;
        max-height: $size;
    }
    .text {
        h2 {
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

.item-show {
    opacity: 1;
    transform: translateY(0);
}
</style>