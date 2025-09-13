<template>
  <div>
    <v-card class="elevation-0" tile>
      <v-row>
        <v-col cols="12" sm="12" md="3" xl="3" lg="3">
          <v-card outlined class="pa-5">
            <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
              Volunteers
            </v-card-title>
            <v-card-text class="pb-0 mb-0 text-center">
              <animated-number
                :value="volunteer"
                :formatValue="formatToPrice"
                :duration="duration"
              /></v-card-text>

          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" xl="3" lg="3">
          <v-card outlined class="pa-5">
            <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
              Internship
            </v-card-title>
            <v-card-text class="pb-0 mb-0 text-center">
              <animated-number
                :value="internship"
                :formatValue="formatToPrice"
                :duration="duration"
              /></v-card-text>

          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" xl="3" lg="3">
          <v-card outlined class="pa-5">
            <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
              Pledge
            </v-card-title>
            <v-card-text class="pb-0 mb-0 text-center">
              <animated-number
                :value="pledge"
                :formatValue="formatToPrice"
                :duration="duration"
              /></v-card-text>

          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" xl="3" lg="3">
          <v-card outlined class="pa-5">
            <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
              ESF
            </v-card-title>
            <v-card-text class="pb-0 mb-0 text-center">
              <animated-number
                :value="pledge"
                :formatValue="formatToPrice"
                :duration="durationesf"
              /></v-card-text>

          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";
import {
  mapGetters
} from 'vuex'
export default {
  name: "",
  props:{marg:{type:Number,required:false,default:-160}},
  data: () => ({
    height: 350,
    value: 0,
    duration: 2000,
    durationesf: 0,
  }),
  components: {
    AnimatedNumber
  },
  methods: {
    formatToPrice(value) {
      return `<h2 class="text-h4 font-weight-bold textColor--text">${Number(value).toFixed(0)}</h2>`;
    },
  },
  computed: {
    ...mapGetters('main', {
      items: 'GET_HOME_DATA',
      internship: 'GET_INTERNSHIP_VALUE',
      volunteer: 'GET_VOLUNTEER_VALUE',
      pledge: 'GET_PLEDGE_VALUE'
    }),
  },
}
</script>
<style>

</style>

<style lang="scss" scoped>
</style>
