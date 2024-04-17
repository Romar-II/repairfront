<template>
  <div class="col-4">


    <div class="col">
      <div class="list-group" id="list-tab" role="tablist">
        <div v-for="mainCategory in mainCategories">
          <button  class="list-group-item list-group-item-action" ata-bs-toggle="button"  :key="mainCategory.categoryId"
                  @click="handleMainCategory(mainCategory.categoryId)" :id="mainCategory.categoryId">
            {{ mainCategory.categoryName }}
          </button>
          <div v-if="!mainCategory.isCollapsed">
            <button v-for="subCategory  in mainCategory.subCategories"
                    @click="handleSubCategory(mainCategory.categoryId,subCategory.subCategoryId)"
                    :key="subCategory.subCategoryId" type="button" class="list-group-item list-group-item-action" >
              {{ subCategory.subCategoryName }}
            </button>
          </div>


        </div>


      </div>


<!--      <div class="list-group" id="list-tab" role="tablist">-->
<!--        <button v-for="(mainCategory1, index) in mainCategories" class="list-group-item list-group-item-action"-->
<!--                :key="mainCategory1.categoryId"-->
<!--                @click="handleMainCategoryClick(mainCategory1.categoryId, index)" :id="mainCategory1.categoryId"-->
<!--                data-bs-toggle="list"-->
<!--                href="#list-settings" role="tab" aria-controls="list-settings">{{ mainCategory1.categoryName }}-->
<!--          <div v-if="mainCategory1.isCollapsed">-->
<!--            <button v-for="(subCategory, index) in mainCategory1.subCategories"-->
<!--                    @click="handleSubCategoryClick(subCategory.subCategoryId, index)"-->
<!--                    :key="subCategory.subCategoryId" type="button" class="list-group-item list-group-item-action"-->
<!--                    data-bs-toggle="list"-->
<!--                    aria-pressed="false" autocomplete="off">-->
<!--              {{ subCategory.subCategoryName }}-->
<!--            </button>-->
<!--          </div>-->
<!--        </button>-->

<!--      </div>-->

      {{ selectedCategoryId }}
      {{ selectedSubCategoryId}}


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
      products: [
        {
          productId: 0,
          productName: '',
          productPrice: 0.00,
          productDescription: '',
          productImageData: '',
        }
      ],
      selectedCategoryId:0,
      selectedSubCategoryId:0
    };
  },
  methods: {
    handleMainCategory(categoryId) {
      this.toggleMainCategory(categoryId)
      this.selectedCategoryId=categoryId
      this.selectedSubCategoryId=0
      this.sendProductRequest()

    },
    handleSubCategory(categoryId, subCategoryId) {
      this.selectedCategoryId=categoryId
      this.selectedSubCategoryId =subCategoryId
      this.sendProductRequest()
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




    handleSubCategoryClick(subCategoryId) {
      this.selectedCategoryId = 0
      this.selectedSubCategoryId = subCategoryId
      this.sendProductRequest(subCategoryId)
    },
    handleMainCategoryClick(categoryId, index) {
      this.toggleCollapse(index)
      this.selectedSubCategoryId = 0
      this.selectedCategoryId = categoryId
      this.sendProductRequest(categoryId)
    },
    toggleCollapse(index) {
      this.collapseAllMainCategories()
      this.mainCategories[index].isCollapsed = !this.mainCategories[index].isCollapsed;
    },
    sendProductRequest() {
      this.$http.get("/product", {
            params: {
              categoryId: this.selectedCategoryId,
              subCategoryId: this.selectedSubCategoryId
            }
          }
      ).then(response => {
        this.products = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
    sendCategoriesRequest() {
      this.$http.get("/shop/categories")
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
</style>

