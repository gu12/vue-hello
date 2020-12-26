<template>
  <div>
    <div class="block">
      <Cascader :options="options"></Cascader>
    </div>
  </div>
</template>




<script>
import Cascader from "../../components/Cascader/Cascader";
export default {
  components: {
    Cascader
  },
  data() {
    return {
      options: [{
          value: 'zhinan',
          label: '数码',
          children: [{
            value: 'shejiyuanze',
            label: '手机',
            children: [{
              value: 'yizhi',
              label: '苹果'
            }, {
              value: 'fankui',
              label: '华为'
            }, {
              value: 'xiaolv',
              label: '三星'
            }, {
              value: 'kekong',
              label: '小米'
            }]
          }, {
            value: '',
            label: '笔记本电脑',
            children: [{
              value: 'cexiangdaohang',
              label: 'Macbook Pro'
            }, {
              value: 'dingbudaohang',
              label: 'iMac'
            }]
          }]
        }, {
          value: 'zujian',
          label: '家电',
          children: [{
            value: 'basic',
            label: '空调',
            children: [{
              value: 'layout',
              label: '格力'
            }, {
              value: 'color',
              label: '美的'
            }]
          }, 
          {
            value: 'basic',
            label: '洗衣机',
            children: [{
              value: 'layout',
              label: '西门子'
            }, {
              value: 'color',
              label: '松下'
            }]
          },]
        }
      ]
  }
}
}
</script>