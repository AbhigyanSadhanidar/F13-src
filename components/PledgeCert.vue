<template>
<div>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="12" md="8">
      <v-card class="mt-1 mb-5 elevation-0">

          <!-- <img src="http://127.0.0.1:8000/media/certificate/OSMLTLNOWLEM.jpg" alt="" height="500" width="100%"> -->


                  <v-img :src="item.certificate" height="500"  contain class=" printed-div" @click="downloadWithAxios"></v-img>





          <!-- <v-img src="http://127.0.0.1:8000/media/certificate/OSMLTLNOWLEM.jpg" height="500" width="100%" contain class="mt-1 mb-5 printed-div"></v-img> -->

        <v-card-action>
          <v-container fluid fill-height class="mt-2">
            <v-row align="center" justify="center">
              <v-btn outlined color="primary" class="mr-1" @click="downloadWithAxios">
                Download
              </v-btn>
              <v-btn outlined color="primary" to="/">
                Go To Home
              </v-btn>
            </v-row>
          </v-container>
        </v-card-action>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "",
  //props: {item:{type:Object,required:true}},
  data: () => ({

  }),
  computed: {
    ...mapGetters('pledge', {
      item: 'GET_CERT_DATA',

    }),
  },
  methods: {
    printCert() {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    },
    forceFileDownload(response) {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${this.item.uid}.jpg`) //or any other extension
      document.body.appendChild(link)
      link.click()
    },
    downloadWithAxios() {
      //window.location.href = this.item.certificate;
      window.open(this.item.certificate, '_blank');
      // this.$axios({
      //     method: 'get',
      //     url: this.item.certificate,
      //     responseType: 'arraybuffer'
      //   })
      //   .then(response => {
      //
      //     this.forceFileDownload(response)
      //
      //   })
      //   .catch((error) => console.log(error))
    }
  }
}
</script>
<style media="screen">
@media print {
  printed-div {
    display: block;
  }

  /* .logo-print{
       width:100%;
       height:100%;
       display: list-item;

   } */
}
</style>
