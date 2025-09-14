<template>
    <div class="mb-4">
        <v-card @click="showImage">
        <!-- <v-card-title class="justify-center textColor--text">
            {{title}}
        </v-card-title> -->

        <v-carousel
            height="600"
            cycle
            show-arrows-on-hover
        >
    <v-carousel-item
      v-for="(item,i) in parseInt(length)"
      :key="i"
      :src="require(`~/static/letters/${path}/${i}.jpg`)"
      contain

    ></v-carousel-item>
        </v-carousel>

    </v-card>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    title: { type: String, required: true },
    path: { type: String,required: true},
    length: { type: Number, required: true },
    actual: { type: Number, required: true }
  },
  name: '',
  data() {
    return {
      show:false,
      images: [
          "https://picsum.photos/200/200",
          "https://picsum.photos/300/200",
          "https://picsum.photos/250/200"
        ]
    }
  },
  computed: {
    ...mapGetters('main', { timelineList: 'GET_TIMELINE_LIST' }),
  },
  methods:{
    createArray(){
      let arr = []
      for(let i=0;i<parseInt(this.actual);i++){
        arr.push(`http://localhost:3000/_nuxt/static/letters/${this.path}/${i}.jpg`)
      }
      return arr;
    },
    showImage() {

        var d = this.createArray();
        //console.log(d);
        this.$viewerApi({
          images: d,
        })
      },
  }
}
</script>
