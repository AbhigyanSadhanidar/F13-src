<template>
<div>
  <v-expand-x-transition>

  <v-dialog v-model="dialog" :width="$vuetify.breakpoint.xs ? '100%' : '45%'" persistent>

    <v-card >
      <v-container>
        <v-row>
            <v-col cols="12" sm="12" md="6" xs="12" xl="6">
              <!-- <v-card :img="require(`~/static/member/${data.image}`)" height="400" class="elevation-0 image-filter"> -->
                <v-card   class="elevation-0 " >
                  <v-img :src="data.image" contain height="400" class="image-filter"></v-img>
              </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="6" xs="12" xl="6">
              <v-card class="elevation-0">

                <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
                    {{data.label}}
                </v-card-title>
                <v-card-subtitle class="font-weight-bold">
                    {{data.designation}}
                </v-card-subtitle>
                <v-card-text v-html="data.description" class="font-weight-medium text-h6">

                </v-card-text>
              </v-card>
            </v-col>
        </v-row>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="hideDialog">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</v-expand-x-transition>

</div>
</template>
<script>
export default {
  name: "",
  props:{dialog:{type:Boolean,required:true},hideDialog:{type:Function,required:false},data:{type:Object,required:true}},
  data: () => ({

  }),

}
</script>
<style media="screen">
.image-filter {
  -webkit-filter: grayscale(100%) !important;
  filter: grayscale(100%) !important;
}
</style>
