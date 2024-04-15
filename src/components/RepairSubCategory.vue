
<template>
  <div class="row">
    <div>
      {{selectedRepairMainCategoryId}}
    </div>
    <div class="col">
      <div class="list-group" id="list-tab" role="tablist">
        <a  v-if="selectedRepairMainCategoryId>0" v-for="repairSubCategory in repairSubCategories"  class="list-group-item list-group-item-action" :key="repairSubCategories.repairSubCategoryId"
            @click="handleItemClick(repairSubCategory.repairSubCategoryId)" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">{{repairSubCategory.repairSubCategoryName}}</a>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "RepairSubCategory",
  data(){
    return{
      selectedRepairMainCategoryId:0,

      repairSubCategories: [
        {
          repairSubCategoryId: 0,
          repairSubCategoryName:''

        }

      ]



    }
  },

  methods: {


    sendGetRepairSubCategoryRequest() {
      this.$http.get(`/repair/subcategories/${this.selectedRepairMainCategoryId}`)
          .then(response => {
            this.repairSubCategories = response.data
          })
          .catch(error => {
            const errorResponseBody = error.response.data
          })
    },

    emitSelectedRepairSubCategoryId(repairSubCategory){
      this.$emit(`event-sub-category-change`, repairSubCategory)
    },

    handleItemClick(repairSubCategoryId) {
      this.emitSelectedRepairSubCategoryId(repairSubCategoryId)

    },

  },




}
</script>
