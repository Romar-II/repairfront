<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col">
        <BrandDropdown @event-brand-change ="selectBrandId" class="mt-5"/>
        <ModelDropdown ref="modelDropdownRef" class="mt-3"/>
        <YearDropdown class="mt-3"/>
        <RepairMainCategory @event-category-change="selectRepairMainCategory();" class="mt-5"/>




      </div>
      <div class="col">
        <RepairSubCategory ref="repairSubCategoryRef"/>
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
import RepairSubCategory from "@/components/RepairSubCategory.vue";



export default {

  components: {RepairSubCategory, BrandDropdown, YearDropdown, ModelDropdown,RepairMainCategory},
  name: 'RepairCalculatorView',
  data(){
    return{
      errorMessage: '',
      successMessage: '',

    }
  },
  methods:{
    selectBrandId(brandId){
      this.$refs.modelDropdownRef.brandId= brandId
      this.$refs.modelDropdownRef.sendGetModelRequest()
    },
    selectRepairMainCategory(selectedCategoryId){
      this.$refs.repairSubCategoryRef.selectedRepairMainCategoryId = selectedCategoryId;
    }

  }

}
</script>

