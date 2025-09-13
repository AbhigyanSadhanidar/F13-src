<template>
<div>
  <!-- <v-row> -->
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row align="center" justify="center">

        <v-col cols="12" sm="12" md="6" xs="12">
          <v-text-field outlined dense v-model="otp" :error-messages="otpErrors" @input="$v.otp.$touch()" @blur="$v.otp.$touch()" label="Enter Otp" required></v-text-field>
        </v-col>

        <v-col cols="12" sm="12" md="12" xs="12">
          <v-row align="center" justify="center">
            <v-btn @click="validate" :loading="loading"  outlined medium color="primary">Verify</v-btn>
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


    otp:{
      numeric,
      required,
      maxLength:maxLength(6),
      minLength:minLength(6)

    },


  },
  data: () => ({
    valid: true,
    otp:"",

    select: null,

    checkbox: false,
    loading: false,
    emailUnique:false,
    emailUniqueMessage:'',
    otpUnique:false,
    otpUniquerMessage:''
  }),

  computed: {

    otpErrors(){
      const errors = []
      if (!this.$v.otp.$dirty) return errors; !this.$v.otp.maxLength && errors.push('Otp must be 6 characters'); this.otpUnique && errors.push(this.otpUniqueMessage); !this.$v.otp.required && errors.push('Otp is required.');

      //if (!this.$v.otp.$dirty) return errors; !this.$v.otp.maxLength && errors.push('Otp must be 6 characters'); !this.$v.otp.numeric && errors.push('Invalid Otp'); !this.$v.otp.required && errors.push('Otp is required.');
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
      this.otpUnique = false
      this.otpUniqueMessage = ""
      this.$axios.get(
        `/pledge/verification/${this.otp}`).then(response => {
        this.loading = false
        this.$store.commit("pledge/SET_CERT_DATA",response.data)
        this.$store.commit("pledge/SET_STEPPER_DATA",3)

        //console.log(response)
      }).catch(error => {
        this.otpUnique = true
        this.otpUniqueMessage = "Invalid Otp"
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
