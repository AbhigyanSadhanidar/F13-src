<template>
  <div>
    {{displayNumber}}
  </div>
</template>
<script>
export default {
  name: "",
  props:{'number':{default:0}},
  data: () => ({
    displayNumber:0,
    interval:false
  }),
  created(){
    this.displayNumber = this.number ? this.number : 0;
    this.numberCall()
  },
  methods: {
    numberCall() {
      clearInterval(this.interval);

    		if(this.number == this.displayNumber){
          return;
        }

      	this.interval = window.setInterval(function(){

        	if(this.displayNumber != this.number){

        		var change = (this.number - this.displayNumber) / 10;

            change = change >= 0 ? Math.ceil(change) : Math.floor(change);

          	this.displayNumber = this.displayNumber + change;

          }

        }.bind(this), 30);
    }
  }

}
</script>
<style lang="scss" scoped>
</style>
