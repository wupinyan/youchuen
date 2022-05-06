<template>
    <header>

        <img src="./logo.png" alt="無法顯示圖片">
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
            <line x1="0" y1="2.5" x2="10" y2="2.5"
                style="stroke:rgb(255,255,255);stroke-width:1"/>
            <line x1="0" y1="5" x2="10" y2="5"
                style="stroke:rgb(255,255,255);stroke-width:1"/>
            <line x1="0" y1="7.5" x2="10" y2="7.5"
                style="stroke:rgb(255,255,255);stroke-width:1"/>    
        </svg>

        <ul>
            <li>
                <router-link to="/home">首頁</router-link>
            </li>
            <li>
                <a>商品</a>
            </li>
            <li>
                <router-link to="/longterm-care">長照申請</router-link>
            </li>
            <li>
                <router-link to="/oxygen-generator">氧氣機租賃</router-link>
            </li>
            <li>
                <router-link to="/connection">聯絡店家</router-link>
            </li>
        </ul>

    </header>
</template>

<style lang="scss" scoped>
@import '../../assets/style.scss';
header{
    background-color: $color1;
    padding: 8px 12px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 100px;
    }

    svg{
        width: 40px;
    }

    ul{
        border: solid red;
        position: absolute;
        
    }
}
</style>