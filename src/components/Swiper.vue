<template>
    <div class="swiper" @mouseenter="onmouseenter" @mouseleave="onmouseleave">
        <div class="viewport">
            <slot></slot>
        </div>

        <div class="dots" v-if="len">
            <span @click="select(index)"  v-for="(item,index) in len" :key="index" :class="{active: Index === index}">{{item}}</span>
        </div>
    </div>
</template>


<script>
    export default {
        props:{
            value:{
                type:String,
                default:''
            },
            autoplay:{
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                TIMER:null,
                len:0,
                CurrentSelected:""

            }
        },

        watch:{
            value(){
                this.change()
            }

        },

        mounted() {
            this.names = this.$children.map(child => child.name)
            this.len = this.names.length
            console.log(this.names,this.len)
            this.change()
            this.run()
            //记录上一个位置索引
            this.prevPosition = this.Index

        },
        computed:{
            Index(){
                return this.names.indexOf(this.CurrentSelected)
            }


        },

        methods:{
            onmouseenter(){
                clearInterval(this.TIMER)
                this.TIMER = null

            },
            onmouseleave(){
                if(!this.TIMER){
                    this.run()
                }
            },
            select(newIndex){
                this.prevPosition = this.Index

                if(newIndex == this.names.length) newIndex = 0
                if(newIndex == -1) newIndex = this.names.length - 1

                this.$emit('input',this.names[newIndex])
            },


            change(){
                //显示哪个？

                this.CurrentSelected = this.value || this.$children[0].name
                let reverse = this.prevPosition > this.Index?true:false
                this.$children.map(
                    item=>{
                        this.$nextTick(()=>{
                            item.selected = this.CurrentSelected
                        })
                        if(this.TIMER){
                            if(this.prevPosition === 0 && this.Index === this.len -1){
                                item.reverse = false
                            }
                            if(this.prevPosition === this.len -1 && this.Index === 0){
                                item.reverse = true
                            }
                        }


                        item.reverse = reverse
                    }


                )  //跟儿子说哪个应该显示


                 console.log(this.CurrentSelected,'this.CurrentSelected');
            },
            run(){
                console.log('//');
                this.TIMER  =   setInterval(()=>{
                    let index = this.Index
                    let newIndex = index + 1
                    this.select(newIndex)

                },2000)
            },


        },

    }
</script>
<style lang="scss">
    .swiper{
        border: 10px solid bisque;
        overflow: hidden;
        width: 300px;
    }
    .viewport{
        position: relative;
        height: 175px;
    }
    .dots{
        display: flex;
        justify-content: center;
        span{
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            border-radius: 50%;
            cursor: pointer;
            margin: 0 10px;
            border: 1px solid red;
        }
    }
    .active{
        background: aquamarine;
    }
</style>
