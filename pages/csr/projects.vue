<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="pa-0">
      <v-img
        :src="require('~/static/icon.png')"
        height="250"
        gradient="to top right, rgba(29, 58, 124, 1), rgba(44, 73, 141, 0.8)"
      >
        <v-container fill-height>
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
              <h1 class="display-2 font-weight-bold white--text mb-4">
                CSR Projects
              </h1>
              <p class="headline white--text">
                Corporate Social Responsibility Initiatives & Impact
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-container>

    <!-- Main Content -->
    <v-container class="py-8">
      <v-row>
        <v-col cols="12">
          <!-- Projects Grid -->
          <v-row>
            <v-col 
              v-for="project in csrProjects" 
              :key="project.id"
              cols="12"
              md="6"
              lg="4"
            >
              <v-card 
                elevation="3" 
                class="project-card h-100"
                hover
              >
                <v-card-title class="primary--text text-h6">
                  <v-icon left color="primary">mdi-domain</v-icon>
                  {{ project.projectName }}
                </v-card-title>
                
                <v-card-subtitle class="text-body-2 grey--text">
                  <v-icon left small>mdi-office-building</v-icon>
                  {{ project.psuName }}
                </v-card-subtitle>

                <v-card-text>
                  <p class="text-body-2 mb-3">
                    {{ project.description }}
                  </p>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    :href="project.dashboardLink"
                    target="_blank"
                    color="primary"
                    outlined
                    small
                    :disabled="!project.dashboardLink"
                  >
                    <v-icon left small>mdi-chart-line</v-icon>
                    View Dashboard
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <!-- No Projects Message -->
          <v-card v-if="csrProjects.length === 0" elevation="2" class="mt-6">
            <v-card-text class="text-center pa-8">
              <v-icon size="64" color="grey lighten-1" class="mb-4">
                mdi-folder-open-outline
              </v-icon>
              <h3 class="text-h5 grey--text">No CSR Projects Available</h3>
              <p class="text-body-1 grey--text">
                CSR projects will be listed here as they become available.
              </p>
            </v-card-text>
          </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CSRProjectsPage',
  head() {
    return {
      title: 'CSR Projects',
    }
  },
  data() {
    return {
      csrProjects: [
      {
          id: 1,
          projectName: 'Space Lab Project-Under CSR initiative of BPCL',
          psuName: 'Bharat Petroleum Corporation Limited (BPCL)',
          description: 'ISRO-recognized Space Tutor organizations for the establishment of “Space Labs” in EMRS.',
          dashboardLink: 'https://nstfds.vercel.app/login'
        },
      ]
    }
  },
}
</script>

<style scoped>
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

.v-card {
  border-radius: 12px;
}

.v-chip {
  font-weight: 500;
}

/* Custom hover effects */
.v-card:hover {
  background-color: rgba(29, 58, 124, 0.02) !important;
}

/* Statistics styling */
.text-h4 {
  font-size: 2.5rem !important;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .text-h4 {
    font-size: 2rem !important;
  }
}
</style>
