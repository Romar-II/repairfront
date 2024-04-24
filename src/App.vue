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
        <button @click="routeToBasket" type="button" class="btn btn-primary">
          <font-awesome-icon :icon="['fas', 'basket-shopping']"/>
          <span v-if="numberOfItemsInCart!==0" class="badge rounded-pill text-bg-danger">{{
              numberOfItemsInCart
            }}</span>
        </button>

        <template v-if="isLoggedIn">
          <button @click="openLogOutModal" type="button" class="btn btn-primary">Logi välja</button>
        </template>
        <template v-else>
          <button @click="openLogInModal" type="button" class="btn btn-primary">Logi sisse</button>
        </template>

      </div>
    </div>
  </nav>
  <LogInModal ref="logInModalRef" @event-update-nav-menu="updateNavMenu"/>
  <LogOutModal ref="logOutModalRef" @event-update-nav-menu="updateNavMenu"/>
  <router-view @event-cart-changed="updateCart"/>
</template>

<script>

import router from "@/router";
import LogInModal from "@/modal/LogInModal.vue";
import LogOutModal from "@/modal/LogOutModal.vue";
import BasketView from "@/views/BasketView.vue";

export default {
  components: {BasketView, LogOutModal, LogInModal},

  data() {
    return {
      numberOfItemsInCart: 0,
      testVar: 0,
      userId: 1,
      isLoggedIn: false,
      isAdmin: false,
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
    routeToBasket() {
      router.push({name: 'basketRoute'})
    },
    updateCart() {
      this.$http.get(`/cart/update/${this.userId}`)
          .then(response => {
            this.numberOfItemsInCart = response.data
          })
          .catch(error => {
            const errorResponseBody = error.response.data
          })
    },

    openLogInModal() {
      this.$refs.logInModalRef.$refs.modalRef.openModal()
    },

    openLogOutModal() {
      this.$refs.logOutModalRef.$refs.modalRef.openModal()
    },

    updateNavMenu() {
      this.updateIsLoggedInValue()
      this.updateIsAdminValue()
    },

    updateIsLoggedInValue() {
      let userId = sessionStorage.getItem('userId')
      this.isLoggedIn = userId !== null
    },

    updateIsAdminValue() {
      if (this.isLoggedIn) {
        let roleName = sessionStorage.getItem('roleName')
        this.isAdmin = roleName === 'admin'
      }
    },
  },


}

</script>

<style>

</style>
