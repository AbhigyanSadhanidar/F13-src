<template>
  <div>
    <v-row align="center" justify="center">
      <v-col :cols="$vuetify.breakpoint.sm ? '12' : '8'">
        <v-card class="elevation-1 ma-5" shaped>
          <v-card-title class="justify-center font-weight-bold textColor--text text-h4">Media Advocacy</v-card-title>
          <v-row>


            <v-col cols="12" sm="12" md="12" xl="12">
              <v-card class="elevation-0">


                  <v-card-text class="font-weight-medium body-1 text-center" style="font-size:20px !important; line-height: 1.5 !important;">
Using all kinds of medium – electronic, print, social media – to help promote the objectives or goals of an organization or a company is what we do most effectively as the facilitator of Media Advocacy. The challenge may be forming perception, building positive opinion, mitigating negative publicity etc. in the community…with our communication strategy, we motivate community members and policy makers to get involved.

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
