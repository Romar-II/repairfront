<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col">
        <BrandDropdown @event-brand-change ="selectBrandId" class="mt-5"/>
        <ModelDropdown ref="modelDropdownRef" class="mt-3"/>
        <YearDropdown class="mt-3"/>
        <RepairMainCategory @event-category-change="selectRepairMainCategory" class="mt-5"/>




      </div>
      <div class="col">
        <RepairSubCategory @event-sub-category-change="selectRepairSubCategory" ref="repairSubCategoryRef"/>
      </div>
      <div class="col">
        <RepairItemCategory ref="repairItemCategory"/>
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
import RepairItemCategory from "@/components/RepairItemCategory.vue";



export default {

  components: {RepairItemCategory, RepairSubCategory, BrandDropdown, YearDropdown, ModelDropdown,RepairMainCategory},
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
      this.$refs.repairSubCategoryRef.sendGetRepairSubCategoryRequest();

    },

    selectRepairSubCategory(selectedSubCategoryId) {
      this.$refs.repairItemCategory.selectedRepairSubCategoryId = selectedSubCategoryId;
      this.$refs.repairItemCategory.sendGetRepairItemCategoryRequest();



    },





  }

}
</script>

