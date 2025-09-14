<template>
  <div>
    <v-alert
      outlined
      type="success"
      text
    >
      <h3>THANK YOU FOR YOUR PARTICIPATION</h3>
      We have sent an email at <b>{{$route.params.id}}</b> attached your Participation Certificate, Event Brochure and Statement of Oath.
    </v-alert>
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
