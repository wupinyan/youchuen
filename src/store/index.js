import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

import error from './error'

export default new vuex.Store({
    modules:{
        error
    }
})