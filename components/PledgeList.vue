<template>
  <div>
    <v-card  class="mt-5 mb-5 elevation-0">
        <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
            {{title}}
        </v-card-title>
        <v-row class="pl-3 pb-2">
          <v-col cols="12" sm="12" md="4" v-for="(item,i) in latestPledge" :key="i" v-if="latestPledge.length > 0">
              <v-card height="" outlined @click="$router.push(`/pledge/${item.slug}`)">
                  <v-img :src="item.image['full_size']" height="150"></v-img>
                  <v-card-title class="textColor--text font-weight-bold">
                      {{item.title}}
                  </v-card-title>
                  <v-card-action >
                      <v-container fluid fill height>
                          <v-row align="center" justify="center" class="pb-4">
                              <v-btn outlined link color="primary" >Take Pledge</v-btn>
                          </v-row>
                      </v-container>
                  </v-card-action>
              </v-card>
          </v-col>
          <v-container fluid v-else fill-height>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="12" md="12">
                <v-card tile class="elevation-0">
                  <v-card-text class="text-center red--text body-1">
                    No Pledge Available
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "",

  props:{latestPledge: {type: Object,required: true},title:{type:String,required:true}},
  data: () => ({

  })
}
</script>
<style lang="css" scoped>
.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
