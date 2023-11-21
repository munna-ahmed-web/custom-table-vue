<script setup>
import TableHeadData from "./TableHeadData.vue";
import useDataStore from "../stores/allDataStore";

const dataStore = useDataStore();

const handleChange = (e) => {
  try {
    if (e.target.checked) {
      dataStore.addColumn(e.target.value);
      dataStore.updatedToChecked(e.target.value);
    } else {
      dataStore.deleteColumn(e.target.value);
      dataStore.updatedToChecked(e.target.value);
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="gridContainer">
    <div class="dataSection">
      <TableHeadData :handleChange="handleChange" />
    </div>

    <div class="tableSection">

      <h3>Dynamic Table Head</h3>
      <hr class="line">
      <table>
        <thead>
          <tr>
            <th v-for="(item, index) in dataStore.columSize" :key="index">
              {{ item }}
            </th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>



<style scoped>

.gridContainer{
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}

.dataSection{
  padding: 15px;
}

.tableSection{
  text-align: center;
  padding: 15px;
}

.line{
  margin-bottom: 20px;
}

table{
  margin-left: 0 20px;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid black;
  text-align: left;
  padding: 8px;
}
</style>
