<template>
    <div>
        <CmcChart 
            :cmcCounts="cmcCounts"
        >
        </CmcChart>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CmcChart from './CmcChart.vue';

export default {
  name: 'Charts',
  components: {
      CmcChart,
  },
  computed: mapGetters(['cmcCounts']),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
