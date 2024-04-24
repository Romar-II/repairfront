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
    <button class="mt-5 btn btn-success" type="submit" @click="handleRepairItemAddedInCart(repairItemCategories.repairItemId)">Lisa korvi</button>
  </div>
</template>

<style>

.custom-container {
  background-color: rgb(255, 255, 255); /* Light Gray Background with opacity */
  border: 2px solid #45aee6; /* Border */
  border-radius: 8px; /* Rounded Corners */
  padding: 20px; /* Padding */
  margin-top: 20px; /* Margin Top */
}

.custom-container2 {
  background-color: rgb(13, 109, 251); /* Light Gray Background with opacity */
  border: 5px solid #45ade5; /* Border */
  border-radius: 8px; /* Rounded Corners */
  padding: 20px; /* Padding */
  margin-top: 20px; /* Margin Top */
  .text-white{
    color:white;
  }
  .text-black{
    color: black;
  }
}
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

