<template>
<div>
  <p v-if="$fetchState.pending">Fetching data...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <v-row align="start" justify="center" v-else>

    <v-col cols="12" sm="12" md="12" xl="12" lg="12">
      <v-card class="elevation-0 transparent">
        <v-card-title class="justify-center font-weight-bold text-h4 textColor--text">Partnership</v-card-title>

        <v-row align="center" justify="center">
          <v-col v-if="data.length > 0" v-viewer="options" class="images" style="height:250px;" cols="12" v-for="(item,index) in data" :key="index" xs="12" md="3" lg="3" xl="2">
                  <v-card :img="item.logo" height="200" shaped @click="showImage(index)"></v-card>
                </v-col>

          <v-col v-else>
            <v-container fluid fill-height>
              <v-row>
                <v-col>
                  <p>No Data Available</p>
                </v-col>
              </v-row>

          </v-container>
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
  layout: "general",
  head: {
    titleTemplate: 'Social Responsibility Council - Campaigns',
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
  fetchOnServer: false,
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= (Date.now() - 30000)) {
      this.$fetch()
    }
  },
  async fetch() {
    // Load static data instead of API call
    this.data = []
    this.length = this.data.length

    //console.log(this.data)
    //return {data}
    //this.$store.commit("main/SET_HOME_DATA", this.posts)

  },
  data: () => ({
    //data: []
  }),
  methods: {
    createArray() {
      let arr = []
      for (var k in this.data) {
        arr.push(this.data[k].logo)
        //console.log(k, result[k]);
      }
      return arr;
    },
    showImage(index) {

      var d = this.createArray();
      //console.log(d);
      this.$viewerApi({
        images: d,
        options: {
          toolbar: true,
          initialViewIndex: index
        },
        //poition:1
      })
      console.log(this.$viewer)
    },
  }
}
</script>
<style lang="css" scoped>
.images {
  height: 500px;

}
.image {
  height: 250px;
  width:250px;
  cursor: pointer;
  margin: 5px;
  display: inline-block;
}
</style>
