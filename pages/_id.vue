<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="8">
        <v-card class="elevation-0 mt-4">

          <v-card-text v-html="data.content" class="font-weight-medium text">

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "",
  layout:"general",
  watch: {
    '$route.query': '$fetch'
  },
  fetchOnServer: false,
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= (Date.now() - 10000)) {
      this.$fetch()
    }
  },
  async fetch() {
    console.log(this.$route)
    this.data = {
    "name": "About Us",
    "content": "<h1><strong>About Us</strong></h1>\r\n<p>&nbsp;</p>\r\n<p>At <strong>SRC</strong>, we are dedicated to advancing sustainability and responsibility across industries, governments, and communities&mdash;both in India and globally. As a trusted advocate and thought leader, we guide organizations in adopting sustainable practices that drive long-term environmental stewardship, social responsibility, and economic growth. We believe in the power of knowledge and collective action to address the pressing challenges of today and build a world where people, planet, and prosperity coexist in harmony.</p>\r\n<p>&nbsp;</p>\r\n<p><strong>Mission</strong></p>\r\n<p>SRC is committed to the ongoing advancement of Indian society through initiatives that promote sustainable development, social responsibility, and empowerment. Our mission is driven by the belief that positive change is possible through knowledge, innovation, and a strong collective will. We aim to achieve our mission through the following objectives:</p>\r\n<ul>\r\n<li>Promoting Knowledge for Sustainable Impact:<br />We strive to create and share knowledge and resources that inspire sustainable environmental practices, foster social responsibility, and empower individuals and communities.</li>\r\n<li>Transforming Challenges into Sustainable Solutions:<br />We firmly believe that every challenge presents an opportunity for sustainable solutions. With the right determination and a proactive \"willpower\" coupled with a \"can-do\" spirit, any obstacle can be overcome in a way that is both responsible and lasting.</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<p><strong>Vision</strong></p>\r\n<ul>\r\n<li>Alignment with Social Concerns:<br />To be an agency whose strategies, policies, and initiatives are consistently aligned with the broader social needs and concerns, ensuring relevance and impact in the communities we serve.</li>\r\n<li>Contributing to Nation-Building:<br />To actively contribute to the nation-building process by undertaking key initiatives in education, healthcare, environmental sustainability, and other socially significant areas.</li>\r\n<li>Enhancing Social Development with Sustainable Solutions:<br />To be a leading agency in enhancing social development by delivering sustainable, long-term solutions that add significant value to societal progress and well-being.</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<p><strong>Our Action Plan:</strong></p>\r\n<p><strong>We as Conscience Keepers of Sustainability and Responsibility</strong></p>\r\n<p>In both the Indian and global contexts, we serve as key advocates for sustainability and responsibility across industrial, political, and social spheres. Our action plan is centered around the following core principles:</p>\r\n<ul>\r\n<li><strong>Embedding Sustainability by Design:</strong><br />We integrate sustainability and responsibility into the very framework of our operations, ensuring these values are central to every project and initiative.</li>\r\n<li><strong>Supporting Corporate Social Responsibility (CSR):</strong><br />As a thought leader and strategic advisor, we assist the corporate sector in fulfilling its CSR obligations, aligning with the United Nations&rsquo; Sustainable Development Goals (SDGs). The UN Global Compact has designated this as the &ldquo;Decade to Deliver,&rdquo; urging accelerated action amid the global climate crisis and post-pandemic recovery.</li>\r\n<li><strong>Driving Sustainable Business Practices:</strong><br />We believe in transforming business practices by embedding sustainability into the design and operations of organizations, creating long-term value while fostering environmental responsibility.</li>\r\n<li><strong>Minimizing Our Environmental Footprint:</strong><br />As a non-profit organization, we acknowledge that our primary environmental impacts stem from greenhouse gas emissions related to travel and electricity use at our offices. We are committed to reducing these impacts and advancing our own sustainability efforts.</li>\r\n</ul>\r\n<p><strong><br />Supporting Industries in Transitioning to Low-Carbon Energy</strong></p>\r\n<ul>\r\n<li>Environmental Sustainability:<br />Help industries reduce ecological footprints and adopt sustainable practices for long-term environmental stewardship.</li>\r\n<li>Net-Zero Emissions Strategies:<br />Develop tailored strategies to help organizations set and achieve ambitious net-zero emissions goals, in line with global standards.</li>\r\n<li>Waste Reduction &amp; Circular Economy:<br />Promote recycling and responsible waste reprocessing to minimize landfill waste and support a circular economy.</li>\r\n<li>Empowering Industry Leaders:<br />Provide learning and development programs to enhance environmental efficiency and foster a culture of sustainability within organizations.</li>\r\n</ul>"
}


  },
  data: () => ({
    data:{}
  })
}
</script>
<style lang="scss" scoped>
</style>
