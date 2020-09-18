<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['cmcCounts', 'options'],
  name: 'CmcCharts',
  mounted () {
    console.log(this.cmcCounts);
    this.renderChart(this.cmcCounts, this.options);
  }
}
</script>

<style>
</style>
