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
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="2">
            <v-card-title class="primary--text">
              <v-icon left>mdi-plus-circle</v-icon>
              Add New Tender
            </v-card-title>
            
            <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
              <v-card-text>
                <v-row>
                  <!-- Tender ID -->
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.tenderId"
                      label="Tender ID *"
                      :rules="tenderIdRules"
                      required
                      outlined
                      prepend-icon="mdi-identifier"
                    ></v-text-field>
                  </v-col>

                  <!-- Title -->
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.title"
                      label="Tender Title *"
                      :rules="titleRules"
                      required
                      outlined
                      prepend-icon="mdi-format-title"
                    ></v-text-field>
                  </v-col>

                  <!-- Description -->
                  <v-col cols="12">
                    <v-textarea
                      v-model="form.description"
                      label="Description *"
                      :rules="descriptionRules"
                      required
                      outlined
                      rows="4"
                      prepend-icon="mdi-text"
                    ></v-textarea>
                  </v-col>

                  <!-- Starting Date -->
                  <v-col cols="12" md="6">
                    <v-menu
                      v-model="startDateMenu"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="form.startingDate"
                          label="Starting Date *"
                          :rules="dateRules"
                          required
                          outlined
                          readonly
                          prepend-icon="mdi-calendar"
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="form.startingDate"
                        @input="startDateMenu = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>

                  <!-- Ending Date -->
                  <v-col cols="12" md="6">
                    <v-menu
                      v-model="endDateMenu"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="form.endingDate"
                          label="Ending Date *"
                          :rules="endDateRules"
                          required
                          outlined
                          readonly
                          prepend-icon="mdi-calendar"
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="form.endingDate"
                        @input="endDateMenu = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>

                  <!-- Status -->
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="form.status"
                      :items="statusOptions"
                      label="Status *"
                      :rules="statusRules"
                      required
                      outlined
                      prepend-icon="mdi-flag"
                    ></v-select>
                  </v-col>

                  <!-- PDF Upload -->
                  <v-col cols="12">
                    <v-file-input
                      v-model="form.pdfFile"
                      label="Upload PDF Document *"
                      :rules="pdfRules"
                      required
                      outlined
                      prepend-icon="mdi-file-pdf"
                      accept=".pdf"
                      show-size
                      @change="handleFileUpload"
                    ></v-file-input>
                  </v-col>

                  <!-- PDF URL (Alternative) -->
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.pdfUrl"
                      label="PDF URL (Alternative to file upload)"
                      outlined
                      prepend-icon="mdi-link"
                      hint="Use this if you want to provide a direct URL instead of uploading a file"
                      persistent-hint
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions class="pa-4">
                <v-spacer></v-spacer>
                <v-btn
                  color="grey"
                  large
                  outlined
                  @click="resetForm"
                >
                  <v-icon left>mdi-refresh</v-icon>
                  Reset
                </v-btn>
                <v-btn
                  color="primary"
                  large
                  :disabled="!valid || loading"
                  :loading="loading"
                  @click="submitForm"
                >
                  <v-icon left>mdi-upload</v-icon>
                  Upload Tender
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>

          <!-- Success/Error Messages -->
          <v-snackbar
            v-model="snackbar.show"
            :color="snackbar.color"
            :timeout="snackbar.timeout"
            top
          >
            {{ snackbar.message }}
            <template v-slot:action="{ attrs }">
              <v-btn
                text
                v-bind="attrs"
                @click="snackbar.show = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'TenderUploadPage',
  head() {
    return {
      title: 'Tender Upload - SRCouncil Admin',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Admin panel for uploading and managing tender opportunities at SRCouncil.'
        }
      ]
    }
  },
  data() {
    return {
      valid: false,
      loading: false,
      startDateMenu: false,
      endDateMenu: false,
      form: {
        tenderId: '',
        title: '',
        description: '',
        startingDate: '',
        endingDate: '',
        status: '',
        pdfFile: null,
        pdfUrl: ''
      },
      statusOptions: [
        { text: 'Live Now', value: 'Live Now' },
        { text: 'Closed', value: 'Closed' },
      ],
      snackbar: {
        show: false,
        message: '',
        color: 'success',
        timeout: 5000
      },
      // Validation rules
      tenderIdRules: [
        v => !!v || 'Tender ID is required',
        v => (v && v.length >= 3) || 'Tender ID must be at least 3 characters'
      ],
      titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length >= 10) || 'Title must be at least 10 characters'
      ],
      descriptionRules: [
        v => !!v || 'Description is required',
        v => (v && v.length >= 20) || 'Description must be at least 20 characters'
      ],
      dateRules: [
        v => !!v || 'Date is required'
      ],
      endDateRules: [
        v => !!v || 'Ending date is required',
        v => {
          if (!v || !this.form.startingDate) return true
          return new Date(v) > new Date(this.form.startingDate) || 'Ending date must be after starting date'
        }
      ],
      statusRules: [
        v => !!v || 'Status is required'
      ],
      pdfRules: [
        v => {
          if (!v && !this.form.pdfUrl) return 'Either PDF file or PDF URL is required'
          if (v && v.type !== 'application/pdf') return 'File must be a PDF'
          return true
        }
      ]
    }
  },
  methods: {
    handleFileUpload(file) {
      if (file && file.type !== 'application/pdf') {
        this.showSnackbar('Please select a valid PDF file', 'error')
        this.form.pdfFile = null
      }
    },
    async submitForm() {
      if (!this.$refs.form.validate()) {
        this.showSnackbar('Please fill in all required fields correctly', 'error')
        return
      }

      this.loading = true

      try {
        
        await this.saveTenderToAWS({
          tenderId: this.form.tenderId,
          title: this.form.title,
          description: this.form.description,
          startDate: this.form.startingDate,
          endDate: this.form.endingDate,
          status: this.form.status,
          pdfUrl: this.form.pdfUrl
        });

        
        await this.uploadTender();

        this.showSnackbar('Tender uploaded successfully!', 'success')
        this.resetForm()
      } catch (error) {
        console.error('Upload error:', error)
        this.showSnackbar('Failed to upload tender. Please try again.', 'error')
      } finally {
        this.loading = false
      }
    },
    async uploadTender() {
      
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Uploading tender (simulated):', this.form)
          resolve({ success: true })
        }, 2000)
      })
    },
  

    async saveTenderToAWS(tenderData) {
      try {
        const response = await fetch('https://fekd1z9eg4.execute-api.us-east-1.amazonaws.com/src', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(tenderData)
        });
        if (!response.ok) throw new Error('Failed to save tender to AWS');
        const result = await response.json();
        console.log('Tender saved to DynamoDB:', result);
      } catch (err) {
        console.error('Error saving tender:', err);
        throw err;
      }
    },
    resetForm() {
      this.$refs.form.reset()
      this.form = {
        tenderId: '',
        title: '',
        description: '',
        startingDate: '',
        endingDate: '',
        status: '',
        pdfFile: null,
        pdfUrl: ''
      }
    },
    showSnackbar(message, color = 'success') {
      this.snackbar = {
        show: true,
        message,
        color,
        timeout: 5000
      }
    }
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 8px;
}

.v-form {
  padding: 0;
}

.v-date-picker {
  border-radius: 8px;
}

.v-input--is-focused .v-label {
  color: #1D3A7C !important;
}

.v-input--is-focused .v-input__control .v-input__slot {
  border-color: #1D3A7C !important;
}

.v-btn--large {
  min-width: 150px;
}

.v-file-input .v-input__control {
  min-height: 56px;
}
</style>
