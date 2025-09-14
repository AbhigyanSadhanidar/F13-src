<template>
<div>
  <!-- <v-row> -->
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="8" sm="12" md="8">
          <p class="font-weight-medium textColor--text body-1">Professional Information</p>
          <p class="font-weight-medium">Choose Gender</p>
          <v-btn-toggle v-model="gender" dense outlined>
            <v-btn>
              Male
            </v-btn>

            <v-btn>
              Female
            </v-btn>

            <v-btn>
              Other
            </v-btn>
          </v-btn-toggle>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-text-field outlined dense v-model="name" :error-messages="nameErrors" @input="$v.name.$touch()" @blur="$v.name.$touch()" label="Name" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-text-field outlined dense v-model="email" :error-messages="emailErrors" @input="$v.email.$touch()" @blur="$v.email.$touch()" label="Email" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-text-field outlined dense v-model="mobile" :error-messages="mobileErrors" label="Mobile Number" @input="$v.mobile.$touch()" @blur="$v.mobile.$touch()" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-autocomplete v-model="department" :items="depChoice" :error-messages="depErrors" @input="$v.department.$touch()" @blur="$v.department.$touch()" outlined dense item-text="name" label="Department"></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="12" md="12" xs="12" class="py-0 my-0">
          <p class="font-weight-medium textColor--text body-1" headline>Education</p>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-text-field outlined dense v-model="institute" :error-messages="insErrors" @input="$v.institute.$touch()" @blur="$v.institute.$touch()" label="Institute" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-text-field outlined dense v-model="course" :error-messages="courseErrors" @input="$v.course.$touch()" @blur="$v.course.$touch()" label="Course" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-autocomplete v-model="yopass" :items="yos" :error-messages="yosErrors" @input="$v.yopass.$touch()" @blur="$v.yopass.$touch()" outlined dense item-text="name" label="Years of passing"></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="12" md="12" xs="12" class="py-0 my-0">
          <p class="font-weight-medium textColor--text body-1" headline>Address</p>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-text-field outlined dense v-model="address" :error-messages="addressErrors" @input="$v.address.$touch()" @blur="$v.address.$touch()" label="Address" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-autocomplete v-model="state" :items="states" :error-messages="stateErrors" @input="$v.state.$touch()" @blur="$v.state.$touch()" outlined dense item-text="name" label="States"></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-text-field outlined dense v-model="pincode" :error-messages="pincodeErrors" @input="$v.pincode.$touch()" @blur="$v.pincode.$touch()" label="Pincode" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12" xs="12" class="py-0 my-0">
          <p class="font-weight-medium textColor--text body-1" headline>Document</p>
        </v-col>
        <v-col cols="12" sm="12" md="12" xs="12">
          <v-autocomplete v-model="document_type" :items="documentType" :error-messages="docErrors" @input="$v.document_type.$touch()" @blur="$v.document_type.$touch()" outlined dense item-text="name" label="Document Type"></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-text-field outlined dense v-model="uid_no" :error-messages="uidErrors" @input="$v.pincode.$touch()" @blur="$v.pincode.$touch()" label="UID No." required></v-text-field>
        </v-col>

        <v-col cols="12" sm="12" md="6" xs="12">
          <v-file-input v-model="files" placeholder="Upload" label="Document Upload" :error-messages="fileErrors" outlined dense prepend-icon="mdi-paperclip" @input="$v.files.$touch()" @blur="$v.files.$touch()">
            <template v-slot:selection="{ text }">
              <v-chip small label color="primary">
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </v-col>

        <v-col cols="12" sm="12" md="12" xs="12">
          <v-row align="center" justify="center">
            <v-btn @click="validate" :loading="loading" outlined medium class=" textColor--text">Submit</v-btn>
          </v-row>
        </v-col>

      </v-row>
    </v-form>
    <show-snack :show="show" :message="message" :color="snackColor"/>
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
  mixins: [validationMixin],
  validations: {
    name: {
      required,
      maxLength: maxLength(50)
    },
    institute: {
      required,
    },
    uid_no: {
      required,
    },
    department:{
      required
    },
    document_type: {
      required
    },
    files:{
      required
    },
    course: {
      required,
    },
    address: {
      required,
    },
    yopass: {
      required,
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
    pincode: {
      numeric,
      required,
      maxLength: maxLength(6),
      minLength: minLength(6)

    },
    mobile: {
      numeric,
      required,
      maxLength: maxLength(10),
      minLength: minLength(10)
    },

  },
  data: () => ({
    show:false,
    message:"",
    snackColor:"",
    valid: true,
    name: '',
    email: '',
    mobile: '',
    pincode: '',
    district: '',
    institute: '',
    document_type:'',
    files:null,
    uid_no: '',
    address: '',
    course: '',
    gender: 0,
    state: '',
    activePicker: null,
    date: null,
    menu: false,
    select: null,
    yopass: '',
    yos: [{
        name: "2010"
      },
      {
        name: "2011"
      },
      {
        name: "2012"
      },
      {
        name: "2013"
      },
      {
        name: "2014"
      },
      {
        name: "2015"
      },
      {
        name: "2016"
      },
      {
        name: "2017"
      },
      {
        name: "2018"
      },
      {
        name: "2019"
      },
      {
        name: "2020"
      },
      {
        name: "2021"
      },
      {
        name: "2022"
      },
      {
        name: "2023"
      },
      {
        name: "2024"
      },
      {
        name: "2025"
      },
      {
        name: "2026"
      },
      {
        name: "2027"
      },
      {
        name: "2028"
      },
      {
        name: "2029"
      },
      {
        name: "2030"
      },

    ],
    states: [{
        name: 'Andhra Pradesh',
        abbr: 'AP',
        id: 1
      },
      {
        name: 'Arunachal Pradesh',
        abbr: 'AP',
        id: 2
      },
      {
        name: 'Assam',
        abbr: 'AS',
        id: 3
      },
      {
        name: 'Bihar',
        abbr: 'BH',
        id: 4
      },
      {
        name: 'Karnataka',
        abbr: 'KN',
        id: 5
      },
      {
        name: 'Kerala',
        abbr: 'KL',
        id: 5
      },
      {
        name: 'Chhattisgarh',
        abbr: 'CH',
        id: 5
      },
      {
        name: 'Uttar Pradesh',
        abbr: 'UP',
        id: 5
      },
      {
        name: 'Goa',
        abbr: 'GA',
        id: 5
      },
      {
        name: 'Gujarat',
        abbr: 'GJ',
        id: 5
      },
      {
        name: 'Haryana',
        abbr: 'HR',
        id: 5
      },
      {
        name: 'Himachal Pradesh',
        abbr: 'HP',
        id: 5
      },
      {
        name: 'Jammu and Kashmir',
        abbr: 'JK',
        id: 5
      },

      {
        name: 'Jharkhand',
        abbr: 'JH',
        id: 5
      },
      {
        name: 'West Bengal',
        abbr: 'WB',
        id: 5
      },
      {
        name: 'Madhya Pradesh',
        abbr: 'MP',
        id: 5
      },
      {
        name: 'Maharashtra',
        abbr: 'MH',
        id: 5
      },
      {
        name: 'Manipur',
        abbr: 'MN',
        id: 5
      },
      {
        name: 'Meghalaya',
        abbr: 'MG',
        id: 5
      },
      {
        name: 'Mizoram',
        abbr: 'MZ',
        id: 5
      },
      {
        name: 'Nagaland',
        abbr: 'NG',
        id: 5
      },

      {
        name: 'Orissa',
        abbr: 'OR',
        id: 5
      },
      {
        name: 'Punjab',
        abbr: 'PB',
        id: 5
      },
      {
        name: 'Rajasthan',
        abbr: 'RJ',
        id: 5
      },
      {
        name: 'Sikkim',
        abbr: 'SM',
        id: 5
      },
      {
        name: 'Tamil Nadu',
        abbr: 'TN',
        id: 5
      },
      {
        name: 'Telangana',
        abbr: 'TL',
        id: 5
      },
      {
        name: 'Tripura',
        abbr: 'TR',
        id: 5
      },
      {
        name: 'Uttarakhand',
        abbr: 'UK',
        id: 5
      },



    ],
    depChoice:[
      {name:"Creative"},
      {name:"Operation"},
      {name:"Marketing"},
      {name:"HR"},
      {name:"Technology"},
      {name:"Consulting"},
      {name:"PR"},
    ],
    department:'',
    checkbox: false,
    loading: false,
    emailUnique: false,
    emailUniqueMessage: '',
    mobileUnique: false,
    mobileUniquerMessage: '',
    documentType: [{
        name: "Aadhar Card"
      },
      {
        name: "Driving License"
      },
      {
        name: "Pan Card"
      },
      {
        name: "Passport"
      },
      {
        name: "Voter ID"
      },
      {
        name: "Electricity Bill"
      },
      {
        name: "MTNL Bill"
      },
    ]
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push('Name must be at most 50 characters long');
      !this.$v.name.required && errors.push('Name is required.');
      return errors;
    },
    insErrors() {
      const errors = []
      if (!this.$v.institute.$dirty) return errors;
      !this.$v.institute.required && errors.push('Institute is required.');
      return errors;
    },
    depErrors() {
      const errors = []
      if (!this.$v.department.$dirty) return errors;
      !this.$v.department.required && errors.push('Department is required.');
      return errors;
    },
    uidErrors() {
      const errors = []
      if (!this.$v.uid_no.$dirty) return errors;
      !this.$v.uid_no.required && errors.push('UID No. is required.');
      return errors;
    },
    docErrors() {
      const errors = []
      if (!this.$v.document_type.$dirty) return errors;
      !this.$v.document_type.required && errors.push('Document Type is required.');
      return errors;
    },
    fileErrors() {
      const errors = []
      if (!this.$v.files.$dirty) return errors;
      !this.$v.files.required && errors.push('Document Upload is required.');
      return errors;
    },
    courseErrors() {
      const errors = []
      if (!this.$v.course.$dirty) return errors;
      !this.$v.course.required && errors.push('Course is required.');
      return errors;
    },
    yosErrors() {
      const errors = []
      if (!this.$v.yopass.$dirty) return errors;
      !this.$v.yopass.required && errors.push('Year of passing is required.');
      return errors;
    },
    addressErrors() {
      const errors = []
      if (!this.$v.address.$dirty) return errors;
      !this.$v.address.required && errors.push('Address is required.');
      return errors;
    },

    mobileErrors() {
      const errors = []
      if (!this.$v.mobile.$dirty) return errors;
      !this.$v.mobile.maxLength && errors.push('Mobile Number must be 10 characters');
      this.mobileUnique && errors.push(this.mobileUniqueMessage);
      !this.$v.mobile.numeric && errors.push('Invalid Mobile Number');
      !this.$v.mobile.required && errors.push('Mobile is required.');
      return errors;
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      this.emailUnique && errors.push(this.emailUniqueMessage);
      !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    },


    districtErrors() {
      const errors = []
      if (!this.$v.district.$dirty) return errors;
      !this.$v.district.required && errors.push('District is required.');
      return errors;
    },
    stateErrors() {
      const errors = []
      if (!this.$v.state.$dirty) return errors;
      !this.$v.state.required && errors.push('State is required.');
      return errors;
    },
    pincodeErrors() {
      const errors = []
      if (!this.$v.pincode.$dirty) return errors;
      !this.$v.pincode.maxLength && errors.push('Pincode must be 6 characters');
      !this.$v.pincode.numeric && errors.push('Invalid Pincode');
      !this.$v.pincode.required && errors.push('Mobile is required.');
      return errors;
    }
  },
  methods: {
    validate() {
      //this.$refs.form.validate()
      this.$v.$touch()

      if (this.$v.$invalid == false) {

      } else {
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

    makeFormData(){
      const formData = new FormData();
      formData.append("full_name",this.name)
      formData.append("option", "string")
      formData.append("email", this.email)
      formData.append("contact_number", this.number)
      formData.append("course",this.course)
      formData.append("year_of_pass",this.yopass)
      formData.append("institute",this.institute)
      formData.append("department",this.department)
      formData.append("state",this.state)
      formData.append("pincode",this.pincode)
      formData.append("document_type",this.document_type)
      formData.append("document",this.files)
      formData.append("uid_no",this.uid_no)
      return formData

    },
    postParticipantss(){
      this.$refs.form.reset()
      this.$refs.form.resetValidation()

    },
    postParticipants() {
      this.loading = true
      var data = this.makeFormData()
      this.$axios.post(
        '/membership/volunteer/', data).then(response => {
        this.loading = false
        //this.$refs.form.resetValidation()
        //this.$refs.form.reset()
        //this.show=true,
        //this.message="Form submitted"
        //this.snackColor="success"
        this.$router.push('/success/')
        console.log(response)
      }).catch(error => {
        this.loading = false
        this.show=true,
        this.message="Unable to save Data"
        this.snackColor="error"
        //this.$v.$touch()
        //this.$v.email.dirty = true

        if (typeof error.response.data.email != 'undefined') {
          this.emailUnique = true
          this.emailUniqueMessage = error.response.data.email[0]
        } else {
          this.emailUnique = false
          this.emailUniqueMessage = ''
        }
        if (typeof error.response.data.mobile != 'undefined') {
          this.mobileUnique = true
          this.mobileUniqueMessage = error.response.data.mobile[0]
        } else {
          this.mobileUnique = false
          this.mobileUniqueMessage = ''
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
