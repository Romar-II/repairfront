<template>
  <div class="container text-center rounded p-3 border-3 custom-container2 text-white" v-if="repairItemCategories.repairItemId>0">Shopping List
    <div class="row custom-container " >
      <div class="col justify-content-center even-row-color list-group-item list-group-item-action " >
        <div class="mt-1 list-group text-black">
          Toode:
          <div>{{repairItemCategories.repairItemCategoryName}}</div>
        </div>
      </div>
      <div class="mt-1 col text-black">
        Hind:
        <div class="justify-content-center">{{repairItemCategories.price}} EUR</div>
      </div>
    </div>
    <button class="custom-button" type="submit" @click="handleRepairItemAddedInCart(repairItemCategories.repairItemId)">Lisa korvi</button>
  </div>
</template>

<style>


</style>
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

    handleRepairItemAddedInCart(repairItemId) {
      this.addItemToCart(repairItemId)
      this.$emit('event-cart-change')
    },
    addItemToCart(repairItemId) {
      this.$http.post("/cart/repairitem", null, {
            params: {
              userId: 1,
              repairItemId: repairItemId
            }
          }
      ).then(response => {
        const responseBody = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
  }
}
</script>

