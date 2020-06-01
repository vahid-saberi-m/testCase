<template>
  <div id="app">
    <Header/>
    <WeatherInfo/>
  </div>
</template>

<script>

import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
export default {
  name: 'App',
  components: {
    WeatherInfo,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1920px;
  width: 100vw;
  direction: rtl;
}
</style>
