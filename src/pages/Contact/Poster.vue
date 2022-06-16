<template>
    <div class="poster">
        <img src="./contact1.png" alt="">
        <h1 ref="text">聯絡佑春</h1>
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
    img {
        width: 100vw;
    }
    h1 {
        border-left: solid orange 1vw;
        border-right: solid orange 1vw;
        padding: 0 2vw;
        margin: 0;
        width: fit-content;
        color: whitesmoke;
        font-size: 10vw;
        text-shadow: 0 0 5vw black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scaleX(0);
        opacity: 0;
        transition: all 1s;
    }
    .text-show {
        opacity: 1;
        transform: translate(-50%, -50%) scaleX(1);
    }
}
</style>