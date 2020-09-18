<template>
    <div id="app">
        <h1>
          Magic Set Visualizer
        </h1>
        <Chart />
    </div>
</template>

<script>
import Chart from './components/Chart.vue';
import store from './store';

export default {
  name: 'App',
  components: {
    Chart
  },
  store,
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
