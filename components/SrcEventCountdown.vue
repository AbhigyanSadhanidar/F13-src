<template>
  <div>
      <v-container fluid class="pb-0">
        <v-row align="center" justify="center" class="pb-0">
          <v-col cols="12" sm="12">
            <v-card height="auto" width="100%" class="elevation-0 pb-0">
              <img src="../static/se2021.png" alt="" height="100px" width="auto">

              <v-card-title class="justify-center">
                Be Part Of Us!
              </v-card-title>
              <v-card-text class="text--center">

                <v-btn  color="secondary" :href="link" target="_blank">Join</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>
<script>
import FlipCountdown from 'vue2-flip-countdown'
export default {
  name: "",
  data: () => ({
      link:"https://us02web.zoom.us/j/82655393740",
      showTimer:false
  }),
  components: { FlipCountdown },
  methods: {
    timeElapsedHandler() {
      this.showTimer = false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
