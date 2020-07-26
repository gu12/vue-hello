<template>
  <div class="">
      son

      <el-switch
        v-model="value"
        active-color="#13ce66"
        v-on="$listeners"
        @change='aaa'
        inactive-color="#ff4949">
        </el-switch>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data(){
      return {
            value:null

      }
  },
  methods:{
      test(){
          console.log('test')
      }
  }
}
</script>
