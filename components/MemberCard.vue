<template>
<div>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto elevation-0" outlined max-width="300"   @click="showDialog(member)">
        <!-- <v-img :src="require(`~/static/member/${member.image}`)" max-width="300" height="350" class="image-filter"></v-img> -->
        <v-img :src="member.image" width="100%" height="380" class="image-filter" ></v-img>

        <v-divider/>

        <v-container fluid fill-height pb-0 ma-0 pa-0 px-0 mx-0>
          <v-layout fill-height align-end pb-0 mb-0>
            <v-row no-gutters align="center" justify="center">
              <v-card-title class="headline mt-1 mb-1 center--text textColor--text">{{member.label}}</v-card-title>
              <!-- <v-col cols="12" sm="12" md="12" lg="12" xs="12">
                <v-card class="pa-2" height="50" color="rgba(0, 0, 0, 0.5)" @click="">
                  <span class="headline  center--text textColor--text">
                      {{member.name}}
                  </span>
                </v-card>
              </v-col> -->
            </v-row>
          </v-layout>
        </v-container>



        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#036358">
            <v-btn @click="showDialog(member)">See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "",
  props: {
    member: {
      type: Object,
      required: true
    },
    showDialog:{
      type:Function,
      required:true
    }

  },
  data: () => ({
    i:"1.jpg",
  }),

}
</script>
<style media="screen" >
.image-filter {
  -webkit-filter: grayscale(100%) !important;
  filter: grayscale(100%) !important;
}
</style>
