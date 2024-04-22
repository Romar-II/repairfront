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
        <button @click="handelItemAddedInCart(product.productId)">
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
    handelItemAddedInCart(productId){
      this.$emit('event-cart-changed', productId)
    }
  }
}
</script>



<style scoped>

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
button {
  background:#4ed1e3;
  border: 0px;
  border-radius: 4px;
  padding: 10px 20px;
  color: black;
  font-size: 14px;

}
#products {

  grid-gap: 15px;
  padding: 10px 20px;
  border-radius: 8px;

  background-color: white;
}
</style>