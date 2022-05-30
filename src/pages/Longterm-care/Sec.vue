<template>
    <section ref="section">
        <h1>
            <slot name="title"/>
        </h1>
        
        <slot name="content"/>
        
    </section>
</template>

<script>
export default {
    mounted(){
        const io = new IntersectionObserver( entries =>{
            const entry = entries[0]
            if (entry.isIntersecting) entry.target.classList.add('section-show')
        })
        const sec = this.$refs.section
        io.observe(sec)
    },
}
</script>

<style lang="scss" scoped>
section {
    margin: 15vw 5%;
    font-weight: 900;
    opacity: 1;
    position: relative;
    left: -100vw;
    transform: skew(-30deg);
    transition: all 1s;
    h1 {
        border-bottom: solid orange 4px;
    }
}
.section-show {
    opacity: 1;
    left: 0;
    transform: skew(0deg);
}
</style>