<template>
<div>
    <v-row>
      <!-- <v-col cols="12" md="4" sm="12" v-for="(item,i) in items['twitter_data']" :key="i">
            {{item.twitter_id}}

          </v-col> -->
      <v-col cols="12" md="4" sm="12" xs="12" v-for="(item,index) in items.twitter_data" :key="index">
        <twitter-card :item="item"/>
      </v-col>
    </v-row>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: "",
  data: () => ({
    count: 3
  }),
  computed: {
    ...mapGetters('main', {
      items: 'GET_HOME_DATA',
    }),
  },

}
</script>
<style scoped>
</style>
