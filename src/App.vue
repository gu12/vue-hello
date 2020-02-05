<template>
  <div>
<!--    <Entry></Entry>-->
    <router-link to="/todo">Go to Bar</router-link>
    <router-link to="/datepicker">datepicker</router-link>

      <router-view></router-view>

  </div>
</template>
<script>
  import Entry from './Entry'

  export default {
    components:{
      Entry
    },
    data () {
      return {

      }
    },

  }
</script>
