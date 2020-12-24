<template>
  <div>
    <router-link to="/todo">Go to Bar</router-link>
    <router-link to="/datepicker">datepicker</router-link>
    <router-link to="/myswiper">myswiper</router-link>
    <router-link to="/mytree">mytree</router-link>
    <router-link to="/emit">emit</router-link>
    <router-link to="/cascader">层联</router-link>

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
