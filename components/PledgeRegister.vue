<template>
<div>
  <!-- <v-row> -->
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" sm="12" md="8">
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
          <v-text-field outlined dense v-model="mobile" :error-messages="mobileErrors"  label="Mobile Number" @input="$v.mobile.$touch()" @blur="$v.mobile.$touch()" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="date" outlined dense label="Birthday date" :error-messages="dateErrors" @input="$v.date.$touch()" @blur="$v.date.$touch()" readonly v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="date" :active-picker.sync="activePicker" :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="12" sm="12" md="6" xs="12">
          <v-autocomplete v-model="state" :items="stateList"  :error-messages="stateErrors" @input="$v.state.$touch()" @blur="$v.state.$touch()" outlined dense item-text="state" return-object label="States"></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-autocomplete v-model="district" :items="state.districts" :error-messages="districtErrors" @input="$v.district.$touch()" @blur="$v.district.$touch()" outlined dense  label="District"></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="12" md="6" xs="12">
          <v-text-field outlined dense v-model="pincode" :error-messages="pincodeErrors" @input="$v.pincode.$touch()" @blur="$v.pincode.$touch()"  label="Pincode" required></v-text-field>
        </v-col>

        <v-col cols="12" sm="12" md="12" xs="12">
          <v-row align="center" justify="center">
            <v-btn @click="validate()" outlined medium color="primary">Take Pledge</v-btn>
          </v-row>
        </v-col>

      </v-row>
    </v-form>
    <take-pledge v-if="dialog==true" :dialog="dialog" :item="pledge" :loading="loading" :onAction="postParticipants"/>

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
    },
    pledge: {
      type: Object,
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
    dialog:false,
    activePicker: null,
    districtList:[],
    date: null,
    menu: false,

    select: null,
    stateList:[
      {
         "state":"Andhra Pradesh",
         "districts":[
            "Anantapur",
            "Chittoor",
            "East Godavari",
            "Guntur",
            "Krishna",
            "Kurnool",
            "Nellore",
            "Prakasam",
            "Srikakulam",
            "Visakhapatnam",
            "Vizianagaram",
            "West Godavari",
            "YSR Kadapa"
         ]
      },
      {
         "state":"Arunachal Pradesh",
         "districts":[
            "Tawang",
            "West Kameng",
            "East Kameng",
            "Papum Pare",
            "Kurung Kumey",
            "Kra Daadi",
            "Lower Subansiri",
            "Upper Subansiri",
            "West Siang",
            "East Siang",
            "Siang",
            "Upper Siang",
            "Lower Siang",
            "Lower Dibang Valley",
            "Dibang Valley",
            "Anjaw",
            "Lohit",
            "Namsai",
            "Changlang",
            "Tirap",
            "Longding"
         ]
      },
      {
         "state":"Assam",
         "districts":[
            "Baksa",
            "Barpeta",
            "Biswanath",
            "Bongaigaon",
            "Cachar",
            "Charaideo",
            "Chirang",
            "Darrang",
            "Dhemaji",
            "Dhubri",
            "Dibrugarh",
            "Goalpara",
            "Golaghat",
            "Hailakandi",
            "Hojai",
            "Jorhat",
            "Kamrup Metropolitan",
            "Kamrup",
            "Karbi Anglong",
            "Karimganj",
            "Kokrajhar",
            "Lakhimpur",
            "Majuli",
            "Morigaon",
            "Nagaon",
            "Nalbari",
            "Dima Hasao",
            "Sivasagar",
            "Sonitpur",
            "South Salmara-Mankachar",
            "Tinsukia",
            "Udalguri",
            "West Karbi Anglong"
         ]
      },
      {
         "state":"Bihar",
         "districts":[
            "Araria",
            "Arwal",
            "Aurangabad",
            "Banka",
            "Begusarai",
            "Bhagalpur",
            "Bhojpur",
            "Buxar",
            "Darbhanga",
            "East Champaran (Motihari)",
            "Gaya",
            "Gopalganj",
            "Jamui",
            "Jehanabad",
            "Kaimur (Bhabua)",
            "Katihar",
            "Khagaria",
            "Kishanganj",
            "Lakhisarai",
            "Madhepura",
            "Madhubani",
            "Munger (Monghyr)",
            "Muzaffarpur",
            "Nalanda",
            "Nawada",
            "Patna",
            "Purnia (Purnea)",
            "Rohtas",
            "Saharsa",
            "Samastipur",
            "Saran",
            "Sheikhpura",
            "Sheohar",
            "Sitamarhi",
            "Siwan",
            "Supaul",
            "Vaishali",
            "West Champaran"
         ]
      },
      {
         "state":"Chandigarh (UT)",
         "districts":[
            "Chandigarh"
         ]
      },
      {
         "state":"Chhattisgarh",
         "districts":[
            "Balod",
            "Baloda Bazar",
            "Balrampur",
            "Bastar",
            "Bemetara",
            "Bijapur",
            "Bilaspur",
            "Dantewada (South Bastar)",
            "Dhamtari",
            "Durg",
            "Gariyaband",
            "Janjgir-Champa",
            "Jashpur",
            "Kabirdham (Kawardha)",
            "Kanker (North Bastar)",
            "Kondagaon",
            "Korba",
            "Korea (Koriya)",
            "Mahasamund",
            "Mungeli",
            "Narayanpur",
            "Raigarh",
            "Raipur",
            "Rajnandgaon",
            "Sukma",
            "Surajpur  ",
            "Surguja"
         ]
      },
      {
         "state":"Dadra and Nagar Haveli (UT)",
         "districts":[
            "Dadra & Nagar Haveli"
         ]
      },
      {
         "state":"Daman and Diu (UT)",
         "districts":[
            "Daman",
            "Diu"
         ]
      },
      {
         "state":"Delhi (NCT)",
         "districts":[
            "Central Delhi",
            "East Delhi",
            "New Delhi",
            "North Delhi",
            "North East  Delhi",
            "North West  Delhi",
            "Shahdara",
            "South Delhi",
            "South East Delhi",
            "South West  Delhi",
            "West Delhi"
         ]
      },
      {
         "state":"Goa",
         "districts":[
            "North Goa",
            "South Goa"
         ]
      },
      {
         "state":"Gujarat",
         "districts":[
            "Ahmedabad",
            "Amreli",
            "Anand",
            "Aravalli",
            "Banaskantha (Palanpur)",
            "Bharuch",
            "Bhavnagar",
            "Botad",
            "Chhota Udepur",
            "Dahod",
            "Dangs (Ahwa)",
            "Devbhoomi Dwarka",
            "Gandhinagar",
            "Gir Somnath",
            "Jamnagar",
            "Junagadh",
            "Kachchh",
            "Kheda (Nadiad)",
            "Mahisagar",
            "Mehsana",
            "Morbi",
            "Narmada (Rajpipla)",
            "Navsari",
            "Panchmahal (Godhra)",
            "Patan",
            "Porbandar",
            "Rajkot",
            "Sabarkantha (Himmatnagar)",
            "Surat",
            "Surendranagar",
            "Tapi (Vyara)",
            "Vadodara",
            "Valsad"
         ]
      },
      {
         "state":"Haryana",
         "districts":[
            "Ambala",
            "Bhiwani",
            "Charkhi Dadri",
            "Faridabad",
            "Fatehabad",
            "Gurgaon",
            "Hisar",
            "Jhajjar",
            "Jind",
            "Kaithal",
            "Karnal",
            "Kurukshetra",
            "Mahendragarh",
            "Mewat",
            "Palwal",
            "Panchkula",
            "Panipat",
            "Rewari",
            "Rohtak",
            "Sirsa",
            "Sonipat",
            "Yamunanagar"
         ]
      },
      {
         "state":"Himachal Pradesh",
         "districts":[
            "Bilaspur",
            "Chamba",
            "Hamirpur",
            "Kangra",
            "Kinnaur",
            "Kullu",
            "Lahaul &amp; Spiti",
            "Mandi",
            "Shimla",
            "Sirmaur (Sirmour)",
            "Solan",
            "Una"
         ]
      },
      {
         "state":"Jammu and Kashmir",
         "districts":[
            "Anantnag",
            "Bandipore",
            "Baramulla",
            "Budgam",
            "Doda",
            "Ganderbal",
            "Jammu",
            "Kargil",
            "Kathua",
            "Kishtwar",
            "Kulgam",
            "Kupwara",
            "Leh",
            "Poonch",
            "Pulwama",
            "Rajouri",
            "Ramban",
            "Reasi",
            "Samba",
            "Shopian",
            "Srinagar",
            "Udhampur"
         ]
      },
      {
         "state":"Jharkhand",
         "districts":[
            "Bokaro",
            "Chatra",
            "Deoghar",
            "Dhanbad",
            "Dumka",
            "East Singhbhum",
            "Garhwa",
            "Giridih",
            "Godda",
            "Gumla",
            "Hazaribag",
            "Jamtara",
            "Khunti",
            "Koderma",
            "Latehar",
            "Lohardaga",
            "Pakur",
            "Palamu",
            "Ramgarh",
            "Ranchi",
            "Sahibganj",
            "Seraikela-Kharsawan",
            "Simdega",
            "West Singhbhum"
         ]
      },
      {
         "state":"Karnataka",
         "districts":[
            "Bagalkot",
            "Ballari (Bellary)",
            "Belagavi (Belgaum)",
            "Bengaluru (Bangalore) Rural",
            "Bengaluru (Bangalore) Urban",
            "Bidar",
            "Chamarajanagar",
            "Chikballapur",
            "Chikkamagaluru (Chikmagalur)",
            "Chitradurga",
            "Dakshina Kannada",
            "Davangere",
            "Dharwad",
            "Gadag",
            "Hassan",
            "Haveri",
            "Kalaburagi (Gulbarga)",
            "Kodagu",
            "Kolar",
            "Koppal",
            "Mandya",
            "Mysuru (Mysore)",
            "Raichur",
            "Ramanagara",
            "Shivamogga (Shimoga)",
            "Tumakuru (Tumkur)",
            "Udupi",
            "Uttara Kannada (Karwar)",
            "Vijayapura (Bijapur)",
            "Yadgir"
         ]
      },
      {
         "state":"Kerala",
         "districts":[
            "Alappuzha",
            "Ernakulam",
            "Idukki",
            "Kannur",
            "Kasaragod",
            "Kollam",
            "Kottayam",
            "Kozhikode",
            "Malappuram",
            "Palakkad",
            "Pathanamthitta",
            "Thiruvananthapuram",
            "Thrissur",
            "Wayanad"
         ]
      },
      {
         "state":"Lakshadweep (UT)",
         "districts":[
            "Agatti",
            "Amini",
            "Androth",
            "Bithra",
            "Chethlath",
            "Kavaratti",
            "Kadmath",
            "Kalpeni",
            "Kilthan",
            "Minicoy"
         ]
      },
      {
         "state":"Madhya Pradesh",
         "districts":[
            "Agar Malwa",
            "Alirajpur",
            "Anuppur",
            "Ashoknagar",
            "Balaghat",
            "Barwani",
            "Betul",
            "Bhind",
            "Bhopal",
            "Burhanpur",
            "Chhatarpur",
            "Chhindwara",
            "Damoh",
            "Datia",
            "Dewas",
            "Dhar",
            "Dindori",
            "Guna",
            "Gwalior",
            "Harda",
            "Hoshangabad",
            "Indore",
            "Jabalpur",
            "Jhabua",
            "Katni",
            "Khandwa",
            "Khargone",
            "Mandla",
            "Mandsaur",
            "Morena",
            "Narsinghpur",
            "Neemuch",
            "Panna",
            "Raisen",
            "Rajgarh",
            "Ratlam",
            "Rewa",
            "Sagar",
            "Satna",
            "Sehore",
            "Seoni",
            "Shahdol",
            "Shajapur",
            "Sheopur",
            "Shivpuri",
            "Sidhi",
            "Singrauli",
            "Tikamgarh",
            "Ujjain",
            "Umaria",
            "Vidisha"
         ]
      },
      {
         "state":"Maharashtra",
         "districts":[
            "Ahmednagar",
            "Akola",
            "Amravati",
            "Aurangabad",
            "Beed",
            "Bhandara",
            "Buldhana",
            "Chandrapur",
            "Dhule",
            "Gadchiroli",
            "Gondia",
            "Hingoli",
            "Jalgaon",
            "Jalna",
            "Kolhapur",
            "Latur",
            "Mumbai City",
            "Mumbai Suburban",
            "Nagpur",
            "Nanded",
            "Nandurbar",
            "Nashik",
            "Osmanabad",
            "Palghar",
            "Parbhani",
            "Pune",
            "Raigad",
            "Ratnagiri",
            "Sangli",
            "Satara",
            "Sindhudurg",
            "Solapur",
            "Thane",
            "Wardha",
            "Washim",
            "Yavatmal"
         ]
      },
      {
         "state":"Manipur",
         "districts":[
            "Bishnupur",
            "Chandel",
            "Churachandpur",
            "Imphal East",
            "Imphal West",
            "Jiribam",
            "Kakching",
            "Kamjong",
            "Kangpokpi",
            "Noney",
            "Pherzawl",
            "Senapati",
            "Tamenglong",
            "Tengnoupal",
            "Thoubal",
            "Ukhrul"
         ]
      },
      {
         "state":"Meghalaya",
         "districts":[
            "East Garo Hills",
            "East Jaintia Hills",
            "East Khasi Hills",
            "North Garo Hills",
            "Ri Bhoi",
            "South Garo Hills",
            "South West Garo Hills ",
            "South West Khasi Hills",
            "West Garo Hills",
            "West Jaintia Hills",
            "West Khasi Hills"
         ]
      },
      {
         "state":"Mizoram",
         "districts":[
            "Aizawl",
            "Champhai",
            "Kolasib",
            "Lawngtlai",
            "Lunglei",
            "Mamit",
            "Saiha",
            "Serchhip"
         ]
      },
      {
         "state":"Nagaland",
         "districts":[
            "Dimapur",
            "Kiphire",
            "Kohima",
            "Longleng",
            "Mokokchung",
            "Mon",
            "Peren",
            "Phek",
            "Tuensang",
            "Wokha",
            "Zunheboto"
         ]
      },
      {
         "state":"Odisha",
         "districts":[
            "Angul",
            "Balangir",
            "Balasore",
            "Bargarh",
            "Bhadrak",
            "Boudh",
            "Cuttack",
            "Deogarh",
            "Dhenkanal",
            "Gajapati",
            "Ganjam",
            "Jagatsinghapur",
            "Jajpur",
            "Jharsuguda",
            "Kalahandi",
            "Kandhamal",
            "Kendrapara",
            "Kendujhar (Keonjhar)",
            "Khordha",
            "Koraput",
            "Malkangiri",
            "Mayurbhanj",
            "Nabarangpur",
            "Nayagarh",
            "Nuapada",
            "Puri",
            "Rayagada",
            "Sambalpur",
            "Sonepur",
            "Sundargarh"
         ]
      },
      {
         "state":"Puducherry (UT)",
         "districts":[
            "Karaikal",
            "Mahe",
            "Pondicherry",
            "Yanam"
         ]
      },
      {
         "state":"Punjab",
         "districts":[
            "Amritsar",
            "Barnala",
            "Bathinda",
            "Faridkot",
            "Fatehgarh Sahib",
            "Fazilka",
            "Ferozepur",
            "Gurdaspur",
            "Hoshiarpur",
            "Jalandhar",
            "Kapurthala",
            "Ludhiana",
            "Mansa",
            "Moga",
            "Muktsar",
            "Nawanshahr (Shahid Bhagat Singh Nagar)",
            "Pathankot",
            "Patiala",
            "Rupnagar",
            "Sahibzada Ajit Singh Nagar (Mohali)",
            "Sangrur",
            "Tarn Taran"
         ]
      },
      {
         "state":"Rajasthan",
         "districts":[
            "Ajmer",
            "Alwar",
            "Banswara",
            "Baran",
            "Barmer",
            "Bharatpur",
            "Bhilwara",
            "Bikaner",
            "Bundi",
            "Chittorgarh",
            "Churu",
            "Dausa",
            "Dholpur",
            "Dungarpur",
            "Hanumangarh",
            "Jaipur",
            "Jaisalmer",
            "Jalore",
            "Jhalawar",
            "Jhunjhunu",
            "Jodhpur",
            "Karauli",
            "Kota",
            "Nagaur",
            "Pali",
            "Pratapgarh",
            "Rajsamand",
            "Sawai Madhopur",
            "Sikar",
            "Sirohi",
            "Sri Ganganagar",
            "Tonk",
            "Udaipur"
         ]
      },
      {
         "state":"Sikkim",
         "districts":[
            "East Sikkim",
            "North Sikkim",
            "South Sikkim",
            "West Sikkim"
         ]
      },
      {
         "state":"Tamil Nadu",
         "districts":[
            "Ariyalur",
            "Chennai",
            "Coimbatore",
            "Cuddalore",
            "Dharmapuri",
            "Dindigul",
            "Erode",
            "Kanchipuram",
            "Kanyakumari",
            "Karur",
            "Krishnagiri",
            "Madurai",
            "Nagapattinam",
            "Namakkal",
            "Nilgiris",
            "Perambalur",
            "Pudukkottai",
            "Ramanathapuram",
            "Salem",
            "Sivaganga",
            "Thanjavur",
            "Theni",
            "Thoothukudi (Tuticorin)",
            "Tiruchirappalli",
            "Tirunelveli",
            "Tiruppur",
            "Tiruvallur",
            "Tiruvannamalai",
            "Tiruvarur",
            "Vellore",
            "Viluppuram",
            "Virudhunagar"
         ]
      },
      {
         "state":"Telangana",
         "districts":[
            "Adilabad",
            "Bhadradri Kothagudem",
            "Hyderabad",
            "Jagtial",
            "Jangaon",
            "Jayashankar Bhoopalpally",
            "Jogulamba Gadwal",
            "Kamareddy",
            "Karimnagar",
            "Khammam",
            "Komaram Bheem Asifabad",
            "Mahabubabad",
            "Mahabubnagar",
            "Mancherial",
            "Medak",
            "Medchal",
            "Nagarkurnool",
            "Nalgonda",
            "Nirmal",
            "Nizamabad",
            "Peddapalli",
            "Rajanna Sircilla",
            "Rangareddy",
            "Sangareddy",
            "Siddipet",
            "Suryapet",
            "Vikarabad",
            "Wanaparthy",
            "Warangal (Rural)",
            "Warangal (Urban)",
            "Yadadri Bhuvanagiri"
         ]
      },
      {
         "state":"Tripura",
         "districts":[
            "Dhalai",
            "Gomati",
            "Khowai",
            "North Tripura",
            "Sepahijala",
            "South Tripura",
            "Unakoti",
            "West Tripura"
         ]
      },
      {
         "state":"Uttarakhand",
         "districts":[
            "Almora",
            "Bageshwar",
            "Chamoli",
            "Champawat",
            "Dehradun",
            "Haridwar",
            "Nainital",
            "Pauri Garhwal",
            "Pithoragarh",
            "Rudraprayag",
            "Tehri Garhwal",
            "Udham Singh Nagar",
            "Uttarkashi"
         ]
      },
      {
         "state":"Uttar Pradesh",
         "districts":[
            "Agra",
            "Aligarh",
            "Allahabad",
            "Ambedkar Nagar",
            "Amethi (Chatrapati Sahuji Mahraj Nagar)",
            "Amroha (J.P. Nagar)",
            "Auraiya",
            "Azamgarh",
            "Baghpat",
            "Bahraich",
            "Ballia",
            "Balrampur",
            "Banda",
            "Barabanki",
            "Bareilly",
            "Basti",
            "Bhadohi",
            "Bijnor",
            "Budaun",
            "Bulandshahr",
            "Chandauli",
            "Chitrakoot",
            "Deoria",
            "Etah",
            "Etawah",
            "Faizabad",
            "Farrukhabad",
            "Fatehpur",
            "Firozabad",
            "Gautam Buddha Nagar",
            "Ghaziabad",
            "Ghazipur",
            "Gonda",
            "Gorakhpur",
            "Hamirpur",
            "Hapur (Panchsheel Nagar)",
            "Hardoi",
            "Hathras",
            "Jalaun",
            "Jaunpur",
            "Jhansi",
            "Kannauj",
            "Kanpur Dehat",
            "Kanpur Nagar",
            "Kanshiram Nagar (Kasganj)",
            "Kaushambi",
            "Kushinagar (Padrauna)",
            "Lakhimpur - Kheri",
            "Lalitpur",
            "Lucknow",
            "Maharajganj",
            "Mahoba",
            "Mainpuri",
            "Mathura",
            "Mau",
            "Meerut",
            "Mirzapur",
            "Moradabad",
            "Muzaffarnagar",
            "Pilibhit",
            "Pratapgarh",
            "RaeBareli",
            "Rampur",
            "Saharanpur",
            "Sambhal (Bhim Nagar)",
            "Sant Kabir Nagar",
            "Shahjahanpur",
            "Shamali (Prabuddh Nagar)",
            "Shravasti",
            "Siddharth Nagar",
            "Sitapur",
            "Sonbhadra",
            "Sultanpur",
            "Unnao",
            "Varanasi"
         ]
      },
      {
         "state":"West Bengal",
         "districts":[
            "Alipurduar",
            "Bankura",
            "Birbhum",
            "Burdwan (Bardhaman)",
            "Cooch Behar",
            "Dakshin Dinajpur (South Dinajpur)",
            "Darjeeling",
            "Hooghly",
            "Howrah",
            "Jalpaiguri",
            "Kalimpong",
            "Kolkata",
            "Malda",
            "Murshidabad",
            "Nadia",
            "North 24 Parganas",
            "Paschim Medinipur (West Medinipur)",
            "Purba Medinipur (East Medinipur)",
            "Purulia",
            "South 24 Parganas",
            "Uttar Dinajpur (North Dinajpur)"
         ]
      }
    ],
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
    testT(){
      this.dialog=true;
    },
    validate() {
      //this.$refs.form.validate()
      this.$v.$touch()
      console.log(this.$v.$invalid)
      if (this.$v.$invalid == false) {
        console.log("Invalid")
        //this.postParticipants()
        this.testT()
      }else{
        console.log("valid")
        //this.testT()
        //this.postParticipants()
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
    getFormData(){
      return {
        dob: this.date,
        full_name: this.name,
        gender: this.gender,
        email: this.email,
        mobile: this.mobile,
        pincode: this.pincode,
        state: this.state,
        district: this.district,
        pledge: this.pledgeId
      }
    },
    setDataState(obj){
      this.state = obj.state
      this.districtList = obj.districts
      console.log("Hello world")
    },
    postParticipantss(){
      var d = this.getFormData()
      this.$store.commit("pledge/SET_PLEDGEFORM_DATA",d)
    },
    postParticipants() {
      console.log(this.state["state"])
      this.loading = true
      this.$axios.post(
        '/pledge/participant/', {
          dob: this.date,
          full_name: this.name,
          gender: this.gender,
          email: this.email,
          mobile: this.mobile,
          pincode: this.pincode,
          state: this.state["state"],
          district: this.district,
          pledge: this.pledgeId
        }).then(response => {
        this.loading = false
        this.dialog = false
        this.$store.commit("pledge/SET_STEPPER_DATA",2)
        console.log(response)
      }).catch(error => {
        this.loading = false
        this.dialog = false
        console.log(error);
        if(typeof error.response.data.non_field_errors != 'undefined'){
          this.emailUnique = true
          this.emailUniqueMessage = "This email is already registered"
        }else{
          this.emailUnique = false
          this.emailUniqueMessage = ''
        }
        if(typeof error.response.data.mobile != 'undefined'){
          this.mobileUnique = true
          this.mobileUniqueMessage = error.response.data.mobile[0]
        }else{
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
