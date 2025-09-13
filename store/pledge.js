export const state = () => ({

  pledgeInitalData:{},
  stepper:1,
  stepperTwo:1,
  formData:{},
  certData:{}

})



export const mutations = {

  SET_INITIAL_PLEDGE_DATA(state,data){
    state.pledgeInitalData = data
  },

  SET_STEPPER_DATA(state,value){
    state.stepper = value
  },

  SET_PLEDGEFORM_DATA(state,value){
    state.formData = value
  },

  SET_CERT_DATA(state,value){
    state.certData = value
  },

  SET_STEPPERTWO_DATA(state,value){
    state.stepperTwo = value
  },

}


export const getters = {

  GET_INITIAL_PLEDGE_DATA(state){
    return state.pledgeInitalData
  },

  GET_STEPPER_DATA(state){
    return state.stepper
  },

  GET_PLEDGEFORM_DATA(state){
    return state.formData
  },

  GET_CERT_DATA(state){
    return state.certData
  },

  GET_STEPPERTWO_DATA(state){
    return state.stepperTwo
  },


}
