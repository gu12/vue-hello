<template>
<div class="container" v-click-outside='close'>
  <div class="input" @click="toggle">
  </div>
  <div class="content" v-if='visiable'>
     <div class="content-left">
        <div v-for='(item,index) in options' :key="index">
              <div @click='select(item)' >
                {{item.label}}
              </div>
        </div>
     </div>
     <div class="content-right" v-if="list.length>0">
        <div v-for='(item,index) in list' :key="index">
              <div >
                {{item.label}}
              </div>
        </div>

     </div>

  </div>
</div>
  
</template>

<script>
import clickOutside from '../../directives/outside'
export default {
  props:{
     options:{
       type:Array,
       default:()=>[]
     }
  },
  data(){
    return {
      visiable:false,
      selected:[]
    }
  },
  computed:{
      list(){
        return this.selected.children ?  this.selected.children: []
      }
  },
  methods:{
    toggle(){
      this.visiable = !this.visiable
    },
    select(item){
      console.log(item)
      this.selected = item
    },
    close(){
      this.visiable = false
    }
  },
  directives: {
    clickOutside: clickOutside
},
  mounted(){
    console.log(clickOutside)
  }


}
</script>

<style lans='scss'>
.container{
  margin-top: 30px
}
.input{
  border:1px solid salmon;
  width:200px;
  height: 50px;
}
.content{
  display: flex
}


</style>