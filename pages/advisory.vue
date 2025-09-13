<template>
<div>
  <src-loader v-if="$fetchState.pending" />
  <p v-else-if="$fetchState.error">An error occurred :(</p>
    <v-row v-else align="center" justify="center" class="mt-5 mb-5">
      <v-col  cols="12" sm="12" md="8" lg="8" xl="8" >
        <v-card class="elevation-0 transparent">
          <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
            Advisory
          </v-card-title>
          <v-tabs
            color="textColor"
            grow
            show-arrows
          >
            <v-tab v-for="(item,index) in items" :key="index">{{item.label}}</v-tab>

            <v-tab-item

              v-for="(item,index) in items"
              :key="index"
            >
              <v-container fluid>
                <v-row v-if="item['am_ac'].length > 0">
                  <v-col
                    v-for="i in item['am_ac']"
                    :key="i"
                    cols="12"
                    md="4">
                    <member-card :member='i' :showDialog="showDialog" />
                  </v-col>


                </v-row>
                <v-row v-else>

                  <v-col
                    cols="12"
                    md="12"

                  >
                    <v-card class="mt-5 elevation-0">
                      <v-card-title class="justify-center red--text text-h6">
                        Coming Soon
                      </v-card-title>
                    </v-card>
                  </v-col>
                </v-row>

              </v-container>
            </v-tab-item>
          </v-tabs>
          <member-dialog :dialog="dialog" v-if="dialog == true" :hideDialog="hideDialog" :data="dialogData"/>
          <!-- <v-col>
              <v-container fluid>
                <v-row>
                    <v-col cols="12" sm="12" md="4" xs="12" xl="4" v-for="item in internalData" :key="item.key">
                      <member-card :member='item' :showDialog="showDialog" />
                    </v-col>
                </v-row>
                  <member-dialog :dialog="dialog" v-if="dialog == true" :hideDialog="hideDialog" :data="dialogData"/>
              </v-container>
            </v-col> -->





        </v-card>
      </v-col>
    </v-row>

</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: "",
  head: {
    titleTemplate: 'Social Responsibility Council - Members',
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
    // this.posts = await fetch(`http://127.0.0.1:8000/home/dashboard/`)
    //   .then((res) => res.json())

    this.items = await fetch(`https://api.srcouncil.in/advisory/category/`,{'headers':{"X-API-KEY":"T0uf0wOD.FNxBVbSAFWx8z5TY6NaU38J36OzEobeJ"}})
      .then((res) => res.json())

    //console.log(this.posts)


  },
  data: () => ({
    dialog: false,
    tab: null,
    dialogData: null,
    internalData: null,
    items: []
  }),
  computed: {
    ...mapGetters('members', {
      memberList: 'GET_MEMBER_LIST',
      dialogD: 'GET_DIALOG_STATE'
    }),
  },
  methods: {
    showDialog(data) {
      this.dialog = true
      this.dialogData = data
    },
    setInternalData(obj) {
      this.internalData = obj
    },
    hideDialog() {
      this.dialog = false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
