
<template>
  <div class="row">
    <div>

    </div>
    <div class="col">
      <div class="list-group" id="list-tab" role="tablist">
        <a v-for="repairMainCategory in repairMainCategories"  class="list-group-item list-group-item-action" :key="repairMainCategory.repairMainCategoryId"
            @click="handleItemClick(repairMainCategory.repairMainCategoryId)" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">{{repairMainCategory.repairMainCategoryName}}</a>
      </div>
    </div>



  </div>
</template>


<script>
export default {
  name: "RepairMainCategory",
  data(){
    return{
      selectedRepairMainCategoryId:0,
      repairMainCategories:[
        {
          repairMainCategoryId:null,
          repairMainCategoryName:null
        }
      ]

    }
  },
  methods:{
    sendGetMainCategoryRequest() {
      this.$http.get("/repair/maincategories")
          .then(response => {
            this.repairMainCategories = response.data
          })
          .catch(error => {
            // const errorResponseBody = error.response.data
          })
    },
    emitSelectedRepairMainCategoryId(repairMainCategory){
      this.$emit(`event-category-change`, repairMainCategory)
    },
    handleItemClick(repairMainCategoryId){
      this.selectedRepairMainCategoryId = repairMainCategoryId //for testing purps
      this.emitSelectedRepairMainCategoryId(repairMainCategoryId)
    }
  },
  beforeMount() {
    this.sendGetMainCategoryRequest()
  }
}
</script>

