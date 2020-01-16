<template>
    <div class="swiper">
        <div class="viewport">
            <slot></slot>

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
        watch:{
            value(){
                this.change()
            }

        },
        data(){
            return{
                CurrentSelected:""
            }
        },

        methods:{
            change(){
                //显示哪个？
                this.CurrentSelected = this.value || this.$children[0].name
                this.$children.map(item=>item.selected = this.CurrentSelected)
            },
            run(){
                setInterval(()=>{
                    let index = this.names.indexOf(this.CurrentSelected)
                    let newIndex = index + 1
                    if(newIndex == this.names.length) newIndex = 0
                    this.$emit('input',this.names[newIndex])
                },3000)


            }

        },
        mounted() {
            this.names = this.$children.map(child => child.name)
            console.log(this.names);
            this.change()
            this.run()


        }
    }
</script>
<style>
    .swiper{
        border: 10px solid bisque;
        overflow: hidden;
    }
    .viewport{
        position: relative;
    }
</style>
