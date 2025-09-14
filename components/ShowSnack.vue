<template>
  <div>
    <v-snackbar

      v-model="show"
      absolute
      bottom
      :color="color"
      outlined
      right
    >
      {{message}}
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: "",
  props:{color:{type:String,required:true},message:{type:String,required:true},show:{type:Boolean,required:true}},
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
