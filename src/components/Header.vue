<template>
    <div class="header">
        <img class="main-image" src="../assets/search.png">
        <img class="overlay" src="../assets/group1.png">
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header{
        overflow: hidden;
        height: 40vh;

    }
    .main-image{
        position: relative;
        left: 0;
        width: 100vw;
        height: 40vh;
        z-index: -3;
    }
    .overlay{
        position: absolute;
        width: 100vw;
        top: 25vh;
        height: 20vh;
        left: 0;
        z-index: -2;
    }
</style>