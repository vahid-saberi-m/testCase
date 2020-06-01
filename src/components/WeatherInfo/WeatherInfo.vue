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

    export default {
        name: "WeatherInfo",
        components: {WeatherCard}
    }
</script>

<style scoped>

</style>