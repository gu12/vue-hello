<template>
    <div>
        <el-tree
                :data="allData"
                default-expand-all
                :render-content="render"
                :expand-on-click-node="false"

        />
    </div>
</template>

<script>
    import _ from 'lodash'


    export default {
        name: "",
        props:{
            data:{
                type:Array,
                default:()=>[]
            },
            fileDrop:Array,
            diectoryDrop:Array
        },
        data(){
            return {
                allData:[],
                currentId:'',  //点击了谁的修改
                currentContent:'', //当前编辑的内容
            }
        },
        watch:{
            data(){
                this.formatData()
            }

        },
        mounted(){
            this.formatData()

        },

    methods:{
        remove(id){
            let list = _.cloneDeep(this.data)
            list = list.filter(l=>l.id !== id)
            console.log('list',list);
            this.$emit('update:data',list)
            this.$message({
                type: 'success',
                message: '删除成功!'
            })
        },
        handleRename(data){
            this.currentContent = data.name
            this.currentId = data.id
        },
        cancel(){
            this.currentId = ''
        },
        ok(data){
            let list = _.cloneDeep(this.data)
            let item = list.find(l=>l.id === data.id)
            console.log(item,'item');
            item.name  = this.currentContent
            this.currentId = ''
            this.$emit('update:data',list)
            this.$message({
                type: 'success',
                message: '修改成功!'
            })

        },
        handleInput(v){
            this.currentContent = v
        },

        handleRemove(data){
            this.$confirm(`此操作将永久删除该文件${data.name}, 是否继续?`, '确认', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.remove(data.id)

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });

        },
            hanldeCommand(data,val){
                if(val === 'rn'){
                    this.handleRename(data)
                }else if(val === 'rm'){
                    this.handleRemove(data)
                }

                console.log(data,val);
            },
            render(h,{node, data, store}){
                let list = this.isParent(data)?this.diectoryDrop:this.fileDrop
                return(
                    <div style={{width:'100%'}}>
                        {
                           this.isParent(data)?node.expanded?<i class="el-icon-folder-opened"></i>:<i class="el-icon-folder"></i>:<i class="el-icon-document"></i>
                        }
                        {
                        data.id === this.currentId?  <el-input size="small" on-input={this.handleInput} value={this.currentContent}></el-input>:data.name
                         }
                        {
                            data.id === this.currentId?<span style={{float:'right'}}>
                                <el-button type="text" on-click={this.ok.bind(this,data)}>确认</el-button>
                                <el-button type="text" on-click={this.cancel}>取消</el-button>
                            </span>:<el-dropdown placement="bottom-start" trigger="click" on-command={
                                    this.hanldeCommand.bind(this, data)
                                }>
                              <span class="el-dropdown-link">
                                <i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                                    <el-dropdown-menu slot="dropdown">
                                        {
                                            list.map(item => (
                                                <el-dropdown-item command={item.text}>{item.value}</el-dropdown-item>
                                            ))
                                        }
                                    </el-dropdown-menu>
                                </el-dropdown>
                        }




                    </div>
                )

            },
            isParent(data){
                // console.log(data.type === 'parent')
                return data.type === 'parent'
            },

            formatData(){

                //clone数据
                console.log(this.data,'this.data');
                let allData = _.cloneDeep(this.data)
                let treeMapList = allData.reduce((memo,current)=>{
                    memo[current["id"]] = current
                    return memo
                },{})
                let result = allData.reduce((arr,current)=>{
                    let pid = current.pid
                    let parent = treeMapList[pid]
                    // current.label = current.name
                    if(parent){
                        parent.children?parent.children.push(current):parent.children = [current]
                    }else if(pid === 0){
                        arr.push(current)
                    }
                    return arr
                },[])
                this.allData = result
                console.log(result);

            }

        }
    }
</script>

<style >
    .el-tree {
        width: 50%;
        margin-top: 25px;

    }
    .el-dropdown{
        float: right;
    }
    .el-tree .el-tree-node__content{
        height: 32px;
    }
    .el-tree .el-input{
        width: 50%;
    }

</style>
