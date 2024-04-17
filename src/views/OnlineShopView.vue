<template>

  <div class="row">
    <div class="col-4 ms-5 mt-5">
      <OnlineShopAccordion/>
    </div>
    <div class="col">
      <ProductsDisplay/>
    </div>
  </div>


</template>

<script>
import OnlineShopAccordion from "@/components/OnlineShopAccordion.vue";
import ProductsDisplay from "@/components/ProductsDisplay.vue";

export default {
  name: "OnlineShopView",
  components: {ProductsDisplay, OnlineShopAccordion}
}
</script>
