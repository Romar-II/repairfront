<template>
  <div class="row">

    <div class="col-2 ms-5 mt-5">
      <a>
        <button href="" class="btn">
          Ostukorv
        </button>
      </a>
      <div>
        <button class="btn">
          Tellimused
        </button>
      </div>
      <div>
        <button class="btn">
          Lisanupp
        </button>
      </div>
      <div>
        <button class="btn">
          SAD
        </button>
      </div>


    </div>
    <div class="col mt-5">
      <PendingCart @event-cart-changed="emitUpdateCart"/>
    </div>
  </div>

</template>


<script>


import PendingCart from "@/components/PendingCart.vue";

export default {
  name: "BasketView",
  components: {PendingCart},

  data() {
    return {
      productAddedToCart: 0,
      productsIds: [1, 2, 3, 4, 5],
      userId: 1,
      // userId: sessionStorage.getItem('userId'),
      cartItems: [
        {
          productId: 0,
          repairItemId:0,
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