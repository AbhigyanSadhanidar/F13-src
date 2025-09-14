<template>
  <div>
    <v-row align="center" justify="center" class="mb-5 mt-5">
      <v-col cols="8">
        <v-card class="elevation-0 pa-2">
          <v-card-title class="font-weight-medium orange--text justify-center">
            Advisory Board
          </v-card-title>
          <v-row>
              <v-col cols="12" sm="12" md="4" xs="12" xl="3" v-for="item in memberList" :key="item.key">
                <member-card :member='item' :showDialog="showDialog" />
              </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <member-dialog :dialog="dialog" v-if="dialog == true" :hideDialog="hideDialog" :data="dialogData"/>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "",
  layout:"general",
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
  data: () => ({
    dialog:false,
    dialogData:null,
  }),
  computed: {
    ...mapGetters('members', { memberList: 'GET_MEMBER_LIST',dialogD:'GET_DIALOG_STATE' }),
  },
  methods: {
    showDialog(data) {
      this.dialog = true
      this.dialogData = data
    },
    hideDialog() {
      this.dialog = false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
