<template>
  <div>
    <v-footer
      :dark="$vuetify.theme.dark == true ? false : true"

    padless
  >
    <v-card
      flat
      tile
      class="text-center"
      width="100%"
    >


    <v-card-text class="pt-0 text-left text-md-center transparent">
        <v-expansion-panels accordion v-model="panel" multiple>
          <v-col v-for="(item,i) in items" :key="i" cols="12" sm="12" md="2" lg="2">
            <v-expansion-panel >
              <h3 class="d-none d-md-block py-2 text-center white--text font-weight-bold text-capitalize body-1 my-1">{{ item.name }}</h3>
              <v-expansion-panel-header class="d-md-none white--text font-weight-bold text-capitalize body-2 my-1">{{ item.name }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <!-- <li v-for="tag in item.tags">
                  <a v-bind:href="tag.url" class="white--text">{{tag.urlname}} </a>
                </li> -->
                <v-list  >
                  <v-list-item v-for="(tag,index) in item.tags" :key="index" class="text-center justify-center" @click="$router.push(tag.url)">
                    <!-- <v-list-title >{{tag.urlname}}</v-list-title> -->
                    <v-list-item-title v-text="tag.urlname" class="text-center white--text"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-col>
          <v-col  cols="12" sm="12" md="2" lg="2">
            <v-expansion-panel>
              <h3 class="d-none d-md-block py-2 white--text font-weight-bold text-capitalize body-2 my-1">Contact Us</h3>
              <v-expansion-panel-header class="d-md-none">Contact Us</v-expansion-panel-header>
              <v-expansion-panel-content>
                <!-- <li v-for="tag in item.tags">
                  <a v-bind:href="tag.url" class="white--text">{{tag.urlname}} </a>
                </li> -->
                <v-list >
                  <v-list-item  class="text-center justify-center">
                    <v-list-title href="mailTo:info@srcouncil.in" target="_blank">
                      <v-list-item-title >
                        info@srcouncil.in
                        <!-- <a href="mailTo:info@srcouncil.in" class="white--text" target="_blank">info@srcouncil.in</a> -->
                      </v-list-item-title>

                    </v-list-title>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-col>
          <!-- <v-col
            class="transparent elevation-0  text-center white--text"
            cols="12" sm="12" md="3" lg="2"
          >
          <v-card-title class="justify-center">
            Contact Us
          </v-card-title>
          <v-card class="transparent elevation-0 body-1 center--text">
             <a href="mailTo:info@srcouncil.in" class="white--text">info@srcouncil.in</a>
          </v-card>
        </v-col> -->
          <v-col cols="12" sm="12" md="4" lg="3">
            <client-only>
            <embed-twitter/>
          </client-only>

          </v-col>
        </v-expansion-panels>




      </v-card-text>

      <v-row
      align="center"
      justify="center"
      no-gutters
    >
    <v-btn
      v-for="(link,index) in links"
      :key="index"
      color="white"
      text
      :to="link.to"
      rounded

      class="white--text font-weight-bold text-capitalize body-2 my-1"
    >
      {{ link.name }}
    </v-btn>
    </v-row>
      <!-- <v-col
        class="primary py-4 text-center white--text"
        cols="12"
      >
      <v-card class="transparent elevation-0 body-1">
        Contact Us at: <a href="mailTo:info@srcouncil.in" class="white--text">info@srcouncil.in</a>
      </v-card>
    </v-col> -->
      <v-row align="center" jsutify="center">
        <v-col
          class="primary py-4 text-center white--text"
          cols="12" sm="12" md="6"
        >
        <v-icon @click="setTheme">{{defaultIcon}}</v-icon>
        Copyright ©  {{ new Date().getFullYear() }} — All Right Reserved


        </v-col>

        <v-col
          class="primary py-4 text-center white--text"
          cols="12" sm="12" md="6"
        >

          Design & Developed by <a href="https://digivaarta.com" class="white--text">Digivaarta India Pvt. Ltd.</a>


        </v-col>
      </v-row>

    </v-card>
  </v-footer>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    panel: [],
    links: [
        {name:"Disclaimer",to:"/disclaimer"},
        {name:"Terms & Conditions",to:"/terms-and-conditions"},
        {name:"Privacy Policy",to:"/privacy-policy"},

      ],
    icons: [
        {icon:'mdi-facebook',link:'https://twitter.com/Srcdelhi',key:1},
        {icon:'mdi-twitter',link:'https://twitter.com/Srcdelhi',key:2},
        {icon:'mdi-linkedin',link:'https://twitter.com/Srcdelhi',key:3},
        {icon:'mdi-instagram',link:'https://twitter.com/Srcdelhi',key:4},

      ],
      theme: false,
      lightIcon: "mdi-brightness-7",
      darkIcon: "mdi-brightness-4",
      defaultIcon: "mdi-brightness-7",
      items: [
        // {
        //   name: "Capabilities",
        //   tags: [
        //     {
        //       urlname: "Consulting/Advisory",
        //       url: "/capabilities/consulting_and_advisory/"
        //     },
        //     {
        //       urlname: "Environment,Social & Governance",
        //       url: "/capabilities/esg/"
        //     },
        //     {
        //       urlname: "Digital Documentation",
        //       url: "/capabilities/digital_documentation/"
        //     },
        //     {
        //       urlname: "Documentry",
        //       url: "/capabilities/documentry/"
        //     },
        //     {
        //       urlname: "Partnerships",
        //       url: "/capabilities/partnerships/"
        //     }
        //   ]
        // },
        { name: "Quick Links",
         tags: [
           { urlname: "About", url: "/about/src/" },
           // { urlname: "Careers", url: "/career/"},
           { urlname: "Team", url: "/team/"},
           { urlname: "Volunteer", url: "/membership/voluntary/"},
           // { urlname: "CSR", url: "/csr/"},
         ]
        },
        { name: "Media",
         tags: [
           { urlname: "Press Release", url: "#!" },
           { urlname: "Events", url: "#!" },
           // { urlname: "Gallery", url: "#!" },

         ]
        }
      ]
  }),
  mounted(){
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      if (window.innerWidth >= 960) {
        this.panel = [...Array(4).keys()].map((k, i) => i);
      } else {
        this.panel = [];
      }
    },
    setTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.defaultIcon = this.$vuetify.theme.dark == true ? this.darkIcon : this.lightIcon;
    }
  }
}
</script>
<style lang="css" scoped>

@media (min-width:960px) {
    .v-expansion-panel:before {
        box-shadow: none !important;
    }
    .v-expansion-panel:not(:first-child)::after {
        border-top: none;
    }
}
.resize {
  text-align: center;
}
.resize {
  margin-top: 3rem;
  font-size: 1.25rem;
}
/*RESIZESCREEN ANIMATION*/
.right {
  animation: rightanime 1s linear infinite;
}

.left {
  animation: leftanime 1s linear infinite;
}
@keyframes rightanime {
  50% {
    transform: translateX(10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(10px);
    opacity: 0;
  }
}
@keyframes leftanime {
  50% {
    transform: translateX(-10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(-10px);
    opacity: 0;
  }
}

</style>
