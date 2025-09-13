<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-card class="elevation-0 ma-4">
          <v-card-title class="orange--text justify-center font-weight-bold">Founder</v-card-title>
          <divider></divider>
          <v-row>
            <v-col cols="12" sm="12" md="6" xl="6">
              <v-card tile class="elevation-0">
                <v-img :src="require(`~/static/member/1.jpg`)" contain height="600">

                </v-img>
              </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="6" xl="6">
              <v-card class="elevation-0" >
                  <v-card-title class="font-weight-bold">
                      Mr. Arun Khurana
                  </v-card-title>
                  <v-card-subtitle class="font-weight-medium">
                      Founder
                  </v-card-subtitle>

                  <v-card-text class="font-weight-medium body-1">
                    Choose the right path without worrying about the result or the effort.
                    Create values for social and national exigencies. Analyze mistakes in pursuit of excellence.
                    Mr. Arun Khurana, the Founder Director of SRC, is a social scientist and activist of high acclaim.
                    He is also a media mogul. In addition to SRC, he is at the helm of two commercially successful companies as their Director.
                    These companies are Degree 360 Solutions Private Limited and Degree 360 Software Private Limited
                  </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "",
  layout:"general",
  head: {
    titleTemplate: 'Social Responsibility Council - Leadership',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: 'Meta description'
      }
    ]
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
