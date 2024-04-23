<template>
  <div class="row">
    <div class="col-3 ms-5 mt-5">
      <button>
        {{testVar}}

      </button>
      <button>
        {{productAddedToCart}}

      </button>
      {{productsIds}}
<!--      <OnlineShopAccordion @event-category-change="handleCategoryChange"/>-->
    </div>
    <div class="col">
      {{testVar}}
<!--      <ProductsDisplay @event-cart-changed="handelItemAddedInCart" ref="productsDisplayRef"/>-->
    </div>
  </div>

</template>


<script>


export default {
  name: "BasketView",

  data(){
    return{
      productAddedToCart:0,
      productsIds:[1, 2, 3, 4, 5],
      testVar:0,
    }
  },
  methods:{
    addProductToBasket(){
      this.productsIds.push(this.productAddedToCart)
      this.testVar=5
    }
  }
}
</script>


<style scoped>

</style>