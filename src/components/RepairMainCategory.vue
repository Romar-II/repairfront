
<template>
  <div class="row">
    <div>
      {{selectedRepairMainCategoryId}}
    </div>
    <div class="col">
      <div class="list-group" id="list-tab" role="tablist">
        <a  v-for="repairMainCategory in repairMainCategories"  class="list-group-item list-group-item-action" :key="repairMainCategory.repairMainCategoryId"
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
      selectedRepairMainCategoryId:'n',
      repairMainCategories:[
        {
          repairMainCategoryId:0,
          repairMainCategoryName:''
        }
      ]

    }
  },
  methods:{
    sendGetMainCategoryRequest: function () {
      this.$http.get("/maincategory")
          .then(response => {
            this.repairMainCategories = response.data
          })
          .catch(error => {
            // const errorResponseBody = error.response.data
          })
    },
    emitSelectedRepairMainCategoryId(){
      this.$emit(`event-category-change`, this.selectedRepairMainCategoryId)
    },
    handleItemClick(repairMainCategory){
      this.selectedRepairMainCategoryId = repairMainCategory
    }
  },
  beforeMount() {
    this.sendGetMainCategoryRequest()
  }
}
</script>

