export default {
    namespaced: true,

    state:{
        error: false
    },

    mutations:{
        showError(state){
            state.error = true
        }
    }

}