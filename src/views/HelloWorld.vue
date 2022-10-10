<template>
    <h1>Hello world</h1>
    <button @click="helloworld()">Hello console</button>
</template>

<script>
    export default{
        data(){
            
        },
        methods:{
            helloworld(){
                console.log("Hello world")
            }
        }
    }
</script>
<style></style>