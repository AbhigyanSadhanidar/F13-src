<template>
  <div>
    <v-card outlined class="elevation-0 pa-2">
      <v-card-title  class="orange--text font-weight-bold text-h5 justify-center">Gallery</v-card-title>
      <v-row>

      <v-col
        v-viewer="options"
        v-for="(item,i) in items['banner']"
        :key="i"
        class="d-flex child-flex images"
        cols="12"
        md="3"
        lg="3"
        xl="2"
        sm="12"
      >
        <v-card @click="showImage(i)" class="elevation-0">
          <v-img

            :src="item.image"
            :lazy-src="item.image"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    </v-card>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
  export default {
    data () {
      return {

      }
    },
    computed: {
        ...mapGetters('main', {items: 'GET_HOME_DATA',}),
    },
    methods: {
      createArray() {
        let arr = []
        for (var k in this.items['banner']) {
          arr.push(this.items["banner"][k].image)
          //console.log(k, result[k]);
        }
        return arr;
      },
      showImage(index) {

        var d = this.createArray();
        //console.log(d);
        this.$viewerApi({
          images: d,
          options: {
            toolbar: true,
            initialViewIndex: index
          },
          //poition:1
        })
        console.log(this.$viewer)
      },
    }
  }
</script>

<style lang="scss" scoped>
</style>
