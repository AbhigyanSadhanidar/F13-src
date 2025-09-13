<template>
<div>
  <src-loader v-if="$fetchState.pending"/>
  <p v-else-if="$fetchState.error">An error occurred :(</p>

  <v-card v-else v-on:scroll.native="handleScroll" class="elevation-0">
    <v-row justify="center" align="center">
      <!-- <v-col cols="12" sm="12" md="12" class="pb-0 mb-0">
        <SrcEventCountdown/>
      </v-col> -->
      <!-- <v-col cols="12" sm="12" md="12">
        <div class="text-center">
          <SrcEventCountdown/>
        </div>

      </v-col> -->
      <v-col cols="12" sm="12" md="12">
        <div class="text-center">
          <master-slider />
        </div>

      </v-col>

      <v-col cols="12" sm="12" md="8">
        <v-card class="mb-5 elevation-0">
          <v-row justify="center" align="center">
            <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
              Few Words of Admiration
            </v-card-title>
          </v-row>
          <v-card-text>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="12" md="4">
                  <letter-slider title="Appreciation" path="appreciation" :length=3 :actual=3 />
              </v-col>

              <v-col cols="12" sm="12" md="4">
                  <letter-slider title="Knowledge Partner" path="partner" :length=6 :actual=6 />
              </v-col>

              <v-col cols="12" sm="12" md="4">
                  <letter-slider title="Letter for Recommendation" path="recommendation" :length=8 :actual=30 />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="8">
          <social-section />
      </v-col>



      <v-col cols="12" sm="12" md="8">

        <counter-section />

      </v-col>

      <!-- <v-col cols="12" sm="12" md="8">

        <v-card @click="changeRTL">
          <v-card-title>Hello</v-card-title>
        </v-card>

      </v-col> -->










      <!-- <v-col cols="12" sm="12" md="8" >
        <v-container>
          <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="12">

              <counter-upcoming />

            </v-col>

            <v-col cols="12" sm="12" md="12">
              <master-gallery />

            </v-col>

            <v-col cols="12" sm="12" md="12">
                <social-section />
            </v-col>

          </v-row>

          <v-row>

          </v-row>
        </v-container>
      </v-col> -->
      <StartupDialog />

    </v-row>
  </v-card>




</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import LetterSlider from '../components/LetterSlider.vue'
import MasterAboutUs from '../components/MasterAboutUs.vue'
import MasterSlider from '../components/MasterSlider.vue'
import zhHans from 'vuetify/lib/locale/zh-Hans'

export default {
  head: {
    titleTemplate: 'Social Responsibility Council - SrCouncil',
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
    ],
    script: [
      {
        src: "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
        body: false,
      },
    ],
  },
  fetchOnServer: true,
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= (Date.now() - 30000)) {
      this.$fetch()
    }
  },
  async fetch() {
    // this.posts = await fetch(`http://127.0.0.1:8000/home/dashboard/`)
    //   .then((res) => res.json())

    this.posts = await fetch(`https://api.srcouncil.in/home/dashboard/`,{'headers':{"X-API-KEY":"T0uf0wOD.FNxBVbSAFWx8z5TY6NaU38J36OzEobeJ"}})
      .then((res) => res.json())

      // Add Space Lab project
  const spaceLabProject = {
    "image": "https://lmg-labmanager.s3.amazonaws.com/assets/articleNo/21822/iImg/40011/mar20-cover-lab-inline.jpg",
    "title": "Space Lab - Advanced Research Initiative", 
    "description": " ISRO-recognized Space Tutor organizations for the establishment of “Space Labs” in EMRS"
  }

     // Update master_data to be Space Lab (latest project)
  this.posts.master_data = spaceLabProject

  // Add Space Lab to the beginning of master_list
  if (this.posts.master_list) {
    this.posts.master_list.unshift(spaceLabProject)
  } else {
    this.posts.master_list = [spaceLabProject]
  }

  //console.log(this.posts)
  this.$store.commit("main/SET_HOME_DATA", this.posts)
},
  data() {
    return {
      show: true,
      posts: {},
      scrollInvoked: 0,
      offsetTop: 0,

    }
  },
  components: {
    Logo,
    VuetifyLogo,
    MasterAboutUs,
    MasterSlider,
    LetterSlider
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    changeRTL () {
        this.$vuetify.lang.current = zhHans
      },
    onScroll(e) {
      this.offsetTop = e.target.scrollTop
      if(this.offsetTop > 400){
        this.$store.commit("main/SET_APPBAR_COLOR","blue")
      }else{
        this.$store.commit("main/SET_APPBAR_COLOR","transparent")
      }
      console.log("load")
    },
    onScrollss() {
      this.scrollInvoked++
      console.log("Hello")
    },
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      if(window.scrollY > 500){
        this.$store.commit("main/SET_INTERNSHIP_VALUE",100),
        this.$store.commit("main/SET_VOLUNTEER_VALUE",400),
        this.$store.commit("main/SET_PLEDGE_VALUE",20)
      }
      console.log(window.scrollY);
    }
  }
}
</script>
