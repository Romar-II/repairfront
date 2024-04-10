<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col">
        <BrandDropdown/>

      </div>
      <div class="col">
        Column
      </div>
      <div class="col">
        Column
      </div>
      <div class="col">
        Column
      </div>
    </div>
  </div>


</template>




<script>
import BrandDropdown from "@/components/BrandDropdown.vue";

export default {
  components: { BrandDropdown},
  name: 'RepairCalculatorView'

}
</script>

