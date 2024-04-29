<template>
  <table v-if="sum>0" class="table">
    <thead>
    <tr>
      <th scope="col">Kaup</th>
      <th scope="col">Hind</th>
      <th scope="col">Kogus</th>
      <th scope="col">Vahesumma</th>
      <th scope="col">Muuda kogust</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="product in cartItems" >
      <td>{{product.productName}}</td>
      <td>{{ product.productPrice}}</td>
      <td>{{ product.qty }}</td>
      <td>{{product.productPrice*product.qty}}</td>
      <td>
        <button class="button me-md-2" @click="addItemInstance(product.productId, product.repairItemId)"><font-awesome-icon :icon="['fas', 'plus']" /></button>
        <button class="button" @click="substractItemInstance(product.productId, product.repairItemId)"><font-awesome-icon :icon="['fas', 'minus']" /></button>
      </td>
    </tr>
    </tbody>
    <thead />
    <tbody>
    <tr>
      <td></td>
      <td></td>
      <th>Kokku:</th>
      <td>{{sum}}</td>
      <td></td>

    </tr>
    </tbody>
  </table>

  <div class="text-end me-4">
  <button v-if="sum>0" class="custom-button" @click="handleOrderClick">

    Telli
  </button>
  <button v-if="sum>0" @click="handleEmptyBasketClick" class="custom-button">
    Tühjenda korv
  </button>
  </div>
</template>

<script>
export default {
  name: "PendingCart",
  data(){
    return{
      testVar:0,
      userId: sessionStorage.getItem('userId'),
      // userId: sessionStorage.getItem('userId'),
      cartItems: [
        {
          productId: 0,
          repairItemId:0,
          productName:'',
          productPrice: 0,
          qty: 0,
        }
      ],
      sum:0,
    }
  },
  methods: {
    getCartItems() {
      this.$http.get(`/cart/items/${this.userId}`)
          .then(response => {
            this.cartItems = response.data
            this.sortCartItems()
            this.calculateSum()
          })
          .catch(error => {
            const errorResponseBody = error.response.data
          })
    },
    sortCartItems(){
      this.cartItems.sort((a, b) => a.productId - b.productId)
      this.cartItems.sort((a, b) => a.repairItemId - b.repairItemId)
    },
    calculateSum(){
      this.sum = this.cartItems.reduce((total, item) => total + (item.productPrice*item.qty), 0)
    },
    handleOrderClick() {
      this.$http.put("/basket/order", null, {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.updateCartView()

      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
    handleEmptyBasketClick() {
      this.$http.put("/basket/empty", null, {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.updateCartView()

      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
      addItemInstance(productId, repairItemId) {
      this.testVar=this.testVar+1
        this.$http.put("/cartitem/add", null, {
              params: {
                userId: this.userId,
                productId: productId,
                repairItemId: repairItemId
              }
            }
        ).then(response => {
          this.updateCartView()
        }).catch(error => {
          const errorResponseBody = error.response.data
        })
    },

    substractItemInstance(productId, repairItemId) {
      this.$http.delete("/cartitem/substract", {
              params: {
                userId: this.userId,
                productId: productId,
                repairItemId: repairItemId,
              }
            }
        ).then(response => {
        this.updateCartView()
        }).catch(error => {
          const errorResponseBody = error.response.data
        })
    },
    emitUpdateCart(){
      this.$emit("event-cart-changed")
    },
    updateCartView(){
      this.sortCartItems()
      this.getCartItems()
      this.emitUpdateCart()
    },
    reloadApp() {
      window.location.reload();
    },
  },
  beforeMount() {
    this.getCartItems()
  }
}

</script>

<style scoped>

</style>