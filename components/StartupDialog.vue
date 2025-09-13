<template>
  <div>


    <v-row justify="start">


    <v-dialog
      v-model="dialog"
      persistent
      max-width="500"
    >
    <div style="position: relative; width: 20px; height: 30px;">
    <v-btn
      top
      left

      class="transparent"
      @click.stop="mainDialog()"
    >
      <v-icon color="white">
        mdi-close
      </v-icon>
    </v-btn>
  </div>
    <v-card :img="require('~/static/seesummit.jpg')" height="500px" width="500px" class="transparent">

    </v-card>
    </v-dialog>
  </v-row>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "",
  //props:{dialog:{type:Boolean,required:true}},
  data: () => ({
    //dialog:true,

  }),
  computed: {
    ...mapGetters('main', {

      dialog:"GET_MAIN_DIALOG"
    }),
  },
  methods: {
    mainDialog(){
      this.$store.commit('main/SET_MAIN_DIALOG')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
