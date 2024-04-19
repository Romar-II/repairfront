<template>
  <div class="container text-center border border-success rounded p-4" v-if="repairItemCategories.repairItemId>0">
    <div class="row " >
      <div class="col justify-content-center even-row-color list-group-item list-group-item-action " >
        <div class="mt-1 list-group ">
          Toode:
          <div>{{repairItemCategories.repairItemCategoryName}}</div>
        </div>
      </div>
      <div class="mt-1 col">
        Hind:
        <div class="justify-content-center">{{repairItemCategories.price}} EUR</div>
      </div>
    </div>
    <button class="mt-5 btn btn-success" type="submit" @click="handleRepairItemAddedInCart(repairItemCategories)">Lisa korvi</button>
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

    handleRepairItemAddedInCart(repairItemCategories) {
      this.$emit('event-cart-change',repairItemCategories)
    },

  }


}
</script>

