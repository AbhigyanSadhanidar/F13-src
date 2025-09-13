<template>
  <v-app>
<PrimaryAppBar/>
    <v-main>

      <v-container fluid class="pl-0 pr-0 ml-0 mr-0 mt-0 pt-0">

        <!-- <v-container fluid class="pa-0 px-0 ma-0 mt-0 "> -->
        <nuxt />
      </v-container>
    </v-main>
    <v-divider/>
    <master-footer-two/>

    <master-footer/>
    <client-only>
        <Cookie />
      </client-only>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      closeOnCon: false,
      scrollInvoked: 0,

    }
  },


}
</script>


<style media="screen">
.v-card__text, .v-card__title {
word-break: normal; /* maybe !important  */
}
</style>
