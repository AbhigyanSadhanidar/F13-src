<template>
  <div>
    <v-img :src="require('~/static/ventures/ventures_banner.jpg')" height="50vh" style="filter: alpha(opacity=90);" class="image-filter">
    </v-img>
    <v-row align="center"  justify="center" style="margin-top:-160px !important;" class="mb-5">
      <v-col cols="12" sm="12" md="8" lg="8" xl="8">
        <v-card  shaped>
          <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
            Ventures so far
          </v-card-title>

          <v-card-text class="font-weight-medium body-2 text-center" style="font-size:20px !important; line-height: 1.5 !important;">
            Aesthetic documentation of socially and economically pertinent actions multiplies the good effect manifold. Research Books offer eternal life and value to an event or action. We have mastered the art of creating such books to the perfection. From photography to content development and designing and printing – we do it all. We also have expertise to transform the  Research Book  into e-book.
          </v-card-text>

          <v-row align="start" justify="start" class="pa-1">
            <v-col cols="12" xs="12" sm="6" md="4" xl="4" lg="4" v-for="(item,index) in venturesList" :key="item.key">
              <v-card >
                <v-img :src='item.image' height="300" contain></v-img>

                <v-card-title class="justify-center font-weight-medium headline text-uppercase textColor--text">
                  {{item.name}}
                </v-card-title>

              <v-divider/>

                <v-card-text class="font-weight-medium body-2 text-center" style="font-size:18px !important; line-height: 1.5 !important;">
                  {{item.description}}
                </v-card-text>
                <v-card-action>
                  <!-- <v-row align="center" justify="center"> -->
                    <v-btn outlined block text class="elevation-0" color="primary" @click="setVentures(item,index)">Proceed</v-btn>
                  <!-- </v-row> -->
                </v-card-action>
              </v-card>
            </v-col>
          </v-row>

        </v-card>
      </v-col>


    </v-row>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "",
  data: () => ({

  }),
  computed:{
    ...mapGetters("ventures",{"venturesList":"GET_VENTURES_LIST"})
  },
  methods: {
    setVentures(data,index) {
      //this.$store.commit('ventures/SET_VENTURES',data);
      this.$router.push(`/ventures/${index}/`);
    }
  }
}
</script>
<style media="screen">

.v-image__image{
background-size:100% 100%;
}
</style>
