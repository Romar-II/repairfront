
<template>
  <div class="col-4">
    <div v-for="mainCategory in mainCategories" class="list-group">
      <button type="button" class="list-group-item" data-bs-toggle="button" aria-pressed="false" autocomplete="off" @click="toggleCollapse">
        Engine
      </button>
      <div v-if="mainCategory.isCollapsed">
        <button v-for="subCategory in mainCategory.subCategories" type="button" class="list-group-item">Oil</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
      mainCategories: [
        {
          mainCategoryId: 0,
          mainCategoryName: '',
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
        this.isCollapsed = !this.isCollapsed;
      },
    sendCategoriesRequest()
    {
      this.$http.get("/shop/categories")
          .then(response => {
            this.mainCategories = response.data
          })
          .catch(error => {
            // const errorResponseBody = error.response.data
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

