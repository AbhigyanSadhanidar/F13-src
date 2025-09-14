<template>
<v-row justify="center" align="center" class="mt-5 mb-5">
  <v-col cols="12" sm="8" md="6">
    <div class="text-center">

    </div>
    <v-card >


      <img src="../static/se2021.png" alt="" height="400px" width="100%">

      <v-card-title  class="headline justify-center text-center">
        <p>Get Your Participation Certificate</p>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" :counter="50" :rules="nameRules" label="Name" required></v-text-field>

          <v-text-field v-model="email" :rules="emailRules"  label="E-mail" required></v-text-field>

          <v-text-field v-model="contact" :counter="10" :rules="mobileRules" label="Contact Number" required></v-text-field>

          <v-select v-model="occupation" :items="items" :rules="[v => !!v || 'Item is required']" label="Occupation" required></v-select>

        </v-form>
      </v-card-text>
      <v-card-actions >
        <v-row align="center" justify="center" class="pb-3">
            <v-btn :disabled="!valid" color="secondary" class="mr-4" @click="validate" :loading="progress">
              Submit
            </v-btn>
        </v-row>


      </v-card-actions>
    </v-card>
  </v-col>
  <AlertComponent :alert="snackbar" :message="message" :color="snackbarColor" />
</v-row>
</template>

<script>
import AlertComponent from '~/components/AlertComponent.vue'

  export default {
    data: () => ({
      valid: true,
      name: '',
      contact:'',
      occupation:null,
      progress:false,
      snackbar: false,
      message: '',
      snackbarColor: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],
      mobileRules: [
        v => !!v || 'Contact Number is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      items: [
        'Student',
        'Service',
        'Business',
        'Other',
      ],

    }),

    methods: {
      validate () {
        if(this.$refs.form.validate()){
          this.updateProfile()
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      // updateProfile() {
      //   this.progress = true
      //   //this.snackbar = false;
      //   this.$axios
      //     .post('https://api.srcouncil.in/recipient/creates/', {
      //       name: this.name,
      //       email: this.email,
      //       contact: this.contact,
      //       occupation:this.occupation,
      //     }).then((result) => {
      //       return this.$router.push(`/success/${this.email}/`)
      //     }).catch((error) => {
      //       console.log(error.response)
      //       this.progress = false
      //       this.updateProfileProgress = false
      //       this.snackbarColor = 'error'
      //       this.snackbar = true
      //       this.message = 'unable to update your profile'
      //       // this.snackbarColor = 'error'
      //       // this.snackbar = true
      //       // this.message = 'unable to update your profile'
      //     })
      // },
    },
  }
</script>
