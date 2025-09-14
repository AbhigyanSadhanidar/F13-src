<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="8" xs="12" lg="8" xl="8">
        <v-card class="mt-5" height="90vh">
          <v-card-title class="justify-center font-weight-medium headline text-uppercase textColor--text">
            {{item.name}}
          </v-card-title>

          <iframe :src="item.url" height="90%" width="100%"></iframe>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "",

  data: () => ({

  }),

  computed:{
    ...mapGetters("ventures",{'item':"GET_SELECTED_VENTURES"})
  }
}
</script>
<style media="screen">
.toolbar {
  display: none !important; /* hide PDF viewer toolbar */
}
#outerContainer #mainContainer #viewerContainer {
  top: 0 !important; /* move doc up into empty bar space */
}
</style>
