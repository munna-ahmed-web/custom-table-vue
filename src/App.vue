<script setup>
import { ref } from "vue";
import DynamicTable from "./components/DynamicTable.vue";
import useDataStore from "./stores/allDataStore";


const bgColor = ref("ashColor");
const dataStore = useDataStore();

const changeBG = (e) => {
  bgColor.value = e.target.value;
};

const changeLang = (e) =>{
  dataStore.changeLocalLang(e.target.value);
}
</script>

<template>
  <div class="mainContainer">
    <div :class="[bgColor]">
      <div class="title">
        <h2>{{ $t("message.title") }}</h2>
        <p>
          {{ $t("message.desciption") }}
        </p>

        <button value="en" @click="$i18n.locale = 'en'" >English</button>
        <button value="ja" @click="$i18n.locale = 'ja'" >Japanese</button>
        <button value="ja" @click="$i18n.locale = 'sp'" >Spanish</button>

        <hr />

        <div class="buttons">
          <p>Click button bellow to change background-color</p>
          <button value="ashColor" @click="changeBG">Ash</button>
          <button value="greenColor" @click="changeBG">Green</button>
          <button value="leafyColor" @click="changeBG">Leafy</button>
          <button value="yellowColor" @click="changeBG">Yellow</button>
        </div>
      </div>
      <DynamicTable />
    </div>
  </div>
</template>

<style scoped>
.mainContainer {
  max-width: 1100px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 5px;
}
.ashColor {
  background-color: #f1e9e9;
  color: black;
}

.greenColor {
  background-color: #3aafa9;
  color: rgb(238, 232, 232);
}

.leafyColor {
  background-color: #3c853e;
  color: #f4f5f9;
}

.yellowColor {
  background-color: #fbde68;
  color: #030e12;
}
.title {
  text-align: center;
  margin-bottom: 5px;
}

button {
  padding: 5px;
  margin: 5px;
}
</style>
