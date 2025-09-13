<template>
  <div>
    <p v-if="$fetchState.pending">Fetching data...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <v-row v-else align="center" justify="center">
        <v-col cols="12" sm="12" md="8" xl="8" >
            <pledge-list title="Latest Pledge" :latestPledge="pledgeList['latest_pledge']"/>
        </v-col>


    </v-row>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "",
  layout:"general",
  head: {
    titleTemplate: 'Social Responsibility Council - SrCouncil',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  fetchOnServer: true,
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= (Date.now() - 10000)) {
      this.$fetch()
    }
  },
  async fetch() {
    this.pledgeList = await fetch(`https://api.srcouncil.in/pledge/list/`,{'headers':{"X-API-KEY":"T0uf0wOD.FNxBVbSAFWx8z5TY6NaU38J36OzEobeJ"}})
                     .then((res) => res.json())
    //{'headers':{"X-API-KEY":"T0uf0wOD.FNxBVbSAFWx8z5TY6NaU38J36OzEobeJ"}}
    //this.$store.commit("pledge/SET_INITIAL_PLEDGE_DATA", posts)

  },
  data: () => ({
    pledgeList:{}
  })
}
</script>
<style lang="scss" scoped>
</style>
