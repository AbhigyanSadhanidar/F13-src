<template>
  <div>
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="4">
          <v-card>
            <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
              Thank you for registering with us!
            </v-card-title>

            <v-card-text class="font-weight-medium body-2 text-center" style="font-size:20px !important; line-height: 1.5 !important;">
              An email has been sent to you with attached Participant Certificate
            </v-card-text>

            <v-card-action>
              <v-btn block outlined color="primary" to="/">Go To Home</v-btn>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
