<template>

  <div class="d-flex justify-content-end me-3 mt-3
">
    <button class="btn btn-secondary btn-sm dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Mitu tk korraga
    </button>
    <ul class="dropdown-menu">
      ...
    </ul>
  </div>
  <div class="container text-center">
  <div class="row">
    </div>
  </div>
  <div class="row">
    <div class="col">
      {{ products }}
    </div>
  </div>



</template>

<script>
export default {
  name: "ProductsDisplay",
  data(){
    return{
      products: [
        {
          productId: 0,
          productName: '',
          productPrice: 0.00,
          productDescription: '',
          productImageData: '',
        }
      ],
    }
  },
  methods:{

    sendProductRequest(selectedCategoryId, selectedSubCategoryId) {
      this.$http.get("/products", {
            params: {
              categoryId: selectedCategoryId,
              subCategoryId: selectedSubCategoryId
            }
          }
      ).then(response => {
        this.products = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
  }
}
</script>



<style scoped>

</style>