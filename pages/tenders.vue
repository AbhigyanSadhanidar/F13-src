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
                Tender Upload
              </h1>
              <p class="headline white--text">
                Admin panel for adding new tender opportunities
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
            <h2 class="text-h4 font-weight-bold textColor--text mb-6">
              Tender List
            </h2>
            
            <!-- Tenders Table -->
            <v-card elevation="2">
              <v-card-title class="primary--text">
                <v-icon left>mdi-file-document-multiple</v-icon>
                Active Tenders
              </v-card-title>
              
              <v-data-table
                :headers="headers"
                :items="tenders"
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
                    <span 
                      v-if="item.status === 'Live Now' && isTenderLive(item)"
                      class="live-blinker ml-2"
                    ></span>
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
            startingDate: '2025-09-13',
            endingDate: '2025-09-28',
            status: 'Live Now',
            pdfUrl: 'https://cdn.srcouncil.in/media/drive/sample-tender-001.pdf',
            downloading: false
          },
         
        ]
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
        if (!this.canDownloadTender(item)) return
        
        // Set loading state
        this.$set(item, 'downloading', true)
        
        // Simulate download process
        setTimeout(() => {
          this.$set(item, 'downloading', false)
          // In a real application, you would trigger the actual download here
          window.open(item.pdfUrl, '_blank')
        }, 1000)
      }
    }
  }
  </script>
  
  <style scoped>
  .v-data-table {
    border-radius: 8px;
  }
  
  .v-card {
    border-radius: 8px;
  }
  
  .v-chip {
    font-weight: 500;
  }
  
  /* Custom hover effects */
  .v-data-table tbody tr:hover {
    background-color: rgba(29, 58, 124, 0.04) !important;
  }
  
  /* Status chip styling */
  .v-chip--success {
    background-color: #4CAF50 !important;
  }
  
  .v-chip--error {
    background-color: #F44336 !important;
  }
  
  .v-chip--info {
    background-color: #2196F3 !important;
  }
  
  .v-chip--warning {
    background-color: #FF9800 !important;
  }
  
  /* Live Blinker Animation */
  .live-blinker {
    width: 8px;
    height: 8px;
    background-color: #4CAF50;
    border-radius: 50%;
    animation: blink 1.5s infinite;
  }
  
  @keyframes blink {
    0%, 50% {
      opacity: 1;
      transform: scale(1);
    }
    51%, 100% {
      opacity: 0.3;
      transform: scale(0.8);
    }
  }
  
  /* Disabled button styling */
  .v-btn--disabled {
    opacity: 0.4 !important;
  }
  </style>