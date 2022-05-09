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
                //this.l1y = 8, this.l2x = 1, this.l3y = 2
                const timer = setInterval(() => {
                    this.l1y++
                    this.l2x--
                    this.l3y--
                    if (this.l2x <= 1) clearInterval(timer)
                }, interval);
            } else{
                //this.l1y = 2, this.l2x = 9, this.l3y = 8
                const timer = setInterval(() => {
                    this.l1y--
                    this.l2x++
                    this.l3y++
                    if (this.l2x >= 9) clearInterval(timer)
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

@media screen and (orientation: landscape) {
    svg{
        display: none;
    }
}
</style>