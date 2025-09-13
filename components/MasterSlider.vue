<template>
<div>
  <v-row align="start" justify="start" no-gutters>
    <v-col cols="12" sm="12" md="2" class="hidden-sm-and-down">
      <v-virtual-scroll :items="(items['master_list'])" :item-height="80" style="height:95vh;" class="bg-cs hidden-sm-and-down primary">
        <template v-slot:default="{ item, index }">
          <v-list-item class="ma-2 black mt-2" style="border-radius:15px !important;" @click="jumpTo(index)">
            <v-list-item-avatar tile size="60" style="border-radius:20px !important;">
              <v-img :src="item.image" style="border-radius:20px !important;"></v-img>
            </v-list-item-avatar>

            <v-list-item-content class="justify-start mt-2" style="align-items:start !important; align-self:flex-start !important;">
              <v-list-item-title class="text-capitalize white--text font-weight-light" style="font-size:18px;">{{item.title}}</v-list-item-title>
              <v-list-item-subtitle class="text-capitalize white--text font-weight-light">{{item.description}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-col>
    <v-col cols="12" sm="12" md="10">
      <v-carousel height="95vh" cycle hide-delimiters show-arrows-on-hover interval="10000" :value="carouselValue" class="image-filters hidden-sm-and-down">
        <v-carousel-item v-for="(item,i) in items['master_list']" :key="i" :src="item.image" fade style="height:auto;" contain>
          <v-img :src="item.src" contain class="pa-5"></v-img>

          <v-container fluid fill-height pb-0 ma-0 pa-0 px-0 mx-0>
            <v-layout fill-height align-end pb-0 mb-0>
              <v-row no-gutters>
                <v-col cols="12" sm="12" md="12" lg="12" xs="12">
                  <v-card class="pa-2 pb-3" height="150" color="rgba(0, 0, 0, 0.7)" >

                    <v-card-text class="pa-0 center--text mt-2" >
                      <p class="text-capitalize white--text font-weight-light" style="font-size:22px;">
                        {{item.title}}
                      </p>
                      <p class="text-capitalize white--text font-weight-light" style="font-size:16.5px !important; padding-left:300px !important;padding-right:300px !important;">{{item.description}}</p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-layout>
          </v-container>
        </v-carousel-item>
      </v-carousel>
      <v-carousel height="500" cycle hide-delimiters show-arrows-on-hover interval="10000" :value="carouselValue" class="image-filters hidden-md-and-up">
        <v-carousel-item v-for="(item,i) in items['master_list']" :key="i" :src="item.image" fade style="height:500;" contain>
          <v-img :src="item.src" contain ></v-img>

          <v-container fluid fill-height pb-0 ma-0 pa-0 px-0 mx-0>
            <v-layout fill-height align-end pb-0 mb-0>
              <v-row no-gutters>
                <v-col cols="12" sm="12" md="12" lg="12" xs="12">
                  <v-card class="pa-2" height="150" color="rgba(0, 0, 0, 0.7)" >

                    <v-card-text class="pa-0" >
                      <p class="text-capitalize white--text font-weight-light" style="font-size:20px;">
                        {{item.title}}
                      </p>
                      <p class="text-capitalize body-2 white--text font-weight-light" style="font-size:14px !important;">{{item.description}}</p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-layout>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-col>

  </v-row>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  data() {
    return {
      carouselValue:0

    }
  },
  computed: {
    ...mapGetters("main", {
      "galleryList": "GET_GALLERY_LIST",
      items: 'GET_HOME_DATA',
    }),

  },
  methods: {
    jumpTo(index) {
      this.carouselValue = index;
      console.log(this.carouselValue)
    }
  }
}
</script>

<style media="screen">
  .bg-c{
    background-color: #537895;
    background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
  }
  .image-filter{
    filter: grayscale(100%);
  }
  .v-image__image{
 background-size:100% 100%;
}
</style>
