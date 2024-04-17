<template>
  <div class="container text-center" v-if="repairItemCategories.repairItemId>0">
    <div class="row">
      <div class="col justify-content-center" >
        Toode
        <tr>{{repairItemCategories.repairItemCategoryName}}</tr>
      </div>
      <div class="col justify-content-center">
        Hind
        <tr class="justify-content-center">{{repairItemCategories.price}}</tr>
      </div>
    </div>
    <button class="mt-5 btn btn-primary" type="submit">Osta</button>
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

