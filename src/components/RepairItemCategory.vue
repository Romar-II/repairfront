<template>
  <div class="row">
    <div>
    </div>
    <div class="col">
      <div class="list-group" id="list-tab" role="tablist">
        <a v-if="selectedRepairSubCategoryId>0" v-for="repairItemCategory in repairItemCategories"
           class="list-group-item list-group-item-action" :key="repairItemCategories.repairItemId"
           @click="handleItemClick(repairItemCategory)" id="list-settings-list"
           data-bs-toggle="list"
           href="#list-settings" role="tab"
           aria-controls="list-settings">{{repairItemCategory.repairItemCategoryName}}</a>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "RepairItemCategory",

  data() {
    return {
      selectedRepairSubCategoryId: 0,

      repairItemCategories: [
        {
          repairItemId: 0,
          repairItemCategoryName: ''

        }
      ]
    }

  },

  methods: {

    sendGetRepairItemCategoryRequest() {
      this.$http.get(`/repair/itemcategories/${this.selectedRepairSubCategoryId}`)
          .then(response => {
            this.repairItemCategories = response.data
          })
          .catch(error => {
            const errorResponseBody = error.response.data
          })
    },

    emitSelectedRepairItemCategoryId(repairItemCategory) {
      this.$emit(`event-repair-item-change`,repairItemCategory)
    },

    handleItemClick(repairItemCategory) {
      this.emitSelectedRepairItemCategoryId(repairItemCategory)

    },
  },




}
</script>
