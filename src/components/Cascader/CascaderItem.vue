<template>
  <div>

    <div class="panel">
      <div class="content-left">
        <div v-for="(item,index) in options" :key="index">
          <div @click="select(item,index)" :class="{'selected':selected==item}">{{item.label}}</div>
        </div>
      </div>
      <div class="content-right" v-if="list && list.length>0">
          <CascaderItem :options='list' :selectData='selectData' :level='level+1' @change='change' ></CascaderItem>
      </div>
     
    </div>
     <div class="arrow"></div>
  </div>

</template>

<script>

export default {
  name:'CascaderItem',
  props: {
    options: {
      type: Array,
      default: () => []
    },
     selectData: {
      type: Array,
      default: () => []
    },
    level:{
        type:Number
    }
  },
  data() {
    return {
      selected: [],
    };
  },
  computed: {
    list() {
      return this.selectData[this.level] && this.selectData[this.level].children 
    }
  },
  methods: {
    select(item,index) {
      this.selected = item;
      this.selectIndex = index
      this.selectData.splice(this.level+1)
      this.$emit('change',item,this.level)
    },
    change(item,index){
      this.$emit('change',item,index)
    }
  },
};
</script>

<style lang='scss' scoped>

.panel{
  display: flex;
  min-height: 100px;
  .content-right{
    margin-left: 5px;
   
  }
   .selected{
        background:orange;
    }
    .arrow{
        left: 35px;
    }
 .arrow:ater{
     top: 1px;
    margin-left: -6px;
    border-top-width: 0;
    border-bottom-color: #fff;
    content: " ";
    border-width: 6px;
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
 }
}
</style>