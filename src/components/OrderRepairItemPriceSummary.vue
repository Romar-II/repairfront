<template>
  <div class="container text-center"  v-if="repairItemCategories.repairItemId>0">
    <div class="row " >
      <div class="col justify-content-center even-row-color list-group-item list-group-item-action " >
        <div class="list-group">Toode</div>
        <div>{{repairItemCategories.repairItemCategoryName}}</div>
      </div>
      <div class="col">
        Hind
        <div class="justify-content-center">{{repairItemCategories.price}}</div>
      </div>
    </div>
    <button class="mt-5 btn btn-primary" type="submit">Lisa korvi</button>
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

