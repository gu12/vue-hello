<template>
  <div class="container" v-click-outside="close">
    <div class="input" @click="toggle" :class="{'isSelected':visiable}">
      <p>{{inputVal}}</p>
      </div>
    <div class="content" v-if="visiable">
      <CascaderItem :options="options" :selectData="selectData" :level="0" @change="change"></CascaderItem>
    </div>
  </div>
</template>

<script>
import clickOutside from "../../directives/outside";
import CascaderItem from "./CascaderItem";
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      visiable: false,
      selected: [],
      selectData: []
    };
  },
  components: {
    CascaderItem
  },
  computed: {
    inputVal() {
      return this.selectData.map(item => item.label).join("/");
    }
  },
  methods: {
    change(value, index) {
      this.selectData[index] = value;
      this.selectData.splice(index, 1, value);
      let selectArr = this.selectData.map(item => item.value);
      console.log(selectArr);
      this.$emit("input", selectArr);
    },
    toggle() {
      this.visiable = !this.visiable;
    },
    close() {
      this.visiable = false;
    }
  },
  directives: {
    clickOutside: clickOutside
  },
  mounted() {}
};
</script>

<style lang='scss' scoped>
.container {
  margin-top: 30px;
}

.input {
  border: 1px solid #dcdfe6;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  p{
  line-height:30px;
  padding-left: 5px;
  margin: 0;

  }
}
.isSelected{
  border-color: #409eff
}
.content {
  display: inline-block;
  margin-top: 20px;
  border: 1px solid gray;
  padding: 5px;
}
</style>