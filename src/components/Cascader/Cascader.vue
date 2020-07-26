<template>
  
  <div class="cascader" v-click-outside='close'>
      <div class="title" @click="toggle" >

      </div>
      <div class="content" v-if='isVisible'>
          显示的内容
      </div>
      
  </div>
</template>

<script>
import clickOutside from '../../directives/outside'
export default {
    data(){
        return{
            isVisible:false
        }
    },
    directives:{
        clickOutside
        
    },
    methods:{
        close(){
            console.log('close')
            this.isVisible = false
        },
        toggle(){
             this.isVisible = !this.isVisible
        }
    }

}
</script>

<style lang="scss" scoped>
.title{
    width: 150px;
    height: 50px;
    border: 1px solid orange

}

</style>>
