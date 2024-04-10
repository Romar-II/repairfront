<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col">
        <BrandDropdown class="mt-5"/>
        <ModelDropdown class="mt-3"/>
        <YearDropdown class="mt-3"/>
        <RepairMainCategory class="mt-5"/>



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
import RepairMainCategory from "@/components/RepairMainCategory.vue";



export default {

  components: { BrandDropdown, YearDropdown, ModelDropdown,RepairMainCategory},
  name: 'RepairCalculatorView',
  data(){
    return{
      errorMessage: '',
      successMessage: '',

    }
  },
  methods:{

  }

}
</script>

