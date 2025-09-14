<template>
  <div>
    <!-- <v-card class="pb-0 pt-0 mb-0 mt-0 elevation-0 hidden-sm-and-down" outlined  :width="$vuetify.breakpoint.sm ? '100%' : '300'" height="400"> -->
      <!-- <v-img :src="item.image" height="250"  width="300" contain class="px-0 mx-0 my-0 mx-0"></v-img>
      <v-card-title class="justify-center font-weight-bold headline text-uppercase textColor--text center--text subtitle-1" style="text-align:center !important;">
          {{item.label}}
      </v-card-title>
      <v-card-subtitle class="justify-center text-center font-weight-medium" >{{item.sub_label}}</v-card-subtitle>
      <v-card-text class="justify-center text-center font-weight-medium subCardColor--text" >{{item.extra_content}}</v-card-text>


    </v-card>
    <v-card class="pb-0 pt-0 mb-0 mt-0 elevation-0 hidden-md-and-up" outlined  width="100%" >
      <v-img :src="item.image" height="250"  width="100%" contain class=""></v-img>
      <v-card-text class="justify-center font-weight-bold headline text-uppercase textColor--text text--center" style="text-align:center !important;">
          {{item.label}}
      </v-card-text>

      <v-card-subtitle class="justify-center text-center font-weight-medium body-2">{{item.sub_label}}</v-card-subtitle> -->

      <v-card
        height="auto"
        class="hidden-sm-and-down"

      >
        <div class="d-flex flex-no-wrap justify-start">
          <v-avatar
            class="ma-3"
            size="125"
            tile
          >
            <v-img :src="item.image"></v-img>
          </v-avatar>
          <div>
            <v-card-title
              class="text-h6"
              v-text="item.label"
            ></v-card-title>

            <v-card-subtitle v-text="item.extra_content"></v-card-subtitle>



          </div>


        </div>
        <v-divider/>
        <v-card-subtitle class="justify-center primary--text font-weight-bold" style="text-align:center !important;">
          {{item.sub_label}}
        </v-card-subtitle>
      </v-card>
      <v-card
        height="auto"
        class="hidden-md-and-up"

      >
        <div class="d-flex flex-no-wrap justify-start">
          <v-avatar
            class="ma-3"
            size="125"
            tile
          >
            <v-img :src="item.image"></v-img>
          </v-avatar>
          <div>
            <v-card-title
              class="text-h6"
              v-text="item.label"
            ></v-card-title>

            <v-card-subtitle v-text="item.extra_content"></v-card-subtitle>



          </div>


        </div>
        <v-divider/>
        <v-card-subtitle class="justify-center primary--text font-weight-bold" style="text-align:center !important;">
          {{item.sub_label}}
        </v-card-subtitle>
      </v-card>

    <!-- </v-card> -->
  </div>
</template>
<script>
export default {
  name: "",
  props:{item:{type:Object,required:true}},
  data: () => ({

  })
}
</script>
<style media="screen" >
.image-filter {
  -webkit-filter: grayscale(100%) !important;
  filter: grayscale(100%) !important;
}
.v-image__image{
background-size:100% 100%;
}
.v-card__text, .v-card__title {
word-break: normal; /* maybe !important  */
}
</style>
