<template>
  <div>
    <v-card


    width="400">



    <v-card-title>
      <v-icon
        large
        left
        color="primary"
      >
        mdi-twitter
      </v-icon>
      <span class="text-h6 font-weight-medium textColor--text">{{item.data.user.name}}</span>
    </v-card-title>

    <v-card-text class="text-body  font-weight-bold">
      {{item.data.text}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3" >
          <v-img
            class="elevation-6"
            alt=""

            :src="item.data.user.profile_image_url"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">{{item.data.user.screen_name}}</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1" color="red">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2 font-weight-medium">{{item.data.user.favourites_count}}</span>


        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
  </div>
</template>
<script>
export default {
  name: "",
  props:{item:{type:Object,required:true}},
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
