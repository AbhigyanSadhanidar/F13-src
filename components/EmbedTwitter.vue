<template>
<div>
  <v-card class=" rounded-lg" height="350">

    <a  v-if="$vuetify.theme.dark == true" class="twitter-timeline" data-height="350" data-theme="light" href="https://twitter.com/Srcdelhi?ref_src=twsrc%5Etfw">Tweets by SrCouncil</a>

    <a  v-else class="twitter-timeline" data-height="350" data-theme="dark" href="https://twitter.com/Srcdelhi?ref_src=twsrc%5Etfw">Tweets by SrCouncil</a>

  </v-card>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  }),
  created() {
    //do something after creating vue instance
    //console.log("I am running")
    let twitterFeed = document.createElement("script");
    twitterFeed.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.head.appendChild(twitterFeed);
  }
}
</script>
<style lang="css" scoped>
.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
