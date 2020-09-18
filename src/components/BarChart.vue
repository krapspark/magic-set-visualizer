<script>
import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;


export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['options'],
  name: 'BarCharts',
  mounted () {
    console.log('cmccount', this.cmcCounts);
    this.renderChart(this.chartData, this.options);
  }
}
</script>

<style>
</style>
