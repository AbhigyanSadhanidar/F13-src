<template>


  <div>
    <v-img :src="require('~/static/cap/esg.jpg')" height="60vh"  style="filter: alpha(opacity=90);" >
    </v-img>
    <v-row>
      <v-col cols="12" sm="12" md="12" >
        <esg style="margin-top:-160px !important;" class="mb-5"/>
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
<style media="screen" scoped>
.v-image__image{
background-size:100% 100%;
}

.v-image{
width:100% !important;
}
</style>
