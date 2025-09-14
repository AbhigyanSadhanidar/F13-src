export const state = () => ({
  teamList:[]
})

export const mutations = {

  SET_TEAMLIST_DATA(state,data){
    state.teamList = data
  }
}


export const getters = {

  GET_TEAMLIST_DATA(state){
    return state.teamList
  }
}
