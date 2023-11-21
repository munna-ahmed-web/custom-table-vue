import { defineStore } from "pinia";
import { ref } from "vue";

const initalColumnSize = ["First Name", "Last Name", "Age"];
const initalCustomValue = [
  { id: 1, name: "First Name", checked: true, uniqid: "fname" },
  { id: 2, name: "Last Name", checked: true, uniqid: "lname" },
  { id: 3, name: "Email", checked: false, uniqid: "email" },
  { id: 4, name: "Age", checked: true, uniqid: "age" },
  { id: 5, name: "Date of Birth", checked: false, uniqid: "dob" },
  { id: 6, name: "Gender", checked: false, uniqid: "gender" },
  { id: 7, name: "Marital Status", checked: false, uniqid: "mstatus" },
  { id: 8, name: "Company", checked: false, uniqid: "company" },
  { id: 9, name: "Phone", checked: false, uniqid: "phone" },
  { id: 10, name: "Address", checked: false, uniqid: "address" },
];

const useDataStore = defineStore(
  "dataStore",
  () => {
    const customDataSize = ref([...initalCustomValue]);
    const columSize = ref([...initalColumnSize]);

    function addColumn(newColumn) {
      if (columSize.value.includes(newColumn)) {
        alert("Already Column Existed in Table");
      } else {
        columSize.value.push(newColumn);
      }
    }

    function deleteColumn(deleteItem) {
      columSize.value = columSize.value.filter(
        (singleColumn) => singleColumn != deleteItem
      );
    }

    function updatedToChecked(name){
      customDataSize.value.forEach((singleValue)=>{
        if(singleValue.name == name){
          singleValue.checked = !singleValue.checked
        }
      })
    };


    return {
      columSize,
      customDataSize,
      addColumn,
      deleteColumn,
      updatedToChecked,
    };
  },
  {
    persist: {
      storage:sessionStorage
    },
  }
);

export default useDataStore;
