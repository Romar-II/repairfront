<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-5 mt-5">
        <div class="row">
          <div class="col-4">
            <OnlineShopAccordion/>

          </div>
        </div>
      </div>
      <div class="col">
        grid toodetest
      </div>

    </div>
  </div>
</template>

<script>
import OnlineShopAccordion from "@/components/OnlineShopAccordion.vue";

export default {
  name: "OnlineShopView",
  components: {OnlineShopAccordion}
}
</script>
