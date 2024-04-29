<template>
  <table class="table">
    <thead v-for="orders in orderHistoryItems" >
    <tr>
      {{orders.orderId}}
      {{orders.productWIthQuantityInfos}}
    </tr>
    <tr>
      <th scope="col">Kaup</th>
      <th scope="col">Hind</th>
      <th scope="col">Kogus</th>
      <th scope="col">Vahesumma</th>
    </tr>

    <tbody>
    <tr v-for="product in orders.productWIthQuantityInfos" >
      <td>{{product.productName}}</td>
      <td>{{ product.productPrice}}</td>
      <td>{{ product.qty }}</td>
      <td>{{product.productPrice*product.qty}}</td>

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
    </thead>
  </table>
</template>

<script>
export default {
  name: "OrdersHistory",
  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      // userId: sessionStorage.getItem('userId'),
      orderHistoryItems: [
        {
          orderId: 0,
          productWIthQuantityInfos: [
            {
              productId: 0,
              productName: '',
              productPrice: 0,
              qty: 0,
              repairItemId: 0,
            }
          ]
        }
      ],
      sum: 0,
    }
  },
  methods: {
    getCartItems() {
      this.$http.get(`/cart/history/${this.userId}`)
          .then(response => {
            this.orderHistoryItems = response.data
            this.sortCartItems()
            this.calculateSum()
          })
          .catch(error => {
            // const errorResponseBody = error.response.data
          })
    }
    ,
    sortCartItems() {
      this.cartItems.sort((a, b) => a.productId - b.productId)
      this.cartItems.sort((a, b) => a.repairItemId - b.repairItemId)
    }
    ,
    calculateSum() {
      this.sum = this.cartItems.reduce((total, item) => total + (item.productPrice * item.qty), 0)
    }
    ,

    emitUpdateCart() {
      this.$emit("event-cart-changed")
    }
    ,
  }
  ,
  beforeMount() {
    this.getCartItems()
  }
}

</script>

<style scoped>
.list-group-item {
  min-width: 150px; /* Adjust this value as needed */
}

button.btn:active{
  background:#0D6EFD;
}
.btn{
  border-radius: 0px;
  background: white;
} .btn:focus{
    background: #0D6EFD;
  }
.btn:hover{
  background: #0D6EFD;
}


</style>
<script setup>
</script>