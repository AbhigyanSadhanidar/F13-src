<template>
  <div>
    <v-card height="auto">
      <v-carousel
      height="auto"
      cycle
       show-arrows-on-hover
      >
       <v-carousel-item
         v-for="(item,i) in items['banner']"
         :key="i"
         :src="item.image"

       ></v-carousel-item>
     </v-carousel>
    </v-card>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "",
  data: () => ({

  }),
  computed: {
    ...mapGetters('main', {items: 'GET_HOME_DATA',}),
  },
}
</script>
<style lang="scss" scoped>
</style>
