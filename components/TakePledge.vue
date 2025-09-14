<template>
<div>
  <v-dialog
      v-model="dialog"
      width="500"
    >
  <v-card class="elevation-0 pa-2 py-2">
    <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
      Take Pledge
    </v-card-title>
    <v-divider></v-divider>

    <v-card-text class="font-weight-medium body-2 text-center" style="font-size:20px !important; line-height: 1.5 !important;">

      <vue-typer :repeat="0" :text=item.description  :type-delay='10' @completed='onComplete' :erase-on-complete='false' caret-animation='blink'></vue-typer>
    </v-card-text>

    <v-card-action class="justify-center text-center">
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-btn outlined :disabled="disable" @click="onAction" :loading="loading">
            I Pledge
          </v-btn>
        </v-row>
        </v-col>
    </v-card-action>
  </v-card>
  </v-dialog>
</div>
</template>
<script>
export default {
  name: "",
  props: {
    item: {
      type: Object,
      required: true
    },
    onAction:{
      type:Function,
      required:true
    },
    dialog:{
      type:Boolean,
      required:true,
      default:false
    },
    loading:{
      type:Boolean,
      required:true,
      default:false
    }
  },
  data: () => ({
    disable: true
  }),
  methods: {
    onComplete() {
      this.disable=false
      console.log("ghghghgh")
    }
  }
}
</script>
<style media="screen">
/* @keyframes rocking {
  0%,100% {transform: rotateZ(-10deg);},
  50%     {transform: rotateZ(10deg);}
}


.vue-typer .custom.char.typed {
  color: #009688;
}
.vue-typer .custom.char.selected {
  color: #E91E63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: #009688;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #E91E63;
} */
</style>
