<template>
  <div class="conatiner">
    <h1 v-if="show" v-color="['#E45826', '#4D77FF', '#019267', '#D82148']">
      Characters
    </h1>
    <br />
    <button class="btn btn-outline-danger" v-if="show" @click="show = !show">
      +
    </button>
    <br />
    <router-link to="/"
      ><button class="btn btn-success">Home</button></router-link
    >
    <table-view v-if="show" :externalTableData="charactersData">
      <template #rowIcon="{ rowData }">
        <i
          class="fa-solid fa-bell fa-lg"
          @click="alertSelected(rowData.name)"
        ></i>
        <!-- @click="useMixin(rowData)" -->
      </template>
    </table-view>
    <characters-form
      v-if="!show"
      @addCharactersToTable="showData"
    ></characters-form>
  </div>
</template>

<script>
import CharactersForm from "./CharactersForm.vue";
import TableView from "@/components/TableView.vue";
import { exampleMixin } from "../Mixins/mixins";

export default {
  name: "GetCharacters",
  mixins: [exampleMixin],
  components: {
    CharactersForm,
    TableView,
  },
  data() {
    return {
      show: true,
    };
  },
  created() {},
  methods: {
    showData(data) {
      this.show = true;
      this.charactersData.push(data);
    },
    deleteItems(data) {
      alert(JSON.stringify(data.name));
    },
  },
  computed: {
    charactersData() {
      return this.$store.state.charactersData;
    },
  },
  mounted() {
    this.$store.dispatch("getCharactersData");
  },
};
</script>

<style scoped>
.btn-success {
  margin-right: 95%;
  margin-bottom: 20px;
}

.btn-outline-danger {
  margin-right: 96%;
  margin-bottom: 20px;
}
</style>
