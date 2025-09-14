<template>
  <div>
    <!-- <v-col cols="12" sm="12" md="12"> -->
        <v-card class="elevation-0">
            <v-card-title class="justify-center textColor--text font-weight-bold text-h4">Join The Conversation</v-card-title>
            <v-card-subtitle class="text-center">Check out the latest and spread the word.</v-card-subtitle>
            <v-card-text class="text-center">
              <v-btn
                v-for="item in icons"
                :key="item.key"
                class="mx-4 iconColor--text"
                icon
                :href="item.link"
                target="_blank"

              >
                <v-icon size="24px">
                  {{ item.icon }}
                </v-icon>
              </v-btn>
            </v-card-text>
            <!-- <v-card-text class="mt-2">

                <twitter-gallery/>
            </v-card-text> -->
        </v-card>
    <!-- </v-col> -->
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    icons: [
        {icon:'mdi-facebook',link:'https://www.facebook.com/socialresponsibilitycouncil/',key:1},
        {icon:'mdi-twitter',link:'https://twitter.com/Srcdelhi',key:2},
        {icon:'mdi-linkedin',link:'https://www.linkedin.com/company/social-responsibility-council',key:3},
        {icon:'mdi-instagram',link:'https://www.instagram.com/srcouncil/?hl=en',key:4},

      ],
  })
}
</script>
<style lang="scss" scoped>
</style>
