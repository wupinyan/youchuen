<template>
    <div class="commodity-list">

        <CateList>
            <template v-slot:cate-name>
                衛浴室用品類
            </template>    
            <template v-slot:items>
                <li>馬桶增高器</li>
                <li>便盆椅</li>
                <li>沐浴椅</li>
            </template>
        </CateList>

        <CateList>
            <template v-slot:cate-name>
                拐杖類
            </template>    
            <template v-slot:items>
                <li>單支拐杖</li>
                <li>助行器</li>
                <li>帶輪型助步車</li>
            </template>
        </CateList>

        <CateList>
            <template v-slot:cate-name>
                輪椅類
            </template>    
            <template v-slot:items>
                <li>一般輪椅</li>
                <li>附加功能輪椅</li>
                <li>輪椅擺位系統</li>
            </template>
        </CateList>

        <CateList>
            <template v-slot:cate-name>
                輔助移位類
            </template>    
            <template v-slot:items>
                <li>移位腰帶</li>
                <li>移位板</li>
                <li>人力移位吊帶</li>
                <li>移位滑墊</li>
                <li>移位轉盤</li>
                <li>移位機</li>
                <li>移位機吊帶</li>
            </template>
        </CateList>

        <CateList>
            <template v-slot:cate-name>
                輔具類
            </template>    
            <template v-slot:items>
                <li>衣著用輔具</li>
                <li>居家用生活輔具</li>
                <li>飲食用輔具</li>
            </template>
        </CateList>

        <CateList>
            <template v-slot:cate-name>
                防壓瘡類
            </template>    
            <template v-slot:items>
                <li>氣墊床</li>
                <li>輪椅坐墊</li>
            </template>
        </CateList>

        <CateList>
            <template v-slot:cate-name>
                居家用照顧床類
            </template>    
            <template v-slot:items>
                <li>居家用照顧床</li>
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
    max-width: 400px;
    overflow: hidden;
}
</style>