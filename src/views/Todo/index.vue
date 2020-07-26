
<template>
<div>
  <div v-for="(item,index) in arr" :key="index" style="text-align:right;">
      
      <span v-for='i in index' :key="i">1</span>
      </div>

</div>

</template>
<script>
    export default {
        data(){
            return{
                arr:[1,2,3,4,5,6,7,8,9,10,11,12,13]
            }
        },
        methods:{
            abc(num){
                let b = ''
                for(let i=0;i<num;i++){
                    b+='*'
                }
                return b

            }

        }

    //      render(){
    //     return (
    //       <div >
    //         {this.list.map((v)=>{
    //             return <div class="a">
    //                         {this.list.slice(0,v).map((m)=>{
    //                                 return <div >*</div>
    //                         })}

    //                 </div>
    //         })}
    //       </div>
    //     )
    //   }
    }
</script>

<style >
.a{
    display: flex;
    flex-direction: row-reverse
}

</style>
