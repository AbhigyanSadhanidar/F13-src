export const state = () => ({
    appBarColor:"transparent"
})


export const mutations = {

    SET_APPBAR_COLOR(state,color){
        state.appBarColor = color
    }
}

export const getters = {

    GET_APPBAR_COLOR(state){
        return state.appBarColor
    }

}
