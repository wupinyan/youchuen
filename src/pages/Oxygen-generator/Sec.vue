<template>
    <section ref="section">
        <h1>
            <slot name="title"/>
        </h1>
        <div class="content">
            <slot name="content"/>
        </div>
        
    </section>
</template>

<script>
export default {
    mounted() {
        
        const ioOptions = {
            rootMargin: '0% 0% 10% 0%'
        }
        const io = new IntersectionObserver( entries =>{
            const entry = entries[0]
            if (entry.isIntersecting) entry.target.classList.add('section-show')
        }, ioOptions)
        const sec = this.$refs.section
        io.observe(sec)
    },
}
</script>

<style lang="scss" scoped>
section{
    margin: 12vw 6vw;
    opacity: 0;
    position: relative;
    top: 10vw;
    transition: all 1s;
    h1{
        border-left: solid red 4px;
        margin-bottom: 8px;
        padding-left: 8px;
        font-size: 200%;
        font-weight: 900;
    }
    .content{
        margin: 0 5vw;
        font-size: 120%;
        font-weight: 900;
    }
}
.section-show{
    opacity: 1;
    top: 0;
}

</style>