
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
  name: "RepairSubCategory",
  data(){
    return{
      selectedRepairMainCategoryId:0,
    }
  }
}
</script>
