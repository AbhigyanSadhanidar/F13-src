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
    // Load static data instead of API call
    this.posts = {
    "banner": [
        {
            "id": 1,
            "title": "Hello world",
            "image": require("~/static/index/one-500.jpg"),
            "creation_date": "2021-07-19T11:37:41.586073+05:30",
            "is_active": true,
            "user": 1
        },
        {
            "id": 2,
            "title": "ds",
            "image": require("~/static/index/hbjhb-01_1_4MbtLfB.png"),
            "creation_date": "2021-07-19T12:02:47.780352+05:30",
            "is_active": true,
            "user": 1
        },
        {
            "id": 3,
            "title": "sd",
            "image": require("~/static/index/master-splash.jpg"),
            "creation_date": "2021-07-19T12:03:06.795777+05:30",
            "is_active": true,
            "user": 1
        },
        {
            "id": 4,
            "title": "Helo woprld",
            "image": require("~/static/index/https__specials-images.forbesimg.com_imageserve_5dbb4182d85e3000078fddae_0x0.jpg"),
            "creation_date": "2021-07-19T12:03:14.127306+05:30",
            "is_active": true,
            "user": 1
        }
    ],
    "upcoming_activity": [],
    "twitter_data": [
        {
            "data": {
                "id": 1404758143599448000,
                "geo": null,
                "lang": "en",
                "text": "Data protection is indeed important in all businesses but especially so in primary care settings where a range of s… https://t.co/Riig2b6P23",
                "user": {
                    "id": 816607552871878700,
                    "url": "https://t.co/jJTI3oeo65",
                    "lang": null,
                    "name": "Social Responsibility Council",
                    "id_str": "816607552871878657",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/jJTI3oeo65",
                                    "indices": [
                                        0,
                                        23
                                    ],
                                    "display_url": "srcouncil.in",
                                    "expanded_url": "http://www.srcouncil.in"
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "location": "New Delhi, India",
                    "verified": false,
                    "following": false,
                    "protected": false,
                    "time_zone": null,
                    "created_at": "Wed Jan 04 11:29:47 +0000 2017",
                    "utc_offset": null,
                    "description": "SRC, a voluntary non-profit org. to create awareness about the various facets of Social responsibility of persons/groups/societies/corporates in India & abroad.",
                    "geo_enabled": true,
                    "screen_name": "Srcdelhi",
                    "listed_count": 9,
                    "friends_count": 319,
                    "is_translator": false,
                    "notifications": false,
                    "statuses_count": 3002,
                    "default_profile": true,
                    "followers_count": 2052,
                    "translator_type": "none",
                    "favourites_count": 910,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/908616341623414784/J538UwBA_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/816607552871878657/1536929515",
                    "profile_link_color": "1DA1F2",
                    "profile_text_color": "333333",
                    "follow_request_sent": false,
                    "contributors_enabled": false,
                    "has_extended_profile": false,
                    "default_profile_image": false,
                    "withheld_in_countries": [],
                    "is_translation_enabled": false,
                    "profile_background_tile": false,
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/908616341623414784/J538UwBA_normal.jpg",
                    "profile_background_color": "F5F8FA",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_background_image_url": null,
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_use_background_image": true,
                    "profile_background_image_url_https": null
                },
                "place": null,
                "id_str": "1404758143599448066",
                "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                "entities": {
                    "urls": [
                        {
                            "url": "https://t.co/Riig2b6P23",
                            "indices": [
                                117,
                                140
                            ],
                            "display_url": "twitter.com/i/web/status/1…",
                            "expanded_url": "https://twitter.com/i/web/status/1404758143599448066"
                        }
                    ],
                    "symbols": [],
                    "hashtags": [],
                    "user_mentions": []
                },
                "favorited": false,
                "retweeted": false,
                "truncated": true,
                "created_at": "Tue Jun 15 11:10:15 +0000 2021",
                "coordinates": null,
                "contributors": null,
                "retweet_count": 1,
                "favorite_count": 0,
                "is_quote_status": false,
                "possibly_sensitive": false,
                "in_reply_to_user_id": null,
                "in_reply_to_status_id": null,
                "in_reply_to_screen_name": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_status_id_str": null,
                "possibly_sensitive_appealable": false
            }
        },
        {
            "data": {
                "id": 1406928441333620700,
                "geo": null,
                "lang": "en",
                "text": "Yoga is not a work-out it is a work-in, and this is the point of spiritual practice to make us teachable to open up… https://t.co/dvOZgSFSHJ",
                "user": {
                    "id": 816607552871878700,
                    "url": "https://t.co/jJTI3oeo65",
                    "lang": null,
                    "name": "Social Responsibility Council",
                    "id_str": "816607552871878657",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/jJTI3oeo65",
                                    "indices": [
                                        0,
                                        23
                                    ],
                                    "display_url": "srcouncil.in",
                                    "expanded_url": "http://www.srcouncil.in"
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "location": "New Delhi, India",
                    "verified": false,
                    "following": false,
                    "protected": false,
                    "time_zone": null,
                    "created_at": "Wed Jan 04 11:29:47 +0000 2017",
                    "utc_offset": null,
                    "description": "SRC, a voluntary non-profit org. to create awareness about the various facets of Social responsibility of persons/groups/societies/corporates in India & abroad.",
                    "geo_enabled": true,
                    "screen_name": "Srcdelhi",
                    "listed_count": 9,
                    "friends_count": 319,
                    "is_translator": false,
                    "notifications": false,
                    "statuses_count": 3002,
                    "default_profile": true,
                    "followers_count": 2053,
                    "translator_type": "none",
                    "favourites_count": 679,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/908616341623414784/J538UwBA_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/816607552871878657/1536929515",
                    "profile_link_color": "1DA1F2",
                    "profile_text_color": "333333",
                    "follow_request_sent": false,
                    "contributors_enabled": false,
                    "has_extended_profile": false,
                    "default_profile_image": false,
                    "withheld_in_countries": [],
                    "is_translation_enabled": false,
                    "profile_background_tile": false,
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/908616341623414784/J538UwBA_normal.jpg",
                    "profile_background_color": "F5F8FA",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_background_image_url": null,
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_use_background_image": true,
                    "profile_background_image_url_https": null
                },
                "place": null,
                "id_str": "1406928441333620736",
                "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                "entities": {
                    "urls": [
                        {
                            "url": "https://t.co/dvOZgSFSHJ",
                            "indices": [
                                117,
                                140
                            ],
                            "display_url": "twitter.com/i/web/status/1…",
                            "expanded_url": "https://twitter.com/i/web/status/1406928441333620736"
                        }
                    ],
                    "symbols": [],
                    "hashtags": [],
                    "user_mentions": []
                },
                "favorited": false,
                "retweeted": false,
                "truncated": true,
                "created_at": "Mon Jun 21 10:54:14 +0000 2021",
                "coordinates": null,
                "contributors": null,
                "retweet_count": 1,
                "favorite_count": 0,
                "is_quote_status": false,
                "possibly_sensitive": false,
                "in_reply_to_user_id": null,
                "in_reply_to_status_id": null,
                "in_reply_to_screen_name": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_status_id_str": null,
                "possibly_sensitive_appealable": false
            }
        },
        {
            "data": {
                "id": 1406928265327956000,
                "geo": null,
                "lang": "en",
                "text": "\"Yoga is a light, which once lit, will never dim. The better your practice, the brighter the flame.\" — B.K.S. Iyeng… https://t.co/K4D3XLitPK",
                "user": {
                    "id": 816607552871878700,
                    "url": "https://t.co/jJTI3oeo65",
                    "lang": null,
                    "name": "Social Responsibility Council",
                    "id_str": "816607552871878657",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "https://t.co/jJTI3oeo65",
                                    "indices": [
                                        0,
                                        23
                                    ],
                                    "display_url": "srcouncil.in",
                                    "expanded_url": "http://www.srcouncil.in"
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "location": "New Delhi, India",
                    "verified": false,
                    "following": false,
                    "protected": false,
                    "time_zone": null,
                    "created_at": "Wed Jan 04 11:29:47 +0000 2017",
                    "utc_offset": null,
                    "description": "SRC, a voluntary non-profit org. to create awareness about the various facets of Social responsibility of persons/groups/societies/corporates in India & abroad.",
                    "geo_enabled": true,
                    "screen_name": "Srcdelhi",
                    "listed_count": 9,
                    "friends_count": 319,
                    "is_translator": false,
                    "notifications": false,
                    "statuses_count": 3002,
                    "default_profile": true,
                    "followers_count": 2052,
                    "translator_type": "none",
                    "favourites_count": 910,
                    "profile_image_url": "http://pbs.twimg.com/profile_images/908616341623414784/J538UwBA_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/816607552871878657/1536929515",
                    "profile_link_color": "1DA1F2",
                    "profile_text_color": "333333",
                    "follow_request_sent": false,
                    "contributors_enabled": false,
                    "has_extended_profile": false,
                    "default_profile_image": false,
                    "withheld_in_countries": [],
                    "is_translation_enabled": false,
                    "profile_background_tile": false,
                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/908616341623414784/J538UwBA_normal.jpg",
                    "profile_background_color": "F5F8FA",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_background_image_url": null,
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_use_background_image": true,
                    "profile_background_image_url_https": null
                },
                "place": null,
                "id_str": "1406928265327955968",
                "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                "entities": {
                    "urls": [
                        {
                            "url": "https://t.co/K4D3XLitPK",
                            "indices": [
                                117,
                                140
                            ],
                            "display_url": "twitter.com/i/web/status/1…",
                            "expanded_url": "https://twitter.com/i/web/status/1406928265327955968"
                        }
                    ],
                    "symbols": [],
                    "hashtags": [],
                    "user_mentions": []
                },
                "favorited": false,
                "retweeted": false,
                "truncated": true,
                "created_at": "Mon Jun 21 10:53:32 +0000 2021",
                "coordinates": null,
                "contributors": null,
                "retweet_count": 0,
                "favorite_count": 0,
                "is_quote_status": false,
                "possibly_sensitive": false,
                "in_reply_to_user_id": null,
                "in_reply_to_status_id": null,
                "in_reply_to_screen_name": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_status_id_str": null,
                "possibly_sensitive_appealable": false
            }
        }
    ],
    "master_data": {
        "image": require("~/static/space.jpg"),
        "title": "Space Lab - Advanced Research Initiative",
        "description": " ISRO-recognized Space Tutor organizations for the establishment of “Space Labs” in EMRS"
    },
    "master_list": [
        {
            "image":  require("~/static/space.jpg"),
            "title": "Space Lab - Advanced Research Initiative",
            "description": " ISRO-recognized Space Tutor organizations for the establishment of “Space Labs” in EMRS"
        },
        {
            "image": require("~/static/index/SRC_SEE_Summit_2021_3.jpg"),
            "title": "The Third Sustainable Environment And Energy Summit 2021",
            "description": "Carrying the legacy forward of creating awareness on Green Business, Sustainable Energy & Sustainable Environment at the 3rd Edition of The Sustainable Environment And Energy Summit 2021"
        },
        {
            "image": require("~/static/index/1.jpg"),
            "title": "Khadi: for Make In India Research Book by Social Responsibility Council",
            "description": "Shri Amit Shah, Hon'ble Home Minister, former President BJP, released Research Book brought out by Khadi & Village Industries Commission & SRC"
        },
        {
            "image": require("~/static/index/3.jpg"),
            "title": "Agri-Mechanization: for Make In India by Social Responsibility Council",
            "description": "Shri Radha Mohan Singh, Former Hon'ble Cabinet Minister of Agriculture and Farmers Welfare released Research Book brought out by Ministry of Agriculture and SRC"
        },
        {
            "image": require("~/static/index/2.jpg"),
            "title": "Railway Protection Force Research Book by Social Responsibility Council",
            "description": "Shri M. Venkaiah Naidu, Hon’ble Vice President of India released Research Book brought out by RPF at 20th All India Police Band Competition closing ceremony at Rly Sports Complex, Secunderabad"
        },
        {
            "image": require("~/static/index/5_XzFqa91.jpg"),
            "title": "The First Sustainable Environment and Energy Summit 2019",
            "description": "Initiated small change of contributing to environment sustainability with the beginning of very 1st edition of the Sustainable Environment and Energy Summit 2019"
        },
        {
            "image": require("~/static/index/6_ZpVhq0P.jpg"),
            "title": "The Second Sustainable Environment and Energy Summit 2020",
            "description": "Continuing the tradition of Achieving environmental peace with growth, progress & environmental mortality, the 2nd edition of the Sustainable Environment and Energy Summit 2020 continued the story of change"
        },
        {
            "image": require("~/static/index/4.jpg"),
            "title": "Make A Positive Change - Be Socially Responsible",
            "description": "We believe by introducing such modules will integrate imbibed values in every generations and acumen into better decision making. It will result to better CSR practices for a sustainable World"
        },
        {
            "image": require("~/static/index/PHOTO-2021-08-19-11-23-55.jpg"),
            "title": "SRC Founder Mr. Arun Khurana received environment advocacy award at Good Air Summit by Honb'le Justice Mr. Swatanter Kumar",
            "description": "At Jawaharlal Nehru Stadium, New Delhi"
        }
    ]
}

      // Add Space Lab project
 

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
