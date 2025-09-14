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
                Tender View
              </h1>
              <p class="headline white--text">
                View all the tender opportunities
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
            <!-- <h2 class="text-h4 font-weight-bold textColor--text mb-6">
              Tender List
            </h2> -->
            
            <!-- Tenders Table -->
            <v-card elevation="2">
              <v-card-title class="primary--text">
                <v-icon left>mdi-file-document-multiple</v-icon>
                 Tenders
              </v-card-title>
              
              <v-data-table
                :headers="headers"
                :items="liveTenders"
                :items-per-page="10"
                class="elevation-0"
                :loading="loading"
              >
                <!-- Sr.No Column -->
                <template v-slot:item.srNo="{ index }">
                  {{ index + 1 }}
                </template>
  
                <!-- Title Column -->
                <template v-slot:item.title="{ item }">
                  <div class="font-weight-medium textColor--text d-flex align-center">
                    <span>{{ item.title }}</span>
                    <v-tooltip v-if="item.status === 'Live Now' && isTenderLive(item)" bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <div 
                          v-bind="attrs"
                          v-on="on"
                          class="d-flex align-center ml-2"
                        >
                          <span 
                            :class="getBlinkerClass(item)"
                            class="live-text-blinker mr-1"
                          >
                            LIVE
                          </span>
                         
                        </div>
                      </template>
                      <span>{{ getBlinkerTooltip(item) }}</span>
                    </v-tooltip>
                  </div>
                  <div class="caption grey--text">
                    Tender ID: {{ item.tenderId }}
                  </div>
                </template>
  
                <!-- Starting Date Column -->
                <template v-slot:item.startingDate="{ item }">
                  <div class="text-body-2">
                    {{ formatDate(item.startingDate) }}
                  </div>
                </template>
  
                <!-- Ending Date Column -->
                <template v-slot:item.endingDate="{ item }">
                  <div class="text-body-2">
                    {{ formatDate(item.endingDate) }}
                  </div>
                </template>
  
                <!-- Status Column with Live Blinker -->
                <template v-slot:item.status="{ item }">
                  <div class="d-flex align-center">
                    <v-chip
                      :color="getStatusColor(item.status)"
                      :text-color="getStatusTextColor(item.status)"
                      small
                      class="font-weight-medium"
                    >
                      {{ item.status }}
                    </v-chip>                    
                  </div>
                </template>
  
                <!-- Download PDF Column with Date Validation -->
                <template v-slot:item.actions="{ item }">
                  <v-btn
                    :disabled="!canDownloadTender(item)"
                    color="primary"
                    small
                    outlined
                    :href="canDownloadTender(item) ? item.pdfUrl : null"
                    target="_blank"
                    :loading="item.downloading"
                    @click="downloadPdf(item)"
                  >
                    <v-icon left small>mdi-download</v-icon>
                    PDF
                  </v-btn>
                  <!-- Tooltip for disabled state -->
                  <v-tooltip v-if="!canDownloadTender(item)" bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon 
                        v-bind="attrs"
                        v-on="on"
                        small 
                        color="grey"
                        class="ml-2"
                      >
                        mdi-information
                      </v-icon>
                    </template>
                    <span>{{ getDownloadTooltipText(item) }}</span>
                  </v-tooltip>
                </template>
  
                <!-- No data template -->
                <template v-slot:no-data>
                  <div class="text-center pa-8">
                    <v-icon size="64" color="grey lighten-1" class="mb-4">
                      mdi-file-document-outline
                    </v-icon>
                    <h3 class="text-h5 grey--text">No Tenders Available</h3>
                    <p class="text-body-1 grey--text">
                      There are currently no active tenders. Please check back later.
                    </p>
                  </div>
                </template>
              </v-data-table>
            </v-card>
  
            <!-- Upload Section -->
            <!-- <v-card class="mt-6" elevation="2">
              <v-card-title class="primary--text">
                <v-icon left>mdi-upload</v-icon>
                Submit Tender Documents
              </v-card-title>
              <v-card-text>
                <p class="text-body-1 mb-4">
                  Upload your tender documents and proposals through our secure portal.
                </p>
                <v-btn
                  color="primary"
                  large
                  href="https://courses.srcouncil.in/"
                  target="_blank"
                >
                  <v-icon left>mdi-upload</v-icon>
                  Go to Upload Portal
                </v-btn>
              </v-card-text>
            </v-card> -->
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TendersPage',
    head() {
      return {
        title: 'Tenders - SRCouncil',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'View current and upcoming tender opportunities at SRCouncil. Download tender documents and submit proposals.'
          }
        ]
      }
    },
    data() {
      return {
        loading: false,
        headers: [
          {
            text: 'Sr.No',
            value: 'srNo',
            sortable: false,
            width: '80px',
            align: 'center'
          },
          {
            text: 'Title',
            value: 'title',
            sortable: true,
            width: '300px'
          },
          {
            text: 'Starting Date',
            value: 'startingDate',
            sortable: true,
            width: '150px'
          },
          {
            text: 'Closing Date',
            value: 'endingDate',
            sortable: true,
            width: '150px'
          },
          {
            text: 'Status',
            value: 'status',
            sortable: true,
            width: '120px',
            align: 'center'
          },
          {
            text: 'Download PDF',
            value: 'actions',
            sortable: false,
            width: '150px',
            align: 'center'
          }
        ],
        tenders: [
          {
            tenderId: 'SRC-T-2024-001',
            title: 'Space Labs',
            startingDate: '2025-09-14',
            endingDate: '2025-09-28',
            status: 'Live Now',
            pdfUrl: '/static/placeholder-document.pdf',
            downloading: false
          },
        ]
      }
    },
    computed: {
      // Computed property to get current live tenders with updated status
      liveTenders() {
        return this.tenders.map(tender => {
          const now = new Date()
          const startDate = new Date(tender.startingDate)
          const endDate = new Date(tender.endingDate)
          
          let status = tender.status
          if (now >= startDate && now <= endDate) {
            status = 'Live Now'
          } else if (now < startDate) {
            status = 'Upcoming'
          } else if (now > endDate) {
            status = 'Closed'
          }
          
          return {
            ...tender,
            status: status
          }
        })
      }
    },
    mounted() {
      // Update tender statuses every minute
      this.statusUpdateInterval = setInterval(() => {
        this.$forceUpdate()
      }, 60000) // Update every minute
    },
    beforeDestroy() {
      // Clean up interval when component is destroyed
      if (this.statusUpdateInterval) {
        clearInterval(this.statusUpdateInterval)
      }
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      },
      getStatusColor(status) {
        const statusColors = {
          'Live Now': 'success',
          'Closed': 'error',
          'Allotted': 'info',
          'Upcoming': 'warning'
        }
        return statusColors[status] || 'grey'
      },
      getStatusTextColor(status) {
        const textColors = {
          'Live Now': 'white',
          'Closed': 'white',
          'Allotted': 'white',
          'Upcoming': 'white'
        }
        return textColors[status] || 'white'
      },
      // Check if tender is currently live (between start and end dates)
      isTenderLive(item) {
        const now = new Date()
        const startDate = new Date(item.startingDate)
        const endDate = new Date(item.endingDate)
        
        return now >= startDate && now <= endDate
      },
      // Check if tender can be downloaded (only when live)
      canDownloadTender(item) {
        return item.pdfUrl && this.isTenderLive(item)
      },
      // Get tooltip text for disabled download button
      getDownloadTooltipText(item) {
        const now = new Date()
        const startDate = new Date(item.startingDate)
        const endDate = new Date(item.endingDate)
        
        if (!item.pdfUrl) {
          return 'PDF not available'
        } else if (now < startDate) {
          return `Download available from ${this.formatDate(item.startingDate)}`
        } else if (now > endDate) {
          return `Download closed on ${this.formatDate(item.endingDate)}`
        } else {
          return 'Download available'
        }
      },
      downloadPdf(item) {
      ...