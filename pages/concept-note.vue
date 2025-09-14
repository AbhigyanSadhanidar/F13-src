<template>
  <div>
    <p v-if="$fetchState.pending">Fetching data...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <v-row align="center" justify="center" class="mt-5 mb-5" v-else>
      <v-col cols="12" sm="12" md="8" xl="8" lg="8" xs="12">
        <v-card>
          <v-container>
            <v-row align="center" justify="center">
              <img src="../static/se2022.png" alt="" height="400px" width="80%">
            </v-row>
          </v-container>
          <v-divider />

          <v-card-title class="justify-start font-weight-bold textColor--text text-h4"
            style="text-align:left !important;">
            About SEE Summit 2022
          </v-card-title>
          <v-card-text class="font-weight-medium body-2 text-left"
            style="font-size:20px !important; line-height: 1.5 !important;">
            <p>The 4th edition of &quot;The Sustainable Environment and Energy Summit 2022&quot; is an initiative of the
              Social Responsibility Council (SRC), a leading contemporary think tank working meticulously towards
              bringing positive environmental changes to the world. This year, the theme of the SEE Summit-2022 is
              &quot;Environment, Social, and Governance (ESG)&quot; . The Summit is a forum for the judiciary, policy
              makers,
              academia, industry and other stakeholders to showcase and exchange their concerns, knowledge, ideas,
              and actions towards developing sustainable environmental conditions while honouring the pace of
              economic growth.</p>

            <p>At this day-long conference, the meticulously selected panelists and audience will have the influence,
              intelligence, and competence to drive social, environmental, and economic development. We foresee the
              collaborative and innovative environment at the Summit could potentially help stakeholders explore
              synergies and move towards developing mutually beneficial opportunities. SRC recognises the vital role of
              the judiciary, academia, policymakers, innovators, corporates, and financial institutions in bringing
              about
              positive change on a global scale.</p>





          </v-card-text>
          <v-card-text class="font-weight-medium body-2 text-left"
            style="font-size:20px !important; line-height: 1.5 !important;">
            <p class="black--text">The following shall be the discussion points in the Summit:</p>
            <ul>
              <li>Business Responsibility and Sustainability Report ( BRSR).</li>
              <li> Sustainability and ESG Disclosures.</li>
              <li>ESG Framework and Sustainable Finance.</li>

            </ul>
          </v-card-text>
          <v-card-title class="justify-start font-weight-bold textColor--text text-h4"
            style="text-align:left !important;">
            Our Honourable Guest & Speakers
          </v-card-title>
          <v-container fluid>
            <v-row align="center" justify="start">
              <v-col cols="12" sm="12" md="6" xl="4" v-for="item in data" :key="item.id">
                <guest-card :item="item" />
              </v-col>
            </v-row>
          </v-container>
          <v-card-action class="px-2">
            <v-container fluid>
              <v-row align="center" justify="center">
                <v-btn color="secondary" to="/registration">Register</v-btn>
              </v-row>
            </v-container>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "",
  fetchOnServer: true,
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= (Date.now() - 30000)) {
      this.$fetch()
    }
  },
  async fetch() {
    this.data = [
  {
    label: 'Shri. Ashwini Kumar Choubey',
    sub_label: 'Honorable Chief Guest',
    image: 'https://api.srcouncil.in/media/meta_content/Shri_Ashwini_Kumar_Choubey.jpg',
    extra_content: 'Honorable Minister of State for Consumer Affairs, Food and Public Distribution and Environment, Forest and Climate Change'
  },
  {
    label: 'Shri. Mama Natung',
    sub_label: 'Honorable Chief Guest',
    image: 'https://api.srcouncil.in/media/meta_content/Mama_Natung_Guest_of_Honour.jpg',
    extra_content: 'Honorable Minister of Department of Environment, Forest and Climate Change, Govt. of Arunachal Pradesh'
  },
  {
    label: 'Mr. Naresh Kumar, IAS',
    sub_label: 'Honorable Chief Guest',
    image: 'https://api.srcouncil.in/media/meta_content/190716075155102_BW.jpg',
    extra_content: 'The chief secretary of the government of Arunachal Pradesh'
  },
  {
    label: 'Honorable Justice Swatanter Kumar',
    sub_label: 'Honorable Keynote Speaker',
    image: 'https://api.srcouncil.in/media/meta_content/Justice_Swatanter_Kumar_Keynote_Speaker.jpg',
    extra_content: 'Former Chairman, National Green Tribunal'
  },
  {
    label: 'Honorable Justice Sheo Kumar Singh',
    sub_label: 'Guest of Honour',
    image: 'https://api.srcouncil.in/media/meta_content/Justice_Sheo_Kumar_Singh.jpg',
    extra_content: 'Judicial Member, National Green Tribunal'
  },
  {
    label: 'Shri. Satish Upadhyay',
    sub_label: 'Guest of Honour',
    image: 'https://api.srcouncil.in/media/meta_content/shri_satish_upadhyay.jpg',
    extra_content: 'Honorable Vice-Chairperson, New Delhi Municipal Council'
  },
  {
    label: 'Shri. Vinai Kumar Saxena',
    sub_label: 'Guest of Honour',
    image: 'https://api.srcouncil.in/media/meta_content/Shri._Vinai_Kumar_Saxena_Guest_of_Honour.jpg',
    extra_content: 'Honorable Chairman of the Khadi and Village Industries Commission'
  },
  {
    label: 'Dr. Suvrokamal Dutta',
    sub_label: 'Guest of Honour',
    image: 'https://api.srcouncil.in/media/meta_content/Dr._S.K_Dutta_Guest_of_Honour_Hutj9HZ.jpg',
    extra_content: 'Renowned Right Wing Media Think Tank'
  },
  {
    label: 'Mr. Arun Khurana',
    sub_label: 'Honorable Organizer',
    image: 'https://api.srcouncil.in/media/meta_content/Mr._Arun_Khurana_Honorable_Organizer.jpg',
    extra_content: 'Founder, Social Responsibility Council'
  },
  {
    label: 'Dr. Rawail Singh',
    sub_label: 'Honorable Organizing Head',
    image: 'https://api.srcouncil.in/media/meta_content/Dr._Rawail_Singh.jpg',
    extra_content: 'Member University Court and Member of Standing Committee of Delhi University'
  },
  {
    label: 'Miss Prachi Tehlan',
    sub_label: 'Special Guest',
    image: 'https://api.srcouncil.in/media/meta_content/NSP_1232_BW.jpg',
    extra_content: 'Actress'
  },
  {
    label: 'Advocate Vivek Narayan Sharma',
    sub_label: 'Moderator',
    image: 'https://api.srcouncil.in/media/meta_content/Mr._Vivek_Narayan_Sharma_Moderator.jpg',
    extra_content: 'Counsel/Advocate, Supreme Court of India'
  },
  {
    label: 'Mrs. Sangeeta',
    sub_label: 'Panelist',
    image: 'https://api.srcouncil.in/media/meta_content/DSC_0399_BW.jpg',
    extra_content: 'Advocate Supreme Court of India'
  },
  {
    label: 'Shri Sanjeev Sharma',
    sub_label: 'Special Guest',
    image: 'https://api.srcouncil.in/media/meta_content/DSC_0166_BW.jpg',
    extra_content: 'Social Activist'
  },
  {
    label: 'Shri. Tanmoy Chakrabarty',
    sub_label: 'Panelist',
    image: 'https://api.srcouncil.in/media/meta_content/Shri_Tanmoy_Chakrabarty_Panelist.jpg',
    extra_content: 'Group Government Affairs Officer of Tata Sons'
  },
  {
    label: 'Dr. Anil Kumar',
    sub_label: 'Moderator',
    image: 'https://api.srcouncil.in/media/meta_content/Dr._Anil_Kumar_Moderator.jpg',
    extra_content: 'Former Director Environment, Govt. of NCT of Delhi'
  },
  {
    label: 'Mr. Praveen Garg, IAS (Retd.)',
    sub_label: 'Panelist',
    image: 'https://api.srcouncil.in/media/meta_content/Mr._Praveen_Garg_Panelist.jpg',
    extra_content: 'Special Secretary, Ministry of Environment, Forest and Climate Change, Govt. of India'
  },
  {
    label: 'Mr. S. Rajesh, IFS',
    sub_label: 'Panelist',
    image: 'https://api.srcouncil.in/media/meta_content/Rajesh_S_IFS_Panelist_SKLYOwz.jpg',
    extra_content: 'Chief Conservator of Forests (Environment and Climate Change), Government of Arunachal'
  },
  {
    label: 'Peepal Baba (Swami Prem Parivartan)',
    sub_label: 'Panelist',
    image: 'https://api.srcouncil.in/media/meta_content/Peepal_Baba_Swami_Prem_Parivartan_Panelist.jpg',
    extra_content: 'Environmentalist'
  },
  {
    label: 'Mr. Gaurav Chopra',
    sub_label: 'Panelist',
    image: 'https://api.srcouncil.in/media/meta_content/Mr._Gaurav_Chopra_Panelist.jpg',
    extra_content: 'India Director, Global Environmental Protection Drive'
  },
  {
    label: 'Mr. Aashish Beergi',
    sub_label: 'Panelist',
    image: 'https://api.srcouncil.in/media/meta_content/Aashish_Beergi_Panelist.jpg',
    extra_content: 'Founder & CEO, The Mash Project Foundation'
  },
  {
    label: 'Mr. Harshad Gupta',
    sub_label: 'Panelist',
    image: 'https://api.srcouncil.in/media/meta_content/Mr._Harshad_Gupta.jpg',
    extra_content: 'Founder & Director, Ecochirp Foundation'
  }
]
    //this.$store.commit("main/SET_HOME_DATA", this.posts)

  },
  data: () => ({
    data: []
  })
}
</script>
<style media="screen">
.v-image__image {
  background-size: 100% 100%;
}

.v-card__text,
.v-card__title {
  word-break: normal;
  /* maybe !important  */
}
</style>
