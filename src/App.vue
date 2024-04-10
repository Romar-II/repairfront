<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: darkgray; padding-top: 0;">
    <div class="container-fluid" style="background-color: darkgray; padding-top: 35px; padding-bottom: 10px ">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">RepairBoyz</a> |
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Kodu</a>

          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">E-Pood</a>
          </li>
          <li class="nav-item">
            <router-link to='/repair-calculator' >Remondikalkulaator</router-link>
            <router-view> </router-view>
          </li>

          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Otsing" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Otsi</button>
          </form>

        </ul>
        <button type="button" class="btn btn-primary">Logi sisse</button>


      </div>
    </div>

  </nav>

</template>

<style scoped>
/* Add any additional styling here */
</style>

<script setup>
/* Add any script setup here */
</script>