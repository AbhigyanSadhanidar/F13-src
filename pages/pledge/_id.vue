<template>
  <div>
    <p v-if="$fetchState.pending">Fetching data...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <v-row v-else align="center" justify="center">
        <v-col cols="12" sm="12" md="8" xl="8" lg="8">
            <pledge-detail :pledge="pledge" />
        </v-col>
    </v-row>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "",
  layout:"general",
  watch: {
    '$route.query': '$fetch'
  },
  fetchOnServer: false,
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= (Date.now() - 10000)) {
      this.$fetch()
    }
  },

  async fetch() {
    console.log(this.$route)
    // Load static data instead of API call - using first pledge as example
    const pledgeData = []
    this.pledge = pledgeData.latest_pledge[0] || {}


  },
  data: () => ({
    pledge:{}
  })
}
</script>
<style lang="scss" scoped>
</style>
