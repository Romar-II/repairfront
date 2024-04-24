<template>
  <h>
    {{testVar}}
  </h>

  <div class="d-flex justify-content-end me-3 mt-3">
    <button class="btn btn-secondary btn-sm dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Mitu tk korraga
    </button>
    <ul class="dropdown-menu">
      ...
    </ul>
  </div>
  <div class="product-grid">
    <div id="products" v-for="product in products"  class="col text-center" :key="product.productId">
      <div v-if="product.productId.valueOf()!==0" class="align-content-center">
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
        <button @click="sendPostNewItemInCartRequest(product.productId)">
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
      testVar:0,
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

    sendPostNewItemInCartRequest(productId) {
      this.$http.post("/cart", null, {
            params: {
              userId: 1,
              productId: productId
            }
          }
      ).then(response => {
        this.handleItemAddedInCart()
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
    handleItemAddedInCart(){
      this.$emit('event-cart-changed')
    }
  }
}
</script>



<style scoped>

h{
  background-color: white
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

}
button {
  background:#0D6EFD;
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