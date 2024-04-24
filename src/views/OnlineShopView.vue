<template>

  <div class="row">
    <div class="col-3 ms-5 mt-5">
      <OnlineShopAccordion @event-category-change="handleCategoryChange"/>
    </div>
    <div class="col">
      <ProductsDisplay @event-cart-changed="handelItemAddedInCart" ref="productsDisplayRef"/>
    </div>
  </div>


</template>

<script>
import OnlineShopAccordion from "@/components/OnlineShopAccordion.vue";
import ProductsDisplay from "@/components/ProductsDisplay.vue";

export default {
  name: "OnlineShopView",
  components: {ProductsDisplay, OnlineShopAccordion},
  data(){
    return{
      testNumber:0
    }
  },
  methods:{
    handleCategoryChange(categoryId, subCategoryId){
      this.$refs.productsDisplayRef.sendProductRequest(categoryId, subCategoryId)
    },
    handelItemAddedInCart(){
      this.$emit('event-cart-changed')
    }
  },

}
</script>
