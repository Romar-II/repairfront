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
    <div class="col">

    </div>
  </div>

</template>


<script>


export default {
  name: "BasketView",

  data() {
    return {
      productAddedToCart: 0,
      productsIds: [1, 2, 3, 4, 5],
      userId: 1,
      // userId: sessionStorage.getItem('userId'),
      cartItems:[
        {
          productId:0,
          price:0,
          quantity:0,
        }
      ],
      cartRepairItems:[
        {
          repairItemId:0,
          price:0,
          quantity:0,
        }
      ]
    }
  },
  methods: {
    getCartItems(){
        this.$http.get(`/cart/items/${this.userId}`)
            .then(response => {
              this.cartItems = response.data
            })
            .catch(error => {
              const errorResponseBody = error.response.data
            })
    },
    getCartRepairItems(){
        this.$http.get(`/cart/repairitems/${this.userId}`)
            .then(response => {
              this.cartRepairItems = response.data
            })
            .catch(error => {
              const errorResponseBody = error.response.data
            })
    }
  },
  beforeMount() {
    this.getCartItems()
    this.getCartRepairItems()
  }
}
</script>


<style scoped>
button.btn:active {
  background: #0D6EFD;
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
  color: black;
  font-size: 14px;
}

.btn:focus {
  background: #0D6EFD;
}

.btn:hover {
  background: #0D6EFD;
}


</style>