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
                google:[]
            }
        },
        mounted() {
            // const baseUrl = 'http://localhost:8181/'
            // // let apiResponse = []
            // const google = request.get(`${baseUrl}google`).then(response => this.google= response.data)
            // const bing = request.get(`${baseUrl}bing`).then(response => this.bing=converter(response.data))
            //
            // const converter = (response) => {
            //
            //     const result = xmlJson.xml2json(response, {compact: true, spaces: 0});
            //     console.log('result')
            //     console.log(JSON.parse(result))
            //     return JSON.parse(result);
            // }
            // console.log(google)
            // console.log(bing)
            // bing['weather-service']
            this.$store.dispatch('getData')



        }
    }

</script>

<style scoped>

</style>