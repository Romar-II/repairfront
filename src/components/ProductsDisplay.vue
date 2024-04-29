<template>


  <div v-if="this.magicNumber>0" class="product-grid">
    <div id="products" v-for="product in products"  class="col text-center" :key="product.productId">
      <div v-if="product.productId.valueOf()!==0" class="align-content-center">
        <div>
<!--          <img v-if="product.productImage === ''" class="img-fluid" src="" alt="Ürituse pilt1 rida"/>-->
<!--          <img v-else class="img-fluid event-image-control" :src="product.productImage" alt="Ürituse pilt 2 rida"/>-->

          <img v-if="product.productImage === null" src="../assets/default-product.30484205.png" class="img-thumbnail" alt="pangaautomaadi vaikimisi pilt">
          <img v-else :src="product.productImage" class="img-thumbnail" alt="pangaautomaadi kasutaia valitud pilt">
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
      userId: sessionStorage.getItem('userId'),
      magicNumber:0,
      products: [
        {
          productId: 0,
          productName: '',
          productPrice: 0.00,
          productDescription: '',
          productImage: '',
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
        this.magicNumber=1

      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    async sendPostNewItemInCartRequest(productId) {
      await this.$http.post("/cart", null, {
            params: {
              userId: this.userId,
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



</style>