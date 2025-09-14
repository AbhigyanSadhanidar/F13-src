export const state = () => ({
  selectedVentures: {},
  vanturesList: [
    {
      key: 1,
      name: "Mahindra",
      description: 'The research book objectifies the need of farm mechanisation to the small and marginal farmers and helping to build an Atmanirbhar Bharat.',
      image: require("/static/ventures/pngwing.com_-8.png"),
      url: "/pdf/Mahindra_Coffee_Table_Book.pdf"
    },
    {
      key: 2,
      name: "Agri Mechanization",
      description: 'This Research Book on "Agri-Mechanization for Make in India" is an exercise undertaken by Social Responsibility Council towards national well-being and development.',
      image: require("/static/ventures/am.png"),
      url: "/pdf/Agri_Mech.pdf"
    },
    {
      key: 3,
      name: "Plant Protection",
      description: 'Plant Protection is the practice of weather, weeds, pests and diseases that damage or inhibit the growth of fruit, vegetable and other horticulture crops.',
      image: require("/static/ventures/am.png"),
      url: ""
    },
    {
      key: 4,
      name: "Khadi",
      description: 'Today, the production of Khadi is by far the largest rural productivity programme in the world and this research book gives endless details about Khadi and its significance. ',
      image: require("/static/ventures/Khadi-And-Village-Industries-Commission.jpg"),
      url: "/pdf/Khadi_for_Make_in_India.pdf"
    },
    {
      key: 5,
      name: "NDMC",
      description: 'The Research book documents down the successful endeavours initiated by New Delhi Municipal Corporation to bring a transformation in Delhi. ',
      image: require("/static/ventures/new-delhi-municipal-council-ndmc-logo-vector.png"),
      url: "/pdf/NDMC.pdf"
    },
    {
      key: 6,
      name: "RPF",
      description: 'The Research book presents the initiation and working process of RPF and their importance in "better protection and security of railway property & passenger area"',
      image: require("/static/ventures/Railway_Protection_Force_Logo.png"),
      url: "/pdf/RPF.pdf"
    },
    {
      key: 7,
      name: "Lakshadweep",
      description: 'The Lakshadweep Research book has laid a special emphasis on the group of islands, their exciting journeys and heavenly experience over there.',
      image: require("/static/ventures/lakshadweep.jpg"),
      url: "/pdf/Lakshdweep.pdf"
    },
    {
      key: 8,
      name: "Delhi Police",
      description: '"With Delhi"s history, indubitably, the evolution of India as a nation has been intricately intertwined. This research book will take you from heritage to Cyber-age of Delhi Police.',
      image: require("/static/ventures/Delhi-Police-logo-png.png"),
      url: "/pdf/Delhi_Police.pdf"
    },
    {
      key: 9,
      name: "NSTFDC",
      description: 'Currently undertaking CSR educational initiatives for EMRS schools .',
      image: require('~/static/ventures/nsfdc.png'),
      url: ""
    }
  ]

})


export const mutations = {

  SET_VENTURES(state, data) {
    state.selectedVentures = data
  }

}

export const getters = {

  GET_VENTURES_LIST(state) {
    return state.vanturesList
  },


  GET_SELECTED_VENTURES(state) {
    return state.selectedVentures
  }

}
