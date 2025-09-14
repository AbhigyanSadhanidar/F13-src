<template>
<div>
    <div class="page">
  <div class="countdown-col col">
    
  </div>
  <div class="newsletter-col col">
    <div class="newslatter middle">
      <!-- <h2>We Will Coming Soon</h2>
      <h4>Subscribe to get notification when we start</h4>
      <form>
        <input type="text" placeholder="Enter Your Email"/>
        <button type="button" class="newslatter-button">Subscribe</button>
      </form> -->
    </div>
  </div>
</div>
</div>
</template>

<script>
import AlertComponent from '~/components/AlertComponent.vue'

  export default {
    data: () => ({
      
    }),

    methods: {
      
      
    },
  }
</script>

<style media="screen">
* {
  font-family: 'montserrat', sans-serif;
}

/* body {
  margin: 0;
  padding: 0;
} */

.page {
    margin: 0;
  padding: 0;
  background: #f1f1f1;
  display: flex;
  flex-wrap: wrap;
  background: url(https://cdn.srcouncil.in/media/drive/Coming_Soon_Post.jpg) no-repeat center;
  background-size: contain;
}

.col {
  flex: 1;
  height: 100vh;
  position: relative;
}

body {
  background: url(https://cdn.srcouncil.in/media/drive/Coming_Soon_Post.jpg) no-repeat center;
  background-size: auto;
}

.time {
  color: #fff;
  text-transform: uppercase;
  width: 90%;
  display: flex;
  justify-content: center;
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.time span {
  padding: 0 14px;
  font-size: 10px;
}

.time span div {
  font-size: 40px;
}

.newslatter {
  width: 90%;
}

.newslatter h4 {
  font-style: italic;
  font-size: 12px;
}

.newslatter input, .newslatter button {
  display: block;
  margin: 12px auto;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  padding: 14px 20px;
  border-radius: 30px;
  border: 1px solid #ddd;
  outline: none;
}

.newslatter-button {
  background: linear-gradient(125deg, #3498db, #34495e);
  color: #fff;
  cursor: pointer;
  transition: 0.4s;
}

.newslatter-button:hover {
  opacity: 0.7;
}


@media screen and (max-width: 900px) {
  .col {
    flex: 100%;
  }
}
</style>
