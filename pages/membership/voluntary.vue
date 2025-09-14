<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="6" xl="6" class="mt-5 mb-5">
          <v-card class="mt-5 mb-5 ">
              <v-card-title class="headline font-weight-bold textColor--text justify-center">
                  Voluntary Form
              </v-card-title>
              <v-divider/>

              <v-card-text>
                  <voluntary-form/>
              </v-card-text>
          </v-card>
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
<style lang="scss" scoped>
</style>
