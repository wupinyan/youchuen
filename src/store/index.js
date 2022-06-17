import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

import commodityList from './commodity-list'
import error from './error'

export default new vuex.Store({
    modules:{
        commodityList,
        error
    }
})