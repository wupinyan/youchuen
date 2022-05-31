<template>
    <main>
        <Poster/>

        <h3 class="foreword">
            您可以採用「長照」或「身障」的方式來申請補助，
            對於同件商品，這兩種方式只能二選一。
        </h3>

        <Sec>
            <template v-slot:title>
                誰有資格申請補助
            </template>
            <template v-slot:content>  
                <h3>以「長照」來申請必須符合以下條件之一</h3>   
                <ul class="qualifications-content">
                    <li>
                        <h3>65歲以上獨居老人、衰弱老人：</h3>
                        <p>
                            65歲以上獨居或提不起勁、
                            體重減輕或是下肢活動緩慢無力的老人。
                        </p>
                    </li>
                    <li>
                        <h3>失能者：</h3>
                        <p>
                            失去生活自理能力，如行動不便、
                            需要協助吃飯、上廁所、洗澡、
                            平地走動和穿脫衣褲等的65歲以上老人、
                            55歲以上原住民、不分年齡的身心障礙者
                            （領有身心障礙證明或手冊的失能者）。
                        </p>
                    </li>
                    <li>
                        <h3>50歲以上失智者：</h3>
                        <p>
                            表達能力降低、記憶力下降、
                            睡眠障礙、產生幻覺等疑似失智症狀，
                            或確診為失智症。
                        </p>
                    </li>
                </ul>         
                <h3>以「身障」來申請須符合以下條件</h3>   
                <ul class="qualifications-content">
                    <li>
                        <p>
                            領有第七類身心障礙手冊。
                        </p>
                    </li>
                </ul>   
            </template>
        </Sec>

        <Sec>
            <template v-slot:title>
                可以申請哪些商品
            </template>
            <template v-slot:content>  
                <h3>佑春可以幫您向政府申請以下商品</h3>                
                <CommodityList/>           
            </template>
        </Sec>

        <Sec>
            <template v-slot:title>
                政府補助多少金額
            </template>
            <template v-slot:content>  
                <p>
                    補助金額從幾百元至一萬多元不等，
                    會依據病人的「嚴重度」和「經濟狀況」
                    而有所不同，對於每種商品也有不同的補助金額，
                    請您聯絡佑春，並將您的情形告訴佑春，
                    佑春會熱心積極的為您解說。
                </p>
            </template>
        </Sec>

        <Sec>
            <template v-slot:title>
                如何申請補助
            </template>
            <template v-slot:content>  
                <p>
                    您完全不必花時間去瞭解如何申請，只須聯絡佑春，
                    佑春會熱心積極的一步步指導您該準備什麼、該怎麼做，
                    您只須按照佑春的指示即可順利申請完成。 
                </p>               
            </template>
        </Sec> 

    </main>
</template>

<script>
import Poster from './Poster'
import Sec from './Sec'
import CommodityList from './Commodity-list'
export default {
    components:{ Poster, Sec, CommodityList }
}
</script>

<style lang="scss" scoped>
.foreword {
    margin: 64px 5% 0;
}

.qualifications-content {
    list-style-type: square;
    li {
        margin-left: 16px;
        h3 {
            margin: 0;
            padding: 0;
        }
        p {
            margin: 0 0 0 16px;
        }
    }
    
}

</style>