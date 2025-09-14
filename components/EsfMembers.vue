<template>
<div>
  <v-card class="ma-5">
    <v-img :src="require('~/static/istockphoto-1220486867-612x612.jpg')" height="40%"></v-img>

    <!-- {{pledge}} -->

    <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
      Efs Pledge
    </v-card-title>
    <v-card-subtitle>

    </v-card-subtitle>

    <!-- <v-card-text v-html="pledge.description"></v-card-text> -->

    <v-card-action>
      <v-container>

        <v-row justify="center">
          <v-expansion-panels accordion>
            <v-expansion-panel class="elevation-0">
              <v-expansion-panel-header class="elevation-0 blue--text font-weight-medium">Take Pledge</v-expansion-panel-header>
              <v-expansion-panel-content class="elevation-0 pa-0 ma-0 px-0 mx-0 my-0 py-0">
                <!-- <pledge-register :pledgeId="pledge.id" /> -->
                <v-stepper v-model="e1" class="pa-0 ma-0 px-0 mx-0 my-0 py-0">
                  <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">
                      Fill the form
                    </v-stepper-step>


                    <v-divider></v-divider>

                    <v-stepper-step step="2">
                      Verification
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="3">
                      Download Certificate
                    </v-stepper-step>
                  </v-stepper-header>

                  <v-stepper-items>
                    <v-stepper-content step="1">
                      <v-card class="mb-0" color="grey lighten-1" ></v-card>
                      <EfsPledgeRegister/>

                    </v-stepper-content>


                    <v-stepper-content step="2">
                      <PledgeVerify/>


                    </v-stepper-content>
                    <v-stepper-content step="3">
                      <PledgeCert/>


                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel class="elevation-0">
              <v-expansion-panel-header class="elevation-0 blue--text font-weight-medium">Get Certificate</v-expansion-panel-header>
              <v-expansion-panel-content class="elevation-0">

                <v-stepper v-model="e2" class="pa-0 ma-0 px-0 mx-0 my-0 py-0">
                  <v-stepper-header>
                    <v-stepper-step :complete="e2 > 1" step="1">
                      Enter Email
                    </v-stepper-step>



                    <v-divider></v-divider>

                    <v-stepper-step step="2">
                      Verification
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="3">
                      Download Certificate
                    </v-stepper-step>
                  </v-stepper-header>

                  <v-stepper-items>
                    <v-stepper-content step="1">
                      <v-card class="mb-0" color="grey lighten-1" ></v-card>
                      <!-- <get-certificate :pledgeId="pledge.id" /> -->

                    </v-stepper-content>



                    <v-stepper-content step="2">
                      <GetVerify/>


                    </v-stepper-content>
                    <v-stepper-content step="3">
                      <PledgeCert/>


                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
    </v-card-action>
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
    ...mapGetters('pledge', {
      e1: 'GET_STEPPER_DATA',
      e2: 'GET_STEPPERTWO_DATA',

    }),
  },
}
</script>
<style media="screen">
.v-expansion-panel-content__wrap{
  padding: 0 0px 0px !important;
}
</style>
