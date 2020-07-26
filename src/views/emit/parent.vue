<template>
  <div class="home" >
      <button @click="aaa">parent</button>
        
      <son @test='ccc' @change='aaa'  ></son>
  </div>
</template>

<script>
    import son from './son';

export default {
  name: 'home',
  components: {
      son
  },
  methods:{
      aaa(){
          console.log('船船1')

          this.$emit('ccc')
      },
      ccc(){
          console.log('ccc')
      }
  }
}
</script>
