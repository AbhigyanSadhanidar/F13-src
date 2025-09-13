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
    this.data = await fetch(`https://api.srcouncil.in/utility/meta/?content_category=1`, { 'headers': { "X-API-KEY": "T0uf0wOD.FNxBVbSAFWx8z5TY6NaU38J36OzEobeJ" } })
      .then((res) => res.json())


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
