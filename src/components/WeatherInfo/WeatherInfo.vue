<template>
    <div>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
    </div>
</template>

<script>
    import WeatherCard from "./WeatherCard";
    import request from '../../api/request';

    export default {
        name: "WeatherInfo",
        components: {WeatherCard},
        mounted() {
           const google =request.get('http://localhost:8181/bing').then(response=> response)
            console.log(google)
        }
    }

</script>

<style scoped>

</style>