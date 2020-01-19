<template>
    <div class="box">
        <swiper v-model="selected">
            <swiper-item  name="box1">
                <div class="content1 content">1</div>
            </swiper-item>
            <swiper-item  name="box2">
                <div class="content2 content">2</div>
            </swiper-item>
            <swiper-item  name="box3">
                <div class="content3 content">3</div>
            </swiper-item>
        </swiper>

    </div>
</template>



<script>
    import Swiper from "../components/Swiper";
    import SwiperItem from "../components/SwiperItem";
    export default {
        data(){
            return{
                selected:'box1'


            }
        },
        mounted() {
            setTimeout(()=>{
                this.selected = 'box2'
            },2000)
        },
        components:{
            Swiper,
            SwiperItem
        }

    }
</script>

<style lang="scss">
    .box{
        margin: 0 auto;
        width: 320px;

    }
    .content{
        width: 300px;
        height: 175px;
    }
    .content1{
        background: deepskyblue;
    }
    .content2{
        background: rosybrown;
    }
    .content3{
        background: darkslategray;
    }




</style>
