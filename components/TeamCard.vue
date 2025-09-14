<template>
  <div>
    <v-card class="pb-0 pt-0 mb-0 mt-0 elevation-0 hidden-sm-and-down" outlined  :width="$vuetify.breakpoint.sm ? '100%' : '300'" >
      <v-img :src="item.image.full_size" height="300"  width="300" contain class=""></v-img>
      <v-card-title class="justify-center font-weight-bold headline text-uppercase textColor--text">
          {{item.name}}
      </v-card-title>

      <v-card-subtitle class="justify-center text-center font-weight-medium body-2">{{item.department.label}}</v-card-subtitle>
    </v-card>
    <v-card class="pb-0 pt-0 mb-0 mt-0 elevation-0 hidden-md-and-up" outlined  width="100%" >
      <v-img :src="item.image.full_size" height="300"  width="100%" contain class=""></v-img>
      <v-card-title class="justify-center font-weight-bold headline text-uppercase textColor--text">
          {{item.name}}
      </v-card-title>

      <v-card-subtitle class="justify-center text-center font-weight-medium body-2">{{item.department.label}}</v-card-subtitle>
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
<style media="screen" >
.image-filter {
  -webkit-filter: grayscale(100%) !important;
  filter: grayscale(100%) !important;
}


</style>
