<template>
  <div class="container-fluid">
    <table
      v-if="externalTableData.length > 0"
      class="table table-bordered table-hover table-responsive"
    >
      <thead class="table-dark">
        <tr>
          <th v-for="(item, name, idx) in externalTableData[0]" :key="idx">
            {{ name }}
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="table-primary">
        <tr v-for="(item, idx) in externalTableData" :key="idx">
          <td v-for="(data, name, dataIndex) in item" :key="dataIndex">
            {{ data }}
          </td>
          <td>
            <slot name="rowIcon" :rowData="item"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableView",
  props: {
    externalTableData: Array,
  },
  created() {
    console.log(this.externalTableData);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
