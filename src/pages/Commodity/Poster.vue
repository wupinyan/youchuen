<template>
    <div class="poster">
        <h2 ref="text">佑春商品</h2>
        <img src="./commodity1.png" alt="">
    </div>
</template>

<script>
export default {
    mounted() {
        const io = new IntersectionObserver( entries =>{
            const entry = entries[0]
            if (entry.isIntersecting) {
                entry.target.classList.add('text-show')
            }
        })
        io.observe(this.$refs.text)
    },
}
</script>

<style lang="scss" scoped>
.poster {
    position: relative;
    h2 {
        margin: 0;
        padding: 0;
        width: max-content;
        color: whitesmoke;
        font-size: 10vw;
        text-shadow: 0 0 2vw black;
        letter-spacing: 5vw;
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: all 1s;
    }
    .text-show {
        top: 25%;
        opacity: 1;
    }
    img {
        width: 100%;
    }
}
</style>