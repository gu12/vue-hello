<template>
    <div>
我是TODO

        <div v-for="i in 6" :key="i">
            <span v-for="j in i"></span>

            
        </div>
    </div>
</template>


<script>
    export default {}
</script>
