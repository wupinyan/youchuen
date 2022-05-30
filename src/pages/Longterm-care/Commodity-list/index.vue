<template>
    <div class="commodity-list">
        <CateList>
            <template v-slot:cate-name>
                衛浴室用品
            </template>    
            <template v-slot:items>
                <li>馬桶增高器</li>
                <li>便盆椅</li>
                <li>沐浴椅</li>
            </template>
        </CateList>
    </div>
</template>

<script>
import CateList from './Cate-list'
export default {
    components: { CateList }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';
.commodity-list {
    background-color: $color1;
    border-radius: 8px;  
}
</style>