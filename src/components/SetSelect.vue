<template>
    <div>
        <v-select
            :options="setIDs"
            :value="selectedSet"
            @input="setSelectedSet"
        >
        </v-select>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  name: 'SetSelect',
  components: {
      'v-select': vSelect,
  },
  computed: mapGetters(['selectedSet', 'setIDs']),
  methods: {
      ...mapMutations(['setSelectedSet']),
  },
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
