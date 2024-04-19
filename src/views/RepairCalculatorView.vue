<template>
<body class="full-height-container">
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col">
        <BrandDropdown @event-brand-change="selectBrandId" class="mt-5"/>
        <ModelDropdown @event-model-change="selectModelId" ref="modelDropdownRef" class="mt-3"/>
        <YearDropdown ref="modelYearDropdownRef" class="mt-3"/>
        <RepairMainCategory @event-category-change="selectRepairMainCategory" class="mt-5"/>

      </div>
      <div class="col">
        <RepairSubCategory @event-sub-category-change="selectRepairSubCategory" ref="repairSubCategoryRef"
                           class="mt-5"/>
      </div>
      <div class="col">
        <RepairItemCategory @event-repair-item-change="selectRepairItemCategory" ref="repairItemCategoryRef"
                            class="mt-5"/>
      </div>
      <div class="col">
        <OrderRepairItemPriceSummary @event-cart-change="handleRepairItemAddedInCart" ref="orderRepairItemPriceSummaryRef" class="mt-5"/>
      </div>
    </div>
  </div>
</body>


</template>

<style>
.full-height-container {
  min-height: 100vh; /* Minimum height of 100% of the viewport height */
  background-image: url('../assets/RepairBoyzBackUpdated.jpg'); /* Background Image */
  background-size: cover; /* Cover the entire container */
  background-repeat: no-repeat; /* No repeat */
  background-attachment: fixed;
}

</style>




<script>
import BrandDropdown from "@/components/BrandDropdown.vue";
import ModelDropdown from "@/components/ModelDropdown.vue";
import YearDropdown from "@/components/YearDropdown.vue";
import RepairMainCategory from "@/components/RepairMainCategory.vue";
import RepairSubCategory from "@/components/RepairSubCategory.vue";
import RepairItemCategory from "@/components/RepairItemCategory.vue";
import OrderRepairItemPriceSummary from "@/components/OrderRepairItemPriceSummary.vue";


export default {

  components: {
    OrderRepairItemPriceSummary,
    RepairItemCategory, RepairSubCategory, BrandDropdown, YearDropdown, ModelDropdown, RepairMainCategory
  },
  name: 'RepairCalculatorView',
  data() {
    return {
      errorMessage: '',
      successMessage: '',

      selectedRepairMainCategoryId: null,
      selectedRepairSubCategoryId: null,
      selectedRepairItemId: null,

    }
  },
  methods: {
    selectBrandId(brandId) {
      this.$refs.modelDropdownRef.brandId = brandId
      this.$refs.modelDropdownRef.sendGetModelRequest()
    },
    selectModelId(modelId) {
      this.$refs.modelYearDropdownRef.selectedModelId = modelId
      this.$refs.modelYearDropdownRef.sendGetYearRequest()
    },
    selectRepairMainCategory(selectedCategoryId) {
      // Nulli valitud alakategooria ID
      this.selectedRepairSubCategoryId = null;
      this.selectedRepairItemId = null;
      this.resetOrderRepairItemPriceSummary();
      // Seadista valitud kategooria ID
      this.selectedRepairMainCategoryId = selectedCategoryId;
      this.$refs.repairSubCategoryRef.selectedRepairMainCategoryId = selectedCategoryId;
      this.$refs.repairSubCategoryRef.sendGetRepairSubCategoryRequest();
      // Nulli valitud toote kategooria
      this.$refs.repairItemCategoryRef.selectedRepairSubCategoryId = null;

    },

    selectRepairSubCategory(selectedSubCategoryId) {
      this.selectedRepairItemId = null;
      this.resetOrderRepairItemPriceSummary();
      // Seadista valitud alakategooria ID
      this.selectedRepairSubCategoryId = selectedSubCategoryId;
      this.$refs.repairItemCategoryRef.selectedRepairSubCategoryId = selectedSubCategoryId;
      this.$refs.repairItemCategoryRef.sendGetRepairItemCategoryRequest();


    },

    selectRepairItemCategory(selectedRepairItem) {
      this.$refs.orderRepairItemPriceSummaryRef.repairItemCategories = selectedRepairItem

    },

    resetOrderRepairItemPriceSummary() {
      // Nulli OrderRepairItemPriceSummary komponent
      this.$refs.orderRepairItemPriceSummaryRef.repairItemCategories.repairItemId = null;
      },

    handleRepairItemAddedInCart(repairItemCategories) {
      this.$emit('event-cart-changed', repairItemCategories)
    },


  }

}
</script>

