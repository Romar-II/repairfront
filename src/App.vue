<template>
  <nav class="navbar bg-primary navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">RepairBoyz</a>|
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
        <button type="button" class="btn btn-primary">Logi sisse</button>


      </div>
    </div>
  </nav>
  <router-view/>

</template>


<script>
import router from "@/router";

export default {

  data() {
    return {}
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
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #151f26;



  /* Set background size to cover the entire container */
  background-size: cover;
  /* Center the background image */
  background-position: center;
  /* Make sure the background image is fixed so it doesn't scroll with content */
  background-attachment: fixed;
  /* Add some fallback background color */
  background-color: #358ed0; /* Fallback color */
  /* Ensure content takes up the full height of the viewport */
  min-height: 100vh;
  /* Other styles for your app container */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>