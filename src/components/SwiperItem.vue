<template>
    <transition>
        <div v-if="isShow" :class="{reverse}">
            <slot></slot>

        </div>
    </transition>
</template>


<script>
    export default {
        props:{
            name:{
                type:String,
                required:true
            }
        },
        data(){
            return {
                selected:'',
                reverse:''
            }

        },
        computed:{
            isShow(){
                return this.selected === this.name

            }
        }

    }
</script>
<style lang="scss">
    .v-enter-active,.v-leave-active{
        transition: all .8s linear;
    }
    .v-leave-to{
          transform: translate(-100%);
      }
    .v-enter{
        transform: translate(100%);
    }

    .v-leave-to.reverse{
        transform: translate(100%);
    }
    .v-enter.reverse{
        transform: translate(-100%);
    }
    .v-enter-active{
        position: absolute;
        top:0;
        left: 0;
    }

</style>
