<template>
  <table class="table">
    <thead>
    {{testVar}}
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
  <button class="custom-button" @click="handleOrderClick">

    Telli
  </button>
  <button @click="handleEmptyBasketClick" class="custom-button">
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
      userId:1,
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
        const responseBody = response.data
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
        const responseBody = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
      addItemInstance(productId) {
      this.testVar=this.testVar+1
        this.$http.put("/cartitem/add", null, {
              params: {
                userId: this.userId,
                productId: productId,
                repairItemId: repairItemId
              }
            }
        ).then(response => {
          const responseBody = response.data
        }).catch(error => {
          const errorResponseBody = error.response.data
        })
    },
    substractItemInstance(productId) {
        this.$http.put("/cartitem/substract", null, {
              params: {
                userId: this.userId,
                productId: productId
              }
            }
        ).then(response => {
          const responseBody = response.data
        }).catch(error => {
          const errorResponseBody = error.response.data
        })
    },
  },
  beforeMount() {
    this.getCartItems()
  }
}

</script>

<style scoped>

</style>