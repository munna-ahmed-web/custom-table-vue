<script setup>
import useDataStore from '../stores/allDataStore';
const dataStore = useDataStore()

defineProps({
    handleChange: Function
})



</script>


<template>
    <h3>Table Head Data</h3>
    <hr class="line">
    <div class="singleInput" v-for="(singleData, index) in dataStore.customDataSize" :key="index" >
        <input type="checkbox" :value="singleData.name" :id="singleData.uniqid" :name="singleData.uniqid"  :checked="singleData.checked"  @change="handleChange" >
        <label :for="singleData.uniqid">{{ singleData.name }}</label>
    </div>

</template>


<style scoped>
.line{
    margin-bottom: 20px;
}

.singleInput{
    margin-bottom: 5px;
}
</style>