<template>
    <div>
        <date-picker v-model="now"></date-picker>
    </div>
</template>

<script>
    import DatePicker from "../../components/DatePicker"
    export default {
        name: "index",
        components:{
            DatePicker
        },
        data(){
            return{
                now:new Date()
            }
        }
    }
</script>

<style scoped>

</style>