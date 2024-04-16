<template>
  <div class="col-4">

    <div v-for="mainCategory in mainCategories" :key="mainCategory.categoryId" class="list-group" >
      <button type="button" class="list-group-item" @click="handleMainCategoryClick(mainCategory.categoryId)" data-bs-toggle="button" aria-pressed="false" autocomplete="off">
        {{ mainCategory.categoryName }}
      </button>
      <div v-if="mainCategory.isCollapsed">
        <button v-for="subCategory in mainCategory.subCategories" @change="selectSearchCriteria(subCategory.subCategoryId)" :key="subCategory.subCategoryId" type="button" class="list-group-item" data-bs-toggle="button" aria-pressed="false" autocomplete="off">
          {{ subCategory.subCategoryName }}
        </button>
      </div>
    </div>
    {{mainCategories}}
    {{searchCriteria.mainCategoryId}}
    {{searchCriteria.subCategoryId}}
    {{mainCategories.categoryId}}
    {{testmuutuja}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      testmuutuja:0,
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
      searchCriteria: [
        {
          mainCategoryId:1,
          subCategoryId:1
        }
      ]
    };
  },
  methods: {
    handleMainCategoryClick(categoryId){
      this.toggleCollapse(categoryId)
      this.selectSearchCriteria(categoryId)
    },
    toggleCollapse(index) {
      this.mainCategories[index-1].isCollapsed = !this.mainCategories[index-1].isCollapsed;
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
    selectSearchCriteria(categoryId, subCategoryId){
      this.searchCriteria.mainCategoryId = categoryId
      this.searchCriteria.subCategories=subCategoryId
      this.sendTestStuff(categoryId)
      this.sendTestStuff(subCategoryId)

    },
    sendTestStuff(categoryId) {
      this.$http.get(`/some/${categoryId}`)
          .then(response => {
            const responseBody = response.data
          })
          .catch(error => {
            // const errorResponseBody = error.response.data
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

