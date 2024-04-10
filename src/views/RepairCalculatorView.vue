<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col">
        <BrandDropdown class="mt-6"/>
        <ModelDropdown class="mt-3"/>
        <YearDropdown class="mt-3"/>

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
import ModelDropdown from "@/components/ModelDropdown.vue";
import YearDropdown from "@/components/YearDropdown.vue";



export default {
  components: { BrandDropdown, YearDropdown, ModelDropdown},
  name: 'RepairCalculatorView'

}
</script>

