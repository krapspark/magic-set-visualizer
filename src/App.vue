<template>
    <div id="app">
        <h1>
          Magic Set Visualizer
        </h1>
        <set-select />
        <cmc-chart />
        <power-chart />
    </div>
</template>

<script>
import cmcChart from './components/CmcChart.vue';
import powerChart from './components/PowerChart.vue';
import setSelect from './components/SetSelect.vue';
import store from './store';

export default {
  name: 'App',
  components: {
    'cmc-chart': cmcChart,
    'power-chart': powerChart,
    'set-select': setSelect,
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
