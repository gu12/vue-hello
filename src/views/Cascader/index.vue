<template>
  <div>
      <Cascader></Cascader>

  </div>
</template>

<script>
import Cascader from '../../components/Cascader/Cascader'

export default {

    components:{
        Cascader
    },
    data(){
        return {
            options:[
                {
                    label:'肉类',
                    children:[
                        {
                            "label":"猪肉",
                            "children":[
                                {
                                    "label":"五花肉"
                                },
                                 {
                                    "label":"里脊肉"
                                }
                            ]
                        },
                          {
                            "label":"鸡肉",
                            "children":[
                                {
                                    "label":"鸡腿"
                                },
                                 {
                                    "label":"鸡翅"
                                }
                            ]
                        }
                    ]
                },
                 {
                    label:'汽车',
                    children:[
                        {
                            "label":"宝马",
                            "children":[
                                {
                                    "label":"宝马530LI"
                                },
                                 {
                                    "label":"宝马M3"
                                }
                            ]
                        },
                          {
                            "label":"奥迪",
                            "children":[
                                {
                                    "label":"A6"
                                },
                                 {
                                    "label":"Q5"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

}
</script>

<style>

</style>