<template>
<div>

  <v-snackbar
      :timeout="2000"
      :value="alert"
      class="text-center"
      centered
      top
      :color="color"
    >
      {{message}}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="alert = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

</div>
</template>
<script>

export default {
  props: {
    message: {
      type: String,
      required: true
    },
    alert: {
      type: Boolean,
      default:false,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
}
</script>
