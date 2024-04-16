<template>
  <div class="col-4">

    <div v-for="mainCategory in mainCategories" class="list-group">
      <button type="button" class="list-group-item" data-bs-toggle="button" aria-pressed="false" autocomplete="off"
              @click="toggleCollapse">
        {{ mainCategory.categoryName }}
      </button>
      <div v-if="mainCategory.isCollapsed">
        <button v-for="subCategory in mainCategory.subCategories" type="button" class="list-group-item">
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
      ]

    };
  },
  methods: {
    toggleCollapse() {
      this..isCollapsed = !this.mainCategories.isCollapsed;
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

