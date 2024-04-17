<template>
  <div class="col-4" >

    <div class="col">
      <div class="list-group" id="list-tab" role="tablist">
        <button v-for="(mainCategory1, index) in mainCategories"  class="list-group-item list-group-item-action" :key="mainCategory1.categoryId"
           @click="handleMainCategoryClick(mainCategory1.categoryId, index)" id="list-settings-list" data-bs-toggle="list"
           href="#list-settings" role="tab" aria-controls="list-settings">{{mainCategory1.categoryName}}
          <div v-if="mainCategory1.isCollapsed">
            <button v-for="(subCategory, index) in mainCategory1.subCategories"
                    @change="handleSubCategoryClick(subCategory.subCategoryId, index)"
                    :key="subCategory.subCategoryId" type="button" class="list-group-item list-group-item-action" data-bs-toggle="list"
                    aria-pressed="false" autocomplete="off">
              {{ subCategory.subCategoryName }}
            </button>
          </div>
        </button>

      </div>

    {{ testmuutuja }}

  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testmuutuja: 0,
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
      products:[
        {
          productId:0,
          productName:'',
          productPrice:0.00,
          productDescription:'',
          productImageData:'',
        }
      ]
    };
  },
  methods: {
    handleSubCategoryClick(subCategoryId, index) {

    },
    handleMainCategoryClick(categoryId, index) {
      this.toggleCollapse(index)
    },
    toggleCollapse(index) {
      this.updateMainCategories()
      this.mainCategories[index].isCollapsed = !this.mainCategories[index].isCollapsed;
    },
    sendproductRequest() {
      this.$http.get("/some/path")
          .then(response => {
            const responseBody = response.data
          })
          .catch(error => {
            const errorResponseBody = error.response.data
          })
    },
    sendCategoriesRequest() {
      this.$http.get("/shop/categories")
          .then(response => {
            this.mainCategories = response.data
            this.updateMainCategories()
          })
          .catch(error => {
            // const errorResponseBody = error.response.data
          })
    },
    updateMainCategories() {
      this.mainCategories = this.mainCategories.map((category) => {
        return {
          ...category,
          isCollapsed: false
        }
      })
    },
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

