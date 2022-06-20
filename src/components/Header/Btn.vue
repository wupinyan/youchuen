<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
        <line x1="1" y1="1" x2="9" :y2="l1y"
            style="stroke:rgb(255,255,255);stroke-width:1"/>
        <line x1="1" y1="5" :x2="l2x" y2="5"
            style="stroke:rgb(255,255,255);stroke-width:1"/>
        <line x1="1" y1="9" x2="9" :y2="l3y"
            style="stroke:rgb(255,255,255);stroke-width:1"/>    
    </svg>
</template>

<script>
export default {
    props: ['openRootCate'],
    data() {
        return {
            l1y:1,
            l2x:9,
            l3y:9
        }
    },
    watch: {
        openRootCate(v){
            const interval = 30
            if (v) {
                this.l2x = 1
                const timer = setInterval(() => {
                    this.l1y++
                    this.l3y--
                    if (this.l1y >= 9) clearInterval(timer)
                }, interval);
            } else{
                this.l2x = 9
                const timer = setInterval(() => {
                    this.l1y--
                    this.l3y++
                    if (this.l1y <= 1) clearInterval(timer)
                }, interval);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
svg{
    width: 36px;
    margin-right: 16px;
}  

@media (min-width: 768px) {
    svg{
        display: none;
    }
}
</style>