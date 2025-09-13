export const state = () => ({
  showDialog:false,
  memberList:[
    {
      key:1,
      name:"Mr. Arun Khurana",
      position:"Founder",
      full_name:"Mr. Arun Khurana",
      image:"1.jpg",
      description:"Choose the right path without worrying about the result or the effort. Create values for social and national exigencies. Analyze mistakes in pursuit of excellence. Mr. Arun Khurana, the Founder Director of SRC, is a social scientist and activist of high acclaim. He is also a media mogul. In addition to SRC, he is at the helm of two commercially successful companies as their Director. These companies are Degree 360 Solutions Private Limited and Degree 360 Software Private Limited"
    },
    {
      key:2,
      name:"Mr. S. P. Singh",
      position:"Honorary Advisor",
      full_name:"Honorary Advisor - S. P. Singh, Deputy CEO (KYIC) (Retd.)",
      image:"2.jpg",
      description:"Mr. S. P. Singh completed his Post-graduation Degree in commerce from KUK University in 1981. He has served as a Lecturer in Commerce for 11 Years and taught at Graduation and Post-graduation levels. Further, he had joined the Khadi and Village Industries Commission (KVIC), Govt. of India as the Director in 1992 and has served the Khadi and Village Industries Commission in different capacities till his retirement in February 2018."
    },
    {
      key:3,
      name:"Mr. R Ranjan Rashmi",
      position:"Honorary Advisor",
      full_name:"Honorary Advisor - Rajani Ranjan Rashmi, IAS (Retd.)",
      image:"3.jpg",
      description:"Shri Rajani Ranjan Rashmi is a retired officer of the Indian Administrative Service and is known for his expertise in the field of environment and trade. During 35 years of his public service, he has served the Central Government and the State Government in various capacities, particularly in the fields of financial administration, environmental management and international trade."
    },
    {
      key:7,
      name:"CS Sutanu Sinha",
      position:"Honorary Advisor",
      full_name:"Honorary Advisor - CS Sutanu Sinha",
      image:"7.jpg",
      description:"CS Sutanu Sinha is the former Chief Executive of the Institute of Company Secretaries of India. Mr. Sinha headed the Academics & Professional Development Directorate of ICSI. He is a Fellow Member of the Institute of Company Secretaries of India and also a Member of the Institute of Chartered Secretaries and Administrators, London (UK). He is also Global Corporate Governance Forum (GCGF), IFC trained Trainer for Directors Development Programmes and Corporate Secretaries."
    },
    {
      key:5,
      name:"Vivek Narayan Sharma",
      position:"Advisor",
      full_name:"Vivek Narayan Sharma",
      image:"9.png",
      description:"Mr. Vivek Narayan Sharma -a Socio-Politico-Constitution expert and renowned Advocate practicing at Supreme Court of India. He is the ex-Joint Secretary of Supreme Court Advocates on Record Association."+
      "He is the President of 'Society for Criminal Justice' and National Advisor to 'Ladli Foundation', Consultant & Convener for eminent social, political outfits and law journals in India. He is Advisor (Legal) to Indo-Canada Chambre De Commerce (ICCC)."+
      "One of the most popular, most discussed and most-read Columnist for Times of India (TOI) and Economic Times (ET), he has authored the famous book 'Electionomics' published by leading publisher Thomson Reuters"
    },
    {
      key:5,
      name:"Mr. Santosh Koshy Joy",
      position:"Honorary Advisor",
      full_name:"Senior Consultant - Santosh Koshy Joy",
      image:"5.jpg",
      description:"Mr. Kamal Narayan Omer is a communications specialist, who began his career in the media with Hindustan Times. He later worked with leading organizations like Press Trust of India, United News of India and the Financial Chronicle. After a long stint in journalism, Kamal joined SRC as an Advisor and has been associated with the organization since 2014."+
      "An entrepreneur, health advocate and co-Founder of Teamwork Communications Group & Indian Health & Wellness (IHW) Council, Kamal Narayan Omer has the traits of being a maverick leader."+
      "Being a network savvy and relationship builder to recruit support within the organization and with team partners, Kamal has conducted a series of successful campaigns for the Kerala government, Jharkhand government and the Delhi government's department of art, culture and languages."
    },
    {
      key:4,
      name:"Miss. Nikky Gupta",
      position:"Honorary Advisor",
      full_name:"Senior Consultant - Nikky Gupta",
      image:"4.jpg",
      description:"Ms. Nikky is a specialist in advertising, event management, electronic media, digital media and public relations (PR). She leads the media advocacy team and also manages client relationships. She specializes in delivering the best possible event-based solutions as well as communication campaigns."
    },


  ]
})


export const mutations = {

  SET_DIALOG_STATE(state,data){
    state.showDialog = data
  }

}

export const getters = {

  GET_MEMBER_LIST(state){
    return state.memberList
  },

  GET_DIALOG_STATE(state,data){
    return state.showDialog
  }

}
