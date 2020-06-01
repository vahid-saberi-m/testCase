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
        components: {WeatherCard}
    }

</script>

<style scoped>

</style>