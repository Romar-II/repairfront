<template>
  <nav class="navbar bg-primary navbar-expand-lg" >
    <div class="container-fluid" >
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">RepairBoyz</a>|
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" @click="routeToHome" href="#">Kodu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" @click="routeToShop" href="#">E-Pood</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" @click="routeToCalculator" href="#">Remondikalkulaator</a>
          </li>

          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Otsing" aria-label="Search">
            <button class="btn btn-outline-dark" type="submit">Otsi</button>
          </form>

        </ul>
        <button type="button" class="btn btn-primary">Logi sisse</button>


      </div>
    </div>
  </nav>
  <router-view/>

</template>


<script>
import router from "@/router";
import HomeView from "@/views/HomeView.vue";

export default {

data(){
  return{

  }
},
  methods: {
    routeToCalculator(){
      router.push({name: 'repairCalculator'})
    },
    routeToHome(){
      router.push({name: 'home'})
    },
    routeToShop(){
      router.push({name:'onlineShop'})
    }
  }
}
</script>