<template>
<v-row justify="center" align="center" class="mt-5 mb-5">
  <v-col cols="12" sm="8" md="6">
    <div class="text-center">

    </div>
    <v-card>


      <v-container>
        <v-row align="center" justify="center">
          <img src="../static/se2022.png" alt="" height="400px" width="90%">
        </v-row>
      </v-container>

      <v-card-title class="headline justify-center text-center">
        <p>See Summit 2022 Registration</p>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" :counter="50" :rules="nameRules" label="Name" required></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-text-field v-model="address" :rules="addressRules" label="Address" required></v-text-field>

          <v-text-field v-model="organization" :rules="ioRules" label="Institution/Organization" required></v-text-field>

          <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="date" label="Date of birth"  readonly v-bind="attrs" v-on="on" :rules="dateRules"></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>

          <v-text-field v-model="contact" :counter="10" :rules="mobileRules" label="Contact Number" required></v-text-field>

          <v-select v-model="occupation" :items="items" :rules="[v => !!v || 'Item is required']" label="Mode Preferences" required></v-select>

        </v-form>
      </v-card-text>
      <v-card-actions class="py-5">

        <v-row align="center" justify="center">
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
    modal:false,
    date:'',
    address: '',
    organization: '',
    dob: '',
    contact: '',
    occupation: null,
    progress: false,
    snackbar: false,
    message: '',
    snackbarColor: '',
    nameRules: [
      v => !!v || 'Name is required',
    ],
    dateRules: [
      v => !!v || 'Name is required',

    ],
    addressRules: [
      v => !!v || 'Address is required',
    ],
    ioRules: [
      v => !!v || 'This field is required',
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
      'Virtual',
      'Physical',

    ],

  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.updateProfile()
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    updateProfile() {
      this.progress = true
      //this.snackbar = false;
      // this.$axios
      //   .post('/static/placeholder-document.pdf', {
      //     name: this.name,
      //     email: this.email,
      //     address: this.address,
      //     institute_organization: this.organization,
      //     contact_no: this.contact,
      //     dob:this.date,
      //     mode_prefrences: this.occupation,
      //   }).then((result) => {
      //     return this.$router.push(`/register_success/`)
      //   }).catch((error) => {
      //     console.log(error.response)
      //     this.progress = false
      //     this.updateProfileProgress = false
      //     this.snackbarColor = 'error'
      //     this.snackbar = true
      //     this.message = 'unable to update your profile'
      //     // this.snackbarColor = 'error'
      //     // this.snackbar = true
      //     // this.message = 'unable to update your profile'
      //   })
    },
  },
}
</script>
