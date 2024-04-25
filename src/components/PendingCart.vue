<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="product in cartItems" >
      <td>{{product.productName}}</td>
      <td>{{ product.productPrice}}</td>
      <td>{{ product.qty }}</td>
    </tr>
    </tbody>
    <thead />
    <tbody>
    <tr>
      <td></td>
      <th>Kokku:</th>
      <td>{{sum}}</td>
    </tr>
    </tbody>
  </table>

  <div class="text-end me-4">
  <button class="custom-button">
    Telli
  </button>
  <button class="custom-button">
    Tühjenda korv
  </button>
  </div>
</template>

<script>
export default {
  name: "PendingCart",
  data(){
    return{
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
      this.sum = this.cartItems.reduce((total, item) => total + item.productPrice, 0)
    }
  },
  beforeMount() {
    this.getCartItems()
  }
}

</script>

<style scoped>

</style>