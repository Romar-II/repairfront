<template>

  <div class="d-flex justify-content-end me-3 mt-3">
    <button class="btn btn-secondary btn-sm dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Mitu tk korraga
    </button>
    <ul class="dropdown-menu">
      ...
    </ul>
  </div>
  <div class="product-grid">
    <div v-for="product in products" class="col text-center" :key="product.productId">
      <div v-if="product.productId.valueOf()!==0" class="border-black border align-content-center">
        <div>
          <img src="../assets/default-product.30484205.png" height="200" width="200"/>
        </div>
        <div>
          {{ product.productImageData }}
        </div>
        <div >
          {{ product.productName }}
        </div>
        <div>
          {{ product.productDescription }}
        </div>
        <div>
          Hind: {{ product.productPrice }}
        </div>
        <button>
          {{ "Lisa korvi" }}
        </button>
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
      console.log("TERE MA OLEN SIIN")
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

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>