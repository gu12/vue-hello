<template>
  <div>
    <router-link to="/todo">Go to Bar</router-link>
    <br/>
    <router-link to="/datepicker">datepicker</router-link>
    <br/>

    <router-link to="/myswiper">myswiper</router-link>
    <br/>

    <router-link to="/mytree">mytree</router-link>
    <br/>

    <router-link to="/emit">emit</router-link>
    <br/>

    <router-link to="/cascader">层联</router-link>
    <br/>


    <button v-copy=123>copy</button>
      <router-view></router-view>

  </div>
</template>
<script>

  export default {
    components:{
    },
    data () {
      return {

      }
    },

  }
</script>
