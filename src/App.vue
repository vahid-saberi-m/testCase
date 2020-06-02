<template>
  <div id="app">
    <Header/>
    <WeatherInfo/>
    <Footer/>
  </div>
</template>

<script>

import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {
    WeatherInfo,
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'iransans','aviny',Avenir, Helvetica, Arial, sans-serif;
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
@font-face{
  font-family: iransans;
  src: url("./assets/fonts/irsans.ttf");
}
@font-face{
  font-family: aviny;
  src: url("./assets/fonts/aviny.ttf");
}
</style>
