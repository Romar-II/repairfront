<template>
  <div class="col-4">
    <div v-for="(mainCategory, index) in mainCategories" :key="index" class="list-group" >
      <button type="button" class="list-group-item" @click="toggleCollapse(index)" @change="selectSearchCriteria(mainCategory.categoryId)" data-bs-toggle="button" aria-pressed="false" autocomplete="off">
        {{ mainCategory.categoryName }}
      </button>
      <div v-if="mainCategory.isCollapsed">
        <button v-for="(subCategory, subIndex) in mainCategory.subCategories" :key="subIndex" type="button" class="list-group-item" data-bs-toggle="button" aria-pressed="false" autocomplete="off">
          {{ subCategory.subCategoryName }}
        </button>
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
      searchCriteria: [
        {
          mainCategoryId:0,
          subCategoryId:0
        }
      ]
    };
  },
  methods: {
    toggleCollapse(index) {
      this.mainCategories[index].isCollapsed = !this.mainCategories[index].isCollapsed;
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
      this.mainCategories = this.mainCategories.map(function (category) {
        return {
          ...category,
          isCollapsed: false
        }
      })
    },
    selectSearchCriteria(){

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

