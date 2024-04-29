<template>
  <div class="col-4">

    <div class="col">
      <div class="list-group text-center" id="list-tab" role="tablist">

        <div v-for="mainCategory in mainCategories">
          <button class="list-group-item list-group-item-action btn" :key="mainCategory.categoryId"
                  @click="handleMainCategory(mainCategory.categoryId)" :id="mainCategory.categoryId">
            {{ mainCategory.categoryName }}
          </button>
          <div v-if="!mainCategory.isCollapsed">
            <button v-for="subCategory  in mainCategory.subCategories"
                    @click="handleSubCategory(mainCategory.categoryId,subCategory.subCategoryId)"
                    :key="subCategory.subCategoryId" type="button" class="btn ms-3 list-group-item list-group-item-action">
              {{ subCategory.subCategoryName }}
            </button>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainCategories: [
        {
          categoryId: 0,
          categoryName: '',
          isCollapsed: true,
          subCategories: [
            {
              subCategoryId: 0,
              subCategoryName: ''
            }
          ]
        }
      ],
      selectedCategoryId: 0,
      selectedSubCategoryId: 0
    };
  },
  methods: {

    handleMainCategory(categoryId) {
      console.log("Tere")
      this.toggleMainCategory(categoryId)
      this.selectedCategoryId = categoryId
      this.selectedSubCategoryId = 0
      this.emitChosenCategories()

    },
    handleSubCategory(categoryId, subCategoryId) {
      this.selectedCategoryId = categoryId
      this.selectedSubCategoryId = subCategoryId
      this.emitChosenCategories()
    },
    toggleMainCategory(categoryId) {
      this.mainCategories.forEach((category) => {
        if (category.categoryId === categoryId) {
          category.isCollapsed = !category.isCollapsed;
        } else {
          category.isCollapsed = true
        }
      });
    },
    emitChosenCategories() {
      this.$emit('event-category-change', this.selectedCategoryId, this.selectedSubCategoryId)
    },

    sendCategoriesRequest() {
      this.$http.get("/categories")
          .then(response => {
            this.mainCategories = response.data
            this.collapseAllMainCategories()
          })
          .catch(error => {
            // const errorResponseBody = error.response.data
          })
    },
    collapseAllMainCategories() {
      this.mainCategories.forEach((category) => {
        category.isCollapsed = true;
      });
    }
  },
  beforeMount: function () {
    this.sendCategoriesRequest()
  }
};
</script>

<style scoped>
.list-group-item {
  min-width: 150px; /* Adjust this value as needed */
}

button.btn:active{
  background:#0D6EFD;
}
.btn{
  border-radius: 0px;
  background: white;
} .btn:focus{
    background: #0D6EFD;
  }
.btn:hover{
    background: #0D6EFD;
  }


</style>

