<template>
    <div>
      <v-container fluid class="pa-0 ma-0">
        <v-row>
            <v-col cols="12">
              <v-card height="300" :img="require('/static/master-splash.jpg')">
                <v-overlay
  
                  absolute
                  color="#036358"
                >
                  <h1>About SRC</h1>
                </v-overlay>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
                <v-card class="elevation-0 rounded-lg mb-4">
                  <BackButton/>
                    <!-- <v-card-title class="justify-center headline ">About Us</v-card-title>
                    <v-divider></v-divider> -->
                    <v-row>
  
                      <v-col cols="12" md="6">
                        <v-card class="rounded-lg elevation-0 px-10">
                          <v-card-title class="justify-left darkblue--text font-weight-bold headline">About Us</v-card-title>
                          <v-card-text class="justify-left darkblue--text font-weight-light title">
                                At SRC, we are dedicated to advancing sustainability and responsibility across industries, governments, and communities—both in India and globally. As a trusted advocate and thought leader, we guide organizations in adopting sustainable practices that drive long-term environmental stewardship, social responsibility, and economic growth. We believe in the power of knowledge and collective action to address the pressing challenges of today and build a world where people, planet, and prosperity coexist in harmony.
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <v-col cols="12" md="3" sm="12">
                      </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
  
  
      </v-container>
    </div>
  </template>
  <script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    name: "",
    data: () => ({
  
    })
  }
  </script>
  <style lang="css" scoped>
  
  .t {
  
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 10px;
  letter-spacing: .5px;
  color:black;
  }
  
  </style>
  