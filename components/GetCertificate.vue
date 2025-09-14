<template>
<div>
  <!-- <v-row> -->
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row align="center" justify="center">


        <v-col cols="12" sm="12" md="8" xs="12">
          <v-text-field outlined dense v-model="email" :error-messages="emailErrors" @input="$v.email.$touch()" @blur="$v.email.$touch()" label="Email" required></v-text-field>
        </v-col>

        <v-col cols="12" sm="12" md="12" xs="12">
          <v-row align="center" justify="center">
            <v-btn @click="validate" :loading="loading"  outlined medium color="primary">Submit</v-btn>
          </v-row>
        </v-col>

      </v-row>
    </v-form>
  </v-container>
  <!-- </v-row> -->
</div>
</template>
<script>
import {
  validationMixin
} from 'vuelidate'
import {
  numeric,
  required,
  maxLength,
  minLength,
  email
} from 'vuelidate/lib/validators'
export default {

  name: "",
  props: {
    pledgeId: {
      type: Number,
      required: true
    }
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(50)
    },
    email: {
      required,
      email
    },
    date: {
      required
    },
    district: {
      required
    },
    state: {
      required
    },
    pincode:{
      numeric,
      required,
      maxLength:maxLength(6),
      minLength:minLength(6)

    },
    mobile:{
      numeric,
      required,
      maxLength:maxLength(10),
      minLength:minLength(10)
    },

  },
  data: () => ({
    valid: true,
    name: '',
    email: '',
    mobile: '',
    pincode: '',
    district: '',
    gender: 0,
    state: '',
    activePicker: null,
    date: null,
    menu: false,

    select: null,
    states: [{
        name: 'Florida',
        abbr: 'FL',
        id: 1
      },
      {
        name: 'Georgia',
        abbr: 'GA',
        id: 2
      },
      {
        name: 'Nebraska',
        abbr: 'NE',
        id: 3
      },
      {
        name: 'California',
        abbr: 'CA',
        id: 4
      },
      {
        name: 'New York',
        abbr: 'NY',
        id: 5
      },
    ],
    checkbox: false,
    loading: false,
    emailUnique:false,
    emailUniqueMessage:'',
    mobileUnique:false,
    mobileUniquerMessage:''
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors ;!this.$v.name.maxLength && errors.push('Name must be at most 50 characters long'); !this.$v.name.required && errors.push('Name is required.');
      return errors;
    },
    mobileErrors() {
      const errors = []
      if (!this.$v.mobile.$dirty) return errors; !this.$v.mobile.maxLength && errors.push('Mobile Number must be 10 characters'); this.mobileUnique && errors.push(this.mobileUniqueMessage); !this.$v.mobile.numeric && errors.push('Invalid Mobile Number'); !this.$v.mobile.required && errors.push('Mobile is required.');
      return errors;
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors; !this.$v.email.email && errors.push('Must be valid e-mail'); this.emailUnique && errors.push(this.emailUniqueMessage); !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    },
    dateErrors() {
      const errors = []
      if (!this.$v.date.$dirty) return errors ; !this.$v.date.required && errors.push('Date is required.');
      return errors;
    },
    districtErrors() {
      const errors = []
      if (!this.$v.district.$dirty) return errors ; !this.$v.district.required && errors.push('District is required.');
      return errors;
    },
    stateErrors() {
      const errors = []
      if (!this.$v.state.$dirty) return errors ; !this.$v.state.required && errors.push('State is required.');
      return errors;
    },
    pincodeErrors(){
      const errors = []
      if (!this.$v.pincode.$dirty) return errors; !this.$v.pincode.maxLength && errors.push('Mobile Number must be 10 characters'); !this.$v.pincode.numeric && errors.push('Invalid Mobile Number'); !this.$v.pincode.required && errors.push('Mobile is required.');
      return errors;
    }
  },
  methods: {
    validate() {
      //this.$refs.form.validate()
      this.$v.$touch()
      console.log(this.$v.$invalid)
      if (this.$v.$invalid == false) {
        console.log("Invalid")
        this.postParticipants()
      }else{
        console.log("valid")
        this.postParticipants()
      }
      //this.postParticipants()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    save(date) {
      this.$refs.menu.save(date)
    },
    postParticipants() {
      this.loading = true
      this.$axios.post(
        '/pledge/get/', {
          email: this.email,
          pledge: this.pledgeId
        }).then(response => {
        this.loading = false
        this.$store.commit("pledge/SET_STEPPERTWO_DATA",2)
        console.log(response)
      }).catch(error => {
        this.loading = false

      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
