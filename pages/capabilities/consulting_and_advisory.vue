<template>
  <div>


    <div>
      <v-img :src="require('~/static/cap/ca.jpg')" height="50vh" style="filter: alpha(opacity=90);" class="image-filter">
      </v-img>
      <v-row>
        <v-col cols="12" sm="12" md="12" >
          <consulting style="margin-top:-160px !important;" class="mb-5"/>
        </v-col>


      </v-row>
    </div>

  </div>
</template>
<script>
export default {
  name: "",
  layout:"general",
  data: () => ({

  })
}
</script>
<style media="screen">
.image-filter {
  -webkit-filter: grayscale(100%) !important;
  filter: grayscale(100%) !important;
}
</style>
