<template>
    <div>
        <div v-for="day in this.data" class="weather-row" :key="day.id">
            <div class="weak-day">
                            <p>{{day['day-name']._text}}</p>
            </div>
            <div class="weather-card">
                <div class="weather-icon weather-card-item">
                    <img alt="weather icon" src="../../assets/weather.png">
                </div>
                <div class="degree weather-card-item">
                    <p>{{day['max-temp']._text}}درجه سانتیگراد</p>
                </div>
                <div class="weather-desc weather-card-item">
                    <p>وضعیت {{day['status']._text}}</p>
                </div>
                <div class="location weather-card-item">
                    <p>{{dayOfWeak}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WeatherCard",
        props: ['data'],
        data() {
            return {
                 dayOfWeak: ''
            }
        },
        mounted() {
            this.dayOfWeak= this.data[0]['city-name']._text;
        }
    }
</script>

<style scoped>
    .weather-row {
        display: flex;
        flex-direction: row;
        width: 80vw;
        margin: 4vh auto;
        align-items: center;

    }

    .weak-day {
        flex-grow: 1;
    }

    .weather-card {
        flex-grow: 9;
        display: flex;
        border: solid #707070 1px;
        border-radius: 60px;
        align-items: center;

    }

    .weather-icon {
        flex-grow: 2;
    }

    .weather-desc {
        flex-grow: 4;
    }

    .degree {
        flex-grow: 4;
    }

    .location {
        flex-grow: 2;
    }
</style>