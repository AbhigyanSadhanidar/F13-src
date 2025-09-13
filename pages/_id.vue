<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="8">
        <v-card class="elevation-0 mt-4">

          <v-card-text v-html="data.content" class="font-weight-medium text">

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
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
    this.data = await fetch(`https://api.srcouncil.in/common/legal/${this.$route.params.id}`,{'headers':{"X-API-KEY":"T0uf0wOD.FNxBVbSAFWx8z5TY6NaU38J36OzEobeJ"}})
                     .then((res) => res.json())


  },
  data: () => ({
    data:{}
  })
}
</script>
<style lang="scss" scoped>
</style>
