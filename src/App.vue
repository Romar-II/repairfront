<template>
  <nav class="navbar bg-primary navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">RepairBoyz</a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" @click="routeToHome" href="#">Kodu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" @click="routeToOnlineShopView" href="#">E-Pood</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" @click="routeToCalculator" href="#">Remondikalkulaator</a>
          </li>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Otsing" aria-label="Search">
            <button class="btn btn-outline-dark" type="submit">Otsi</button>
          </form>
        </ul>
      </div>
      <div>
        <button type="button" class="btn btn-primary">
          <font-awesome-icon :icon="['fas', 'basket-shopping']"/>
          <span v-if="numberOfItemsInCart!==0" class="badge rounded-pill text-bg-danger">{{ numberOfItemsInCart }}</span>
        </button>
        <button type="button" class="btn btn-primary">Logi sisse</button>
      </div>
    </div>
  </nav>
  <router-view @event-cart-changed="handleCartChange"/>
</template>

<script>

import router from "@/router";

export default {

  data() {
    return {
      numberOfItemsInCart: 0
    }
  },
  methods: {
    routeToCalculator() {
      router.push({name: 'repairCalculator'})
    },
    routeToOnlineShopView() {
      router.push({name: 'onlineShopRoute'})
    },
    routeToHome() {
      router.push({name: 'home'})
    },
    handleCartChange(cartItems) {
      this.numberOfItemsInCart = this.numberOfItemsInCart + 1
    }
  }
}
</script>
<style>


</style>

