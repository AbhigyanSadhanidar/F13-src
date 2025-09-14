<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <flip-countdown deadline="2021-12-21 07:12:00"></flip-countdown>

      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>


<script>
  import FlipCountdown from 'vue2-flip-countdown'

  export default {
    components: { FlipCountdown }
  }
</script>
