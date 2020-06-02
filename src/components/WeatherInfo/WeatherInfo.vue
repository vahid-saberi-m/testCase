<template>
    <div >
        <div v-for="day in this.days"   :key="day.id">
            <weather-card :data="day" :google="google"/>
        </div>
    </div>
</template>

<script>
    import WeatherCard from "./WeatherCard";
    // import request from '../../tools/request';
    // import xmlJson from 'xml-js'

    export default {
        name: "WeatherInfo",
        components: {WeatherCard},
        data() {
            return {
                days: this.$store.state.days,
            }
        },
        mounted() {
            this.$store.dispatch('getData')
        }
    }

</script>

<style scoped>
    div{
        font-family: 'aviny';
    }

</style>