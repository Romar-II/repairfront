<template>

  <div class="d-flex justify-content-end me-3 mt-3">
    <button class="btn btn-secondary btn-sm dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Mitu tk korraga
    </button>
    <ul class="dropdown-menu">
      ...
    </ul>
  </div>
  <div class=" row container text-center">
    <div v-for="product in products" class="col" :key="product.productId">
      <div>
        <div>
          <img src="../assets/default-product.30484205.png" height="200" width="200"/>
        </div>
        <div>
          {{ product.productImageData }}
        </div>
        <div>
          {{ product.productName }}
        </div>
        <div>
          {{ product.productDescription }}
        </div>
        <div>
          Hind: {{ product.productPrice }}
        </div>
      </div>
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