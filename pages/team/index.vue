<template>
  <div>
    <p v-if="$fetchState.pending">Fetching data...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
      <v-card class="elevation-0 transparent"  v-else>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8">
                <v-card class="elevation-0 mb-5 mt-5 " tile>
                    <v-card-title class="justify-center font-weight-bold textColor--text text-h4">
                        Team
                    </v-card-title>
                    <v-container fluid>
                      <v-row align="center" justify="center">
                          <v-col cols="12" sm="12" md="3" xl="3" v-for="item in data" :key="item.id">
                              <team-card :item="item" />
                          </v-col>
                      </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
      </v-card>
  </div>
</template>
<script>
export default {
  name: "",
  layout:"general",
  head: {
    titleTemplate: 'Social Responsibility Council - Team',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: 'Meta description'
      }
    ]
  },
  fetchOnServer: true,
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= (Date.now() - 30000)) {
      this.$fetch()
    }
  },
  async fetch() {
    // Load static data instead of API call
    this.data = [
  {
    id: 22,
    image: {
      thumbnail: '/team/Arun_Khurana_copy-thumbnail-100x100-70.jpg',
      full_size: '/team/Arun_Khurana_copy.jpg',
      small_square_crop: '/team/Arun_Khurana_copy-crop-c0-5__0-5-50x50-70.jpg',
      medium_square_crop: '/team/Arun_Khurana_copy-crop-c0-5__0-5-500x500-70.jpg'
    },
    name: 'Arun Khurana',
    description: '',
    department: { id: 1, label: 'Founder', user: 1 }
  },
  {
    id: 23,
    image: {
      thumbnail: '/team/SP_Sing_copy-thumbnail-100x100-70.jpg',
      full_size: '/team/SP_Sing_copy.jpg',
      small_square_crop: '/team/SP_Sing_copy-crop-c0-5__0-5-50x50-70.jpg',
      medium_square_crop: '/team/SP_Sing_copy-crop-c0-5__0-5-500x500-70.jpg'
    },
    name: 'S. P. Singh',
    description: '',
    department: { id: 2, label: 'Finance', user: 1 }
  },
  {
    id: 24,
    image: {
      thumbnail: '/team/Sanjay_copy-thumbnail-100x100-70.jpg',
      full_size: '/team/Sanjay_copy.jpg',
      small_square_crop: '/team/Sanjay_copy-crop-c0-5__0-5-50x50-70.jpg',
      medium_square_crop: '/team/Sanjay_copy-crop-c0-5__0-5-500x500-70.jpg'
    },
    name: 'Sanjai Srivastava',
    description: '',
    department: { id: 5, label: 'Content', user: 1 }
  },
  {
    id: 25,
    image: {
      thumbnail: '/team/Aman_Deep_copy-thumbnail-100x100-70.jpg',
      full_size: '/team/Aman_Deep_copy.jpg',
      small_square_crop: '/team/Aman_Deep_copy-crop-c0-5__0-5-50x50-70.jpg',
      medium_square_crop: '/team/Aman_Deep_copy-crop-c0-5__0-5-500x500-70.jpg'
    },
    name: 'Amanpreet Singh',
    description: '',
    department: { id: 3, label: 'Strategy', user: 1 }
  },
  {
    id: 26,
    image: {
      thumbnail: '/team/ssssss-thumbnail-100x100.png',
      full_size: '/team/ssssss.png',
      small_square_crop: '/team/ssssss-crop-c0-5__0-5-50x50.png',
      medium_square_crop: '/team/ssssss-crop-c0-5__0-5-500x500.png'
    },
    name: 'Saurabh Nanda',
    description: '',
    department: { id: 18, label: "Hon' Consultant", user: 3 }
  },
  {
    id: 27,
    image: {
      thumbnail: '/team/Sourav_copy-thumbnail-100x100-70.jpg',
      full_size: '/team/Sourav_copy.jpg',
      small_square_crop: '/team/Sourav_copy-crop-c0-5__0-5-50x50-70.jpg',
      medium_square_crop: '/team/Sourav_copy-crop-c0-5__0-5-500x500-70.jpg'
    },
    name: 'Sourav Gola',
    description: '',
    department: { id: 11, label: 'Technology', user: 1 }
  },
  {
    id: 28,
    image: {
      thumbnail: '/team/S_N_Singh_copy-thumbnail-100x100-70.jpg',
      full_size: '/team/S_N_Singh_copy.jpg',
      small_square_crop: '/team/S_N_Singh_copy-crop-c0-5__0-5-50x50-70.jpg',
      medium_square_crop: '/team/S_N_Singh_copy-crop-c0-5__0-5-500x500-70.jpg'
    },
    name: 'S. N. Singh',
    description: '',
    department: { id: 6, label: 'Legal', user: 1 }
  },
  {
    id: 29,
    image: {
      thumbnail: '/team/Kapil_copy-thumbnail-100x100-70.jpg',
      full_size: '/team/Kapil_copy.jpg',
      small_square_crop: '/team/Kapil_copy-crop-c0-5__0-5-50x50-70.jpg',
      medium_square_crop: '/team/Kapil_copy-crop-c0-5__0-5-500x500-70.jpg'
    },
    name: 'Kapil Kumar',
    description: '',
    department: { id: 12, label: 'Operations', user: 1 }
  },
  {
    id: 30,
    image: {
      thumbnail: '/team/Priyanshu_copy-thumbnail-100x100-70.jpg',
      full_size: '/team/Priyanshu_copy.jpg',
      small_square_crop: '/team/Priyanshu_copy-crop-c0-5__0-5-50x50-70.jpg',
      medium_square_crop: '/team/Priyanshu_copy-crop-c0-5__0-5-500x500-70.jpg'
    },
    name: 'Priyanshu Kumar',
    description: '',
    department: { id: 15, label: 'Operations', user: 1 }
  },
  {
    id: 31,
    image: {
      thumbnail: '/team/Daksh_Khurana_copy-thumbnail-100x100-70.jpg',
      full_size: '/team/Daksh_Khurana_copy.jpg',
      small_square_crop: '/team/Daksh_Khurana_copy-crop-c0-5__0-5-50x50-70.jpg',
      medium_square_crop: '/team/Daksh_Khurana_copy-crop-c0-5__0-5-500x500-70.jpg'
    },
    name: 'Daksh Khurana',
    description: '',
    department: { id: 14, label: 'Operations', user: 1 }
  },
  {
    id: 32,
    image: {
      thumbnail: '/team/Mahesh_copy-thumbnail-100x100-70.jpg',
      full_size: '/team/Mahesh_copy.jpg',
      small_square_crop: '/team/Mahesh_copy-crop-c0-5__0-5-50x50-70.jpg',
      medium_square_crop: '/team/Mahesh_copy-crop-c0-5__0-5-500x500-70.jpg'
    },
    name: 'Mahesh Mamgain',
    description: '',
    department: { id: 16, label: 'Human Resource', user: 1 }
  },
  {
    id: 33,
    image: {
      thumbnail: '/team/Vipin_Khurana_copy-thumbnail-100x100-70.jpg',
      full_size: '/team/Vipin_Khurana_copy.jpg',
      small_square_crop: '/team/Vipin_Khurana_copy-crop-c0-5__0-5-50x50-70.jpg',
      medium_square_crop: '/team/Vipin_Khurana_copy-crop-c0-5__0-5-500x500-70.jpg'
    },
    name: 'Vipin Khurana',
    description: '',
    department: { id: 16, label: 'Human Resource', user: 1 }
  },
  {
    id: 34,
    image: {
      thumbnail: '/team/Jeetandr_copy-thumbnail-100x100-70.jpg',
      full_size: '/team/Jeetandr_copy.jpg',
      small_square_crop: '/team/Jeetandr_copy-crop-c0-5__0-5-50x50-70.jpg',
      medium_square_crop: '/team/Jeetandr_copy-crop-c0-5__0-5-500x500-70.jpg'
    },
    name: 'Jitendra Gupta',
    description: '',
    department: { id: 17, label: 'Logistics', user: 1 }
  },
  {
    id: 35,
    image: {
      thumbnail: '/team/Mukesh_copy-thumbnail-100x100-70.jpg',
      full_size: '/team/Mukesh_copy.jpg',
      small_square_crop: '/team/Mukesh_copy-crop-c0-5__0-5-50x50-70.jpg',
      medium_square_crop: '/team/Mukesh_copy-crop-c0-5__0-5-500x500-70.jpg'
    },
    name: 'Mukesh Kumar',
    description: '',
    department: { id: 17, label: 'Logistics', user: 1 }
  }
]

    //console.log(this.posts)
    //this.$store.commit("main/SET_HOME_DATA", this.posts)

  },
  data: () => ({
    data:[]
  })
}
</script>
<style lang="css" scoped>

</style>
