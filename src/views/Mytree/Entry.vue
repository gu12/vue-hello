<template>
    <div>
        <Mytree  :data.sync="data"
                v-if="data.length"
                :fileDrop="fileDrop"
                :diectoryDrop="diectoryDrop"
                @delete="deleteFn"
        ></Mytree>




    </div>
</template>
<script>
    import Mytree from '../../components/MyTree'


    import {getTreeList} from "../../api/api.js"

    export default {
        components:{
            Mytree,
        },
        data () {
            return {

                data: [],
                fileDrop:[
                    {text:'rm',value:'删除文件'}
                ],
                diectoryDrop:[
                    {text:'rn',value:'修改名字'},
                    {text:'rm',value:'删除文件夹'}
                ]
            }
        },
        async  mounted() {
            let {data} = await  getTreeList()
            console.log(data);
            data.parent.forEach(p => p.type = 'parent')
            console.log(data);

            this.data = [...data.parent,...data.child]

        },
        methods:{
            deleteFn(){
                return new Promise(((resolve, reject) => {
                    setTimeout(()=>{
                        resolve
                    },3000)
                }))
            }
        }
    }
</script>
