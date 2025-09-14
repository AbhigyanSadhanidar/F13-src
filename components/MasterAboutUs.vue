<template>
    <v-row align="center" justify="center" >
        <v-card width="50%" class="elevation-0 mb-5">
        <v-card-title id="scrolling-techniques-7" class="justify-center font-weight-bold textColor--text text-h4">
            About Us
        </v-card-title>

        <v-card-text v-html="description" class="text-center font-weight-regular black--text headline ">

        </v-card-text>
    </v-card>
    </v-row>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        description: 'Social Responsibility Council (SRC) is a New Delhi based registered voluntary non-profit organization, registered under the Indian Companies Act, 1956, as amended in 2013. SRC has been established to create awareness about the various facets of social responsibility of persons / groups / societies / corporatesin India and abroad. It will do so through organizing various programmes and initiatives in related fields.',
      }
    },
    computed: {
        ...mapGetters("main",{"galleryList":"GET_GALLERY_LIST"})
    }
  }
</script>
