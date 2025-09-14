<template>
<div>
  <src-loader v-if="$fetchState.pending" />
  <p v-else-if="$fetchState.error">An error occurred :(</p>
    <v-row v-else align="center" justify="center" class="mt-5 mb-5">
      <v-col  cols="12" sm="12" md="8" lg="8" xl="8" >
        <v-card class="elevation-0 transparent">
          <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
            Advisory
          </v-card-title>
          <v-tabs
            color="textColor"
            grow
            show-arrows
          >
            <v-tab v-for="(item,index) in items" :key="index">{{item.label}}</v-tab>

            <v-tab-item

              v-for="(item,index) in items"
              :key="index"
            >
              <v-container fluid>
                <v-row v-if="item['am_ac'].length > 0">
                  <v-col
                    v-for="i in item['am_ac']"
                    :key="i"
                    cols="12"
                    md="4">
                    <member-card :member='i' :showDialog="showDialog" />
                  </v-col>


                </v-row>
                <v-row v-else>

                  <v-col
                    cols="12"
                    md="12"

                  >
                    <v-card class="mt-5 elevation-0">
                      <v-card-title class="justify-center red--text text-h6">
                        Coming Soon
                      </v-card-title>
                    </v-card>
                  </v-col>
                </v-row>

              </v-container>
            </v-tab-item>
          </v-tabs>
          <member-dialog :dialog="dialog" v-if="dialog == true" :hideDialog="hideDialog" :data="dialogData"/>
          <!-- <v-col>
              <v-container fluid>
                <v-row>
                    <v-col cols="12" sm="12" md="4" xs="12" xl="4" v-for="item in internalData" :key="item.key">
                      <member-card :member='item' :showDialog="showDialog" />
                    </v-col>
                </v-row>
                  <member-dialog :dialog="dialog" v-if="dialog == true" :hideDialog="hideDialog" :data="dialogData"/>
              </v-container>
            </v-col> -->





        </v-card>
      </v-col>
    </v-row>

</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: "",
  head: {
    titleTemplate: 'Social Responsibility Council - Members',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: 'Meta description'
      }
    ]
  },
  fetchOnServer: false,
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= (Date.now() - 30000)) {
      this.$fetch()
    }
  },
  async fetch() {
    // Load static data instead of API call
    this.items = [
    {
        "label": "Social",
        "am_ac": [
            {
                "image": require("~/static/advisory/1-min-2.jpg"),
                "label": "Arun Khurana",
                "description": "Choose the right path without worrying about the result or the effort. Create values for social and national exigencies. Analyze mistakes in pursuit of excellence. Mr. Arun Khurana, the Founder Director of SRC, is a social scientist and activist of high acclaim. He is also a media mogul. In addition to SRC, he is at the helm of two commercially successful companies as their Director. These companies are Degree 360 Solutions Private Limited and Degree 360 Software Private Limited",
                "designation": "Founder"
            },
            {
                "image": require("~/static/advisory/SP_Sing_copy.jpg"),
                "label": "S. P. Singh",
                "description": "Mr. S. P. Singh completed his Post-graduation Degree in commerce from KUK University in 1981. He has served as a Lecturer in Commerce for 11 Years and taught at Graduation and Post-graduation levels. Further, he had joined the Khadi and Village Industries Commission (KVIC), Govt. of India as the Director in 1992 and has served the Khadi and Village Industries Commission in different capacities till his retirement in February 2018.",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/3-new.jpg"),
                "label": "R Ranjan Rashmi",
                "description": "Shri Rajani Ranjan Rashmi is a retired officer of the Indian Administrative Service and is known for his expertise in the field of environment and trade. During 35 years of his public service, he has served the Central Government and the State Government in various capacities, particularly in the fields of financial administration, environmental management and international trade.",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/77.jpg"),
                "label": "Sutanu Sinha",
                "description": "CS Sutanu Sinha is the former Chief Executive of the Institute of Company Secretaries of India. Mr. Sinha headed the Academics & Professional Development Directorate of ICSI. He is a Fellow Member of the Institute of Company Secretaries of India and also a Member of the Institute of Chartered Secretaries and Administrators, London (UK). He is also Global Corporate Governance Forum (GCGF), IFC trained Trainer for Directors Development Programmes and Corporate Secretaries.",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/WhatsApp_Image_2021-09-06_at_2.39.27_PM.jpeg"),
                "label": "Ghanshyam Goel",
                "description": "Mr. Ghanshyam Goel is a dedicated Indian Administrative Officer with experience in achieving memorable campaigns and cross-team collaboration. He is proactive and excited to partner with like-minded individuals.",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/9.png"),
                "label": "Vivek Narayan Sharma",
                "description": "Mr. Vivek Narayan Sharma -a Socio-Politico-Constitution expert and renowned Advocate practicing at Supreme Court of India. He is the ex-Joint Secretary of Supreme Court Advocates on Record Association.\r\nHe is the President of 'Society for Criminal Justice' and National Advisor to 'Ladli Foundation', Consultant & Convener for eminent social, political outfits and law journals in India. He is Advisor (Legal) to Indo-Canada Chambre De Commerce (ICCC).One of the most popular, most discussed and most-read Columnist for Times of India (TOI) and Economic Times (ET), he has authored the famous book 'Electionomics' published by leading publisher Thomson Reuters",
                "designation": "Honorary Advisor"
            }
        ]
    },
    {
        "label": "Environment",
        "am_ac": [
            {
                "image": require("~/static/advisory/1-min-2.jpg"),
                "label": "Arun Khurana",
                "description": "Choose the right path without worrying about the result or the effort. Create values for social and national exigencies. Analyze mistakes in pursuit of excellence. Mr. Arun Khurana, the Founder Director of SRC, is a social scientist and activist of high acclaim. He is also a media mogul. In addition to SRC, he is at the helm of two commercially successful companies as their Director. These companies are Degree 360 Solutions Private Limited and Degree 360 Software Private Limited",
                "designation": "Founder"
            },
            {
                "image": require("~/static/advisory/SP_Sing_copy.jpg"),
                "label": "S. P. Singh",
                "description": "Mr. S. P. Singh completed his Post-graduation Degree in commerce from KUK University in 1981. He has served as a Lecturer in Commerce for 11 Years and taught at Graduation and Post-graduation levels. Further, he had joined the Khadi and Village Industries Commission (KVIC), Govt. of India as the Director in 1992 and has served the Khadi and Village Industries Commission in different capacities till his retirement in February 2018.",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/3-new.jpg"),
                "label": "R Ranjan Rashmi",
                "description": "Shri Rajani Ranjan Rashmi is a retired officer of the Indian Administrative Service and is known for his expertise in the field of environment and trade. During 35 years of his public service, he has served the Central Government and the State Government in various capacities, particularly in the fields of financial administration, environmental management and international trade.",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/77.jpg"),
                "label": "Sutanu Sinha",
                "description": "CS Sutanu Sinha is the former Chief Executive of the Institute of Company Secretaries of India. Mr. Sinha headed the Academics & Professional Development Directorate of ICSI. He is a Fellow Member of the Institute of Company Secretaries of India and also a Member of the Institute of Chartered Secretaries and Administrators, London (UK). He is also Global Corporate Governance Forum (GCGF), IFC trained Trainer for Directors Development Programmes and Corporate Secretaries.",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/WhatsApp_Image_2021-09-06_at_2.39.27_PM.jpeg"),
                "label": "Ghanshyam Goel",
                "description": "Mr. Ghanshyam Goel is a dedicated Indian Administrative Officer with experience in achieving memorable campaigns and cross-team collaboration. He is proactive and excited to partner with like-minded individuals.",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/9.png"),
                "label": "Vivek Narayan Sharma",
                "description": "Mr. Vivek Narayan Sharma -a Socio-Politico-Constitution expert and renowned Advocate practicing at Supreme Court of India. He is the ex-Joint Secretary of Supreme Court Advocates on Record Association.\r\nHe is the President of 'Society for Criminal Justice' and National Advisor to 'Ladli Foundation', Consultant & Convener for eminent social, political outfits and law journals in India. He is Advisor (Legal) to Indo-Canada Chambre De Commerce (ICCC).One of the most popular, most discussed and most-read Columnist for Times of India (TOI) and Economic Times (ET), he has authored the famous book 'Electionomics' published by leading publisher Thomson Reuters",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/Dr._Rawail_Singh.jpg"),
                "label": "Rawail Singh",
                "description": "Dr. Rawail Singh has Worked with University of Delhi as Professor of Punjabi (Was Head of the Department from. He has also Worked as Secretary, Punjabi Academy, Government of NCT of Delhi. He also Worked as Assistant Secretary Punjabi academy, Govt, Of NCT of Delhi. Worked As Newsreader (Punjabi) in All India Radio. He was Nominated as Member, Governing Council (Vice Chancellor’s Nominee), SGND Khalsa College, University of Delhi, and Nominated as Member, Governing Council (Vice Chancellor’s Nominee), Mata Sundri College, University of Delhi.",
                "designation": "Honorary Advisor"
            },
            {
                "image": "/advisory/new_resume2020.bmp",
                "label": "Gurmohinder Singh",
                "description": "Dr. Gurmohinder Singh has a Post Graduate Diploma in Journalism from Bhartiya Vidya Bhawan-1992. He is working as Associate Professor in the Department of Punjabi, Sri Guru Nanak Dev Khalsa College, University of Delhi. Some of his famous books are Tara Singh Di Kavita Da Vikas,(Criticism), Jaswant deed da Kaav Jagat(Criticism),  Adhoora Waak (Poetry). His 13 papers are presented in National Seminar with More than 100 reviews & articles published in Daily Newspaper & magazines.",
                "designation": "Honorary Advisor"
            },
            {
                "image": "/advisory/Faculty-Proforma_2019-20.bmp",
                "label": "Narender Kumar Bishnoi",
                "description": "Narender Kumar Bishnoi  is a Assistant Professor at Campus Law Centre. He has been awarded Nipun Rover ( Rajya purskaar) by Rajasthan Rajya Bharat Scout and Guide. He is a Member(Academic council Nominee), Admission Committee for Law courses, faculty of law, University of Delhi, 2019-20. He presented a Paper on Gandhi’s view on Compulsory Education in National Seminar,” Gandhi On Duties”, organized by Legal aid Society, Campus law Centre in collaboration with CDLSA,Delhi, 30th January 2020 and Teacher Convener of 16th K.K. Luthra Memorial Moot Court Competition organised by Campus Law Centre, Faculty of Law, University of Delhi,17-19 January 2020",
                "designation": "Honorary Advisor"
            }
        ]
    },
    {
        "label": "Traffic Mobility",
        "am_ac": []
    },
    {
        "label": "Security",
        "am_ac": []
    },
    {
        "label": "Education",
        "am_ac": [
            {
                "image": require("~/static/advisory/1-min-2.jpg"),
                "label": "Arun Khurana",
                "description": "Choose the right path without worrying about the result or the effort. Create values for social and national exigencies. Analyze mistakes in pursuit of excellence. Mr. Arun Khurana, the Founder Director of SRC, is a social scientist and activist of high acclaim. He is also a media mogul. In addition to SRC, he is at the helm of two commercially successful companies as their Director. These companies are Degree 360 Solutions Private Limited and Degree 360 Software Private Limited",
                "designation": "Founder"
            },
            {
                "image": require("~/static/advisory/SP_Sing_copy.jpg"),
                "label": "S. P. Singh",
                "description": "Mr. S. P. Singh completed his Post-graduation Degree in commerce from KUK University in 1981. He has served as a Lecturer in Commerce for 11 Years and taught at Graduation and Post-graduation levels. Further, he had joined the Khadi and Village Industries Commission (KVIC), Govt. of India as the Director in 1992 and has served the Khadi and Village Industries Commission in different capacities till his retirement in February 2018.",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/3-new.jpg"),
                "label": "R Ranjan Rashmi",
                "description": "Shri Rajani Ranjan Rashmi is a retired officer of the Indian Administrative Service and is known for his expertise in the field of environment and trade. During 35 years of his public service, he has served the Central Government and the State Government in various capacities, particularly in the fields of financial administration, environmental management and international trade.",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/77.jpg"),
                "label": "Sutanu Sinha",
                "description": "CS Sutanu Sinha is the former Chief Executive of the Institute of Company Secretaries of India. Mr. Sinha headed the Academics & Professional Development Directorate of ICSI. He is a Fellow Member of the Institute of Company Secretaries of India and also a Member of the Institute of Chartered Secretaries and Administrators, London (UK). He is also Global Corporate Governance Forum (GCGF), IFC trained Trainer for Directors Development Programmes and Corporate Secretaries.",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/WhatsApp_Image_2021-09-06_at_2.39.27_PM.jpeg"),
                "label": "Ghanshyam Goel",
                "description": "Mr. Ghanshyam Goel is a dedicated Indian Administrative Officer with experience in achieving memorable campaigns and cross-team collaboration. He is proactive and excited to partner with like-minded individuals.",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/9.png"),
                "label": "Vivek Narayan Sharma",
                "description": "Mr. Vivek Narayan Sharma -a Socio-Politico-Constitution expert and renowned Advocate practicing at Supreme Court of India. He is the ex-Joint Secretary of Supreme Court Advocates on Record Association.\r\nHe is the President of 'Society for Criminal Justice' and National Advisor to 'Ladli Foundation', Consultant & Convener for eminent social, political outfits and law journals in India. He is Advisor (Legal) to Indo-Canada Chambre De Commerce (ICCC).One of the most popular, most discussed and most-read Columnist for Times of India (TOI) and Economic Times (ET), he has authored the famous book 'Electionomics' published by leading publisher Thomson Reuters",
                "designation": "Honorary Advisor"
            },
            {
                "image": require("~/static/advisory/Dr._Rawail_Singh.jpg"),
                "label": "Rawail Singh",
                "description": "Dr. Rawail Singh has Worked with University of Delhi as Professor of Punjabi (Was Head of the Department from. He has also Worked as Secretary, Punjabi Academy, Government of NCT of Delhi. He also Worked as Assistant Secretary Punjabi academy, Govt, Of NCT of Delhi. Worked As Newsreader (Punjabi) in All India Radio. He was Nominated as Member, Governing Council (Vice Chancellor’s Nominee), SGND Khalsa College, University of Delhi, and Nominated as Member, Governing Council (Vice Chancellor’s Nominee), Mata Sundri College, University of Delhi.",
                "designation": "Honorary Advisor"
            },
            {
                "image": "/advisory/new_resume2020.bmp",
                "label": "Gurmohinder Singh",
                "description": "Dr. Gurmohinder Singh has a Post Graduate Diploma in Journalism from Bhartiya Vidya Bhawan-1992. He is working as Associate Professor in the Department of Punjabi, Sri Guru Nanak Dev Khalsa College, University of Delhi. Some of his famous books are Tara Singh Di Kavita Da Vikas,(Criticism), Jaswant deed da Kaav Jagat(Criticism),  Adhoora Waak (Poetry). His 13 papers are presented in National Seminar with More than 100 reviews & articles published in Daily Newspaper & magazines.",
                "designation": "Honorary Advisor"
            },
            {
                "image": "/advisory/Faculty-Proforma_2019-20.bmp",
                "label": "Narender Kumar Bishnoi",
                "description": "Narender Kumar Bishnoi  is a Assistant Professor at Campus Law Centre. He has been awarded Nipun Rover ( Rajya purskaar) by Rajasthan Rajya Bharat Scout and Guide. He is a Member(Academic council Nominee), Admission Committee for Law courses, faculty of law, University of Delhi, 2019-20. He presented a Paper on Gandhi’s view on Compulsory Education in National Seminar,” Gandhi On Duties”, organized by Legal aid Society, Campus law Centre in collaboration with CDLSA,Delhi, 30th January 2020 and Teacher Convener of 16th K.K. Luthra Memorial Moot Court Competition organised by Campus Law Centre, Faculty of Law, University of Delhi,17-19 January 2020",
                "designation": "Honorary Advisor"
            }
        ]
    },
    {
        "label": "Infrastructure",
        "am_ac": []
    }
]

    //console.log(this.posts)


  },
  data: () => ({
    dialog: false,
    tab: null,
    dialogData: null,
    internalData: null,
    items: []
  }),
  computed: {
    ...mapGetters('members', {
      memberList: 'GET_MEMBER_LIST',
      dialogD: 'GET_DIALOG_STATE'
    }),
  },
  methods: {
    showDialog(data) {
      this.dialog = true
      this.dialogData = data
    },
    setInternalData(obj) {
      this.internalData = obj
    },
    hideDialog() {
      this.dialog = false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
