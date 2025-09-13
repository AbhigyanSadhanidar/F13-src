<template>
  <div>
    <v-row align="center" justify="center">
      <v-col :cols="$vuetify.breakpoint.sm ? '12' : '12'">
        <v-card class="elevation-1 ma-5" shaped>
          <v-card-title class="justify-center font-weight-bold textColor--text text-h4">Consulting / Advisory</v-card-title>
          <v-row>


            <v-col cols="12" sm="12" md="12" xl="12">
              <v-card class="elevation-0">


                  <v-card-text class="font-weight-medium body-1 text-center"  style="font-size:20px !important; line-height: 1.5 !important;">
                    CSR of various Corporates need direction. They have an honest desire to deal with challenges that concern people. Our customized and qualified consultations cover a wide range of subjects –   social in a broader sense including education, and national including environment and health. Sustainability is our focus. We have a holistic vision, and are observant of the fact that action of today shouldn’t cost humanity in the future.

                  </v-card-text>
              </v-card>
            </v-col>

            <!-- <v-col cols="12" sm="12" md="6" xl="6">
              <v-card class="elevation-0 mr-4">
                <v-img src="https://i.ibb.co/d6dw7PN/0011ff-2.png"  height="400" width="100%" >

                </v-img>
              </v-card>
            </v-col> -->


          </v-row>
          <!-- <v-card-text class="text-center">
            <v-row align="center" justify="space-between">
              <v-col cols="12" sm="12" md="4" v-for="item in 3" :key="item">
                <v-img src="https://i.ibb.co/d6dw7PN/0011ff-2.png" height="200" ></v-img>
              </v-col>
            </v-row>
          </v-card-text> -->

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
