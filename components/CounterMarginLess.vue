<template>
<div >
  <v-card style="margin-top:0px !important;" class="elevation-0 mb-5">
    <v-row align="center" justify="space-between">
      <v-col cols="12" sm="12" md="6">
        <v-card class="elevation-0" :height="height" >
          <v-card-title class="font-weight-bold textColor--text headline justify-center text-h4">
            Total Initiatives
          </v-card-title>
          <v-container  >
            <v-row align="center" justify="center" >


              <v-col cols="12" md="12" sm="6">
                <v-card outlined>
                  <v-card-text class="pb-0 mb-0 text-center">
                    <animated-number
                      :value="value"
                      :formatValue="formatToPrice"
                      :duration="duration"
                    /></v-card-text>
                    <v-card-subtitle class="pt-0 mt-0 justify-center text-center textColor--text text-h5 font-weight-medium">
                      No. of volunteers
                    </v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-card outlined>
                  <v-card-text class="pb-0 mb-0 text-center">
                    <animated-number
                      :value="value"
                      :formatValue="formatToPrice"
                      :duration="duration"
                    /></v-card-text>
                    <v-card-subtitle class="pt-0 mt-0 text-center text-h5 textColor--text font-weight-medium">
                      No. of Internships
                    </v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-card outlined>
                  <v-card-text class="pb-0 mb-0 text-center">
                    <animated-number
                      :value="value"
                      :formatValue="formatToPrice"
                      :duration="duration"
                    /></v-card-text>
                    <v-card-subtitle class="pt-0 mt-0 text-center text-h5 textColor--text font-weight-medium">
                      No. of Pledge
                    </v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-card class="elevation-0 " :height="height">
          <v-card-title class="font-weight-bold textColor--text headline justify-center text-h4">
            Upcoming Events
          </v-card-title>
          <v-virtual-scroll :items="items['upcoming_activity']" :item-height="50" height="280" v-if="items['upcoming_activity'].length > 0">
            <template v-slot:default="{ item }">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="body-1 font-weight-bold">{{ item.title }}</v-list-item-title>
                  <v-list-item-sub-title class="body-2" v-html="$moment(item.date).format('MMMM Do YYYY, h:mm a')"></v-list-item-sub-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn depressed small icon>


                    <v-icon color="blue darken-4" right>
                      mdi-open-in-new
                    </v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-virtual-scroll>
          <v-container fluid fill-height v-else>
            <v-row align="center" justify="center">
              <p class="font-weight-bold">No Upcoming Activity</p>

            </v-row>
          </v-container>
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
  }),
  components: {
    AnimatedNumber
  },
  methods: {
    formatToPrice(value) {
      return `<h2 class="headline font-weight-bold primary--text">${Number(value).toFixed(0)} K</h2>`;
    },
  },
  computed: {
    ...mapGetters('main', {
      items: 'GET_HOME_DATA',
    }),
  },
}
</script>
<style>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
