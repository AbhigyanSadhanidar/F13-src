<template>
  <v-app>
    <PrimaryAppBar/>

    <v-main>
      <v-container fluid class="pa-0 ma-0 mx-0 px-0">
        <!-- <v-row align="center" justify="center"> -->
          <!-- <v-col cols="12"> -->
              <nuxt />
          <!-- </v-col> -->
        <!-- </v-row> -->
      </v-container>
    </v-main>
<master-footer/>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  created(){
    this.$store.commit("main/SET_APPBAR_COLOR","orange")
  }
}
</script>
