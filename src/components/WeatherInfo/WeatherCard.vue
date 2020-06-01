<template>
    <div class="weather-row">
        <div class="weak-day">
            <p>شنبه</p>
        </div>
        <div class="weather-card">
            <div  class="weather-icon weather-card-item">
                <img alt="weather icon" src="../../assets/weather.png">
            </div>
            <div  class="degree weather-card-item">
                <p>19 درجه سانتی گراد</p>
            </div>
            <div  class="weather-desc weather-card-item">
                <p>وضعیت بارانی</p>
            </div>
            <div  class="location weather-card-item">
                <p>کرج</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WeatherCard"
    }
</script>

<style scoped>
    .weather-row{
        display: flex;
        flex-direction: row;
        width: 80vw;
        margin: 4vh auto;
        align-items: center;

    }
    .weak-day{
        flex-grow: 1;
    }
    .weather-card{
        flex-grow: 9;
        display: flex;
        border: solid #707070 1px;
        border-radius: 60px;
        align-items: center;

    }
    .weather-icon{
        flex-grow: 2;
    }
    .weather-desc{
        flex-grow: 4;
    }
    .degree{
        flex-grow: 4;
    }
    .location{
        flex-grow: 2;
    }
</style>