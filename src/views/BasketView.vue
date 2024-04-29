<template>
  <div class="row">

    <div class="col-2 ms-5 mt-5">
      <a>
        <button @click="choice=1" href="" class="btn">
          Ostukorv
        </button>
      </a>
      <div>
        <button @click="choice=2" class="btn">
          Coming soon...
        </button>
      </div>
      <div>
        <button @click="choice=3" class="btn">
          Coming soon...
        </button>
      </div>



    </div>
    <div v-if="choice===1" class="col mt-5">
      <PendingCart @event-cart-changed="emitUpdateCart"/>
    </div>
    <div v-if="choice===2" class="col mt-5">
      <OrdersHistory/>
    </div>
    <div v-if="choice===3" class="col mt-5">
      Under construction
    </div>
  </div>

</template>


<script>


import PendingCart from "@/components/PendingCart.vue";
import OrdersHistory from "@/components/OrdersHistory.vue";
import OrderRepairItemPriceSummary from "@/components/OrderRepairItemPriceSummary.vue";

export default {
  name: "BasketView",
  components: {OrdersHistory, OrderRepairItemPriceSummary, PendingCart},

  data() {
    return {
      choice:1,
      productAddedToCart: 0,
      productsIds: [1, 2, 3, 4, 5],
      userId: sessionStorage.getItem('userId'),
      // userId: sessionStorage.getItem('userId'),
      cartItems: [
        {
          productId: 0,
          repairItemId: 0,
          price: 0,
          quantity: 0,
        }
      ],
    }
  },
  methods: {
    getCartItems() {
      this.$http.get(`/cart/items/${this.userId}`)
          .then(response => {
            this.cartItems = response.data
          })
          .catch(error => {
            const errorResponseBody = error.response.data
          })
    },
    emitUpdateCart() {
      this.$emit("event-cart-changed")
    }
  },
  beforeMount() {
    this.getCartItems()
  }
}
</script>


<style scoped>
button.btn:active {
  background: #358ed0;
}

.btn {
  min-height: 50px;
  min-width: 150px;
  border-radius: 4px;
  background: white;
  border-style: groove;
  border: black;
  border-color: black;
  border-radius: 4px;
  padding: 10px 20px;
  color: #151f26;
  font-size: 14px;
}

.btn:focus {
  background: #0D6EFD;
}

.btn:hover {
  background: #0D6EFD;
}


</style>