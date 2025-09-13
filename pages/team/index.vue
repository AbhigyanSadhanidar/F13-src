<template>
  <div>
    <p v-if="$fetchState.pending">Fetching data...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
      <v-card class="elevation-0 transparent"  v-else>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8">
                <v-card class="elevation-0 mb-5 mt-5 " tile>
                    <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
                        Team
                    </v-card-title>
                    <v-container fluid>
                      <v-row align="center" justify="center">
                          <v-col cols="12" sm="12" md="3" xl="3" v-for="item in data" :key="item.id">
                              <team-card :item="item" />
                          </v-col>
                      </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
      </v-card>
  </div>
</template>
<script>
export default {
  name: "",
  layout:"general",
  head: {
    titleTemplate: 'Social Responsibility Council - Team',
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
  fetchOnServer: true,
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= (Date.now() - 30000)) {
      this.$fetch()
    }
  },
  async fetch() {
    this.data = await fetch(`https://api.srcouncil.in/common/team/`,{'headers':{"X-API-KEY":"T0uf0wOD.FNxBVbSAFWx8z5TY6NaU38J36OzEobeJ"}})
      .then((res) => res.json())

    //console.log(this.posts)
    //this.$store.commit("main/SET_HOME_DATA", this.posts)

  },
  data: () => ({
    data:[]
  })
}
</script>
<style lang="css" scoped>

</style>
