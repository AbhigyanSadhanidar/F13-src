<template>
  <div>
    <v-card>
        <v-card-title>
            Upcoming Events
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12" md="4" v-for="(item,i) in items['upcoming_activity']" :key="i">
                <v-card height="230">
                    <v-img :src="item.image" height="60%"></v-img>
                        <!-- <v-row>
                            <v-col cols="12" class="pb-0 mb-0">
                                <p v-html="$moment(item.date).format('MMM')"></p>
                            </v-col>
                            <v-col cols="12" class="pt-0 mt-0">
                                <p v-html="$moment(item.date).format('Do')"></p>
                            </v-col>
                        </v-row> -->
                        <v-card-text>
                          <v-row dense>
                              <v-col cols="12" class="">
                                  <p v-html="$moment(item.date).format('MMM')"></p>
                                  <p v-html="$moment(item.date).format('Do')"></p>
                              </v-col>
                              <!-- <v-col cols="12" class="px-0 ma-0 pa-0 mx-0 text-xl">
                                  <p v-html="$moment(item.date).format('Do')"></p>
                              </v-col> -->
                          </v-row>
                        </v-card-text>
                </v-card>
            </v-col>
          </v-row>
        </v-card-text>
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
    ...mapGetters('main', {
      items: 'GET_HOME_DATA',
    }),
  },
}
</script>
<style lang="scss" scoped>
</style>
