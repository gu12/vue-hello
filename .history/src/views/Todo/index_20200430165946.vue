<template>
    <div>
我是TODO

        <div v-for="i in 6" :key="i">
            for(let f=0;f<6;f++){
                     <span v-for="j in i" :key="j"></span>


            }

            
        </div>
    </div>
</template>


<script>
    export default {}
</script>
