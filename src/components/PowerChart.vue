<template>
    <div>
        <BarChart 
            :chart-data="creaturePowers"
        >
        </BarChart>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BarChart from './BarChart.vue';

export default {
  name: 'Chart',
  components: {
      BarChart,
  },
  computed: mapGetters(['creaturePowers']),
}
</script>