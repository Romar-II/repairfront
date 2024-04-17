<template>
  <div>
    <div v-if="repairItemCategories.repairItemId>0" class="list-group-item list-group-item-action" aria-controls="list-settings" >
      {{repairItemCategories.repairItemCategoryName}}
      {{repairItemCategories.price}}
    </div>
  </div>
</template>


<script>
export default {
  name: "OrderRepairItemPriceSummary",

  data() {
    return {

      selectedRepairItemCategoryId: 0,

      repairMultiplier: 2,

      repairItemCategories: [
        {
          repairItemId: 0,
          repairItemCategoryName: '',
          price: 0
        }

      ]



    }
  },


  methods: {

    sendGetRepairItemCategoryPriceRequest() {


    },

  }


}
</script>

