
<template>
  <div class="row">
    <div class="col">
      <div  @change="emitSelectedRepairMainCategoryId" class="list-group" id="list-tab" role="tablist">
        <a v-model="selectedRepairMainCategoryId" v-for="repairMainCategory in repairMainCategories" class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">{{repairMainCategory.repairMainCategoryName}}</a>
      </div>
    </div>

    {{selectedRepairMainCategoryId}}

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
    }
  },
  beforeMount() {
    this.sendGetMainCategoryRequest()
  }
}
</script>

