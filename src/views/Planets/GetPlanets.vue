<template>
  <div class="container-fluid">
    <h1>Plants Data</h1>
    <!-- <br />
    <button class="btn btn-outline-danger" v-if="show" @click="show = !show">
      +
    </button> -->
    <br />
    <router-link to="/"><button class="btn btn-success">Home</button></router-link>
    <br />

    <rows :blockList="myJson2"></rows>
  </div>
</template>

<script>
import lotRows from "../../lotRows.json";
import lotRows2 from "../../lotRows-2.json";
import Rows from '../../components/Rows.vue';


export default {
  components: {
    Rows
    // BaseTable,
    // PlanetsForm,
  },
  name: "GetPlanets",
  data() {
    return {
      myJson: lotRows,
      myJson2: lotRows2,
      show: true,
      selected: null,
    };
  },
  created() {},
  methods: {
    showData(data) {
      this.show = true;
      this.planetsData.push(data);
    },
  },
  computed: {
    planetsData() {
      return this.$store.state.planetsData;
    },
  },
  mounted() {
    this.$store.dispatch("getPlanetsData");
  },
};
</script>

<style>
.btn-success {
  margin-right: 95%;
  margin-bottom: 20px;
}

.btn-outline-danger {
  margin-right: 96%;
  margin-bottom: 20px;
}
</style>
