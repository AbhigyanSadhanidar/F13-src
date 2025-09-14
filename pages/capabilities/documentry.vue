<template>

  <div>
    <v-img :src="require('~/static/cap/doc.jpg')" height="50vh" style="filter: alpha(opacity=90);" class="image-filter">
    </v-img>
    <v-row>
      <v-col cols="12" sm="12" md="12" >
        <documentry style="margin-top:-160px !important;" class="mb-5"/>
      </v-col>


    </v-row>
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
<style lang="css" >
.v-image__image{
background-size:100% 100%;
}

.image-filter {
  -webkit-filter: grayscale(100%) !important;
  filter: grayscale(100%) !important;
}
</style>
