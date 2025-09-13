<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="6" xl="6" class="mt-5 mb-5">
          <v-card>
              <v-card-title class="headline font-weight-bold justify-center textColor--text mt-5 mb-5">
                  Internship Form
              </v-card-title>
              <v-divider/>

              <v-card-text>
                  <internship-form />
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
