<template>
  <div>
    <!-- <PrimaryAppBar/> -->
    <!-- <v-img :src="require('/static/master-splash.jpg')" height="100vh" style="filter: alpha(opacity=60);"> -->
    <v-img :src="items.master_data.image" height="100vh" style="filter: alpha(opacity=90);" class="hidden-md-and-down">


      <v-container fluid fill-height >
        <v-row align="center" justify="space-between">
          <!-- <v-col cols="12" sm="12" md="12" >
            <span class="my-span">
                    Info
                  </span>
          </v-col> -->

          <v-col cols="4">
        <v-card
          class="pl-5 ml-5 mb-5 pb-5 transparent hidden-md-and-down"
          outlined

          tile
        >
        <!-- <v-card-title class="headline text-h3 justify-left">
            {{items.master_data.title}}
        </v-card-title> -->
        <v-card-text class="text-left text-h5 white--text font-weight-bold">
          <p class="headline text-h3 justify-left white--text">{{items.master_data.title}}</p>
            {{items.master_data.description}}
        </v-card-text>
        </v-card>
      </v-col>
        </v-row>
      </v-container>
    </v-img>

    <v-img :src="items.master_data.image"  class="hidden-sm-and-up">
      <v-container fluid fill-height style="opacity: 0.5;">
        <v-row align="center" justify="space-between">
          <!-- <v-col cols="12" sm="12" md="12" >
            <span class="my-span">
                    Info
                  </span>
          </v-col> -->

          <v-col cols="4">
        <v-card
          class="pl-5 ml-5 mb-5 pb-5 transparent hidden-md-and-down"
          outlined
          tile
        >
        <!-- <v-card-title class="headline text-h3 justify-left">
            {{items.master_data.title}}
        </v-card-title> -->
        <v-card-text class="text-left text-h5">
          <p class="headline text-h3 justify-left">{{items.master_data.title}}</p>
            {{items.master_data.description}}
        </v-card-text>
        </v-card>
      </v-col>
        </v-row>
      </v-container>
      </v-img>

  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "",
  data: () => ({

  }),
  computed: {
    ...mapGetters('main', {
      items: 'GET_HOME_DATA',
    }),
  },
}
</script>
<style lang="css" scoped>
.my-span {
  background-color: blue;
  color: white;
  font-weight: bold;

  float: right;
}

.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
