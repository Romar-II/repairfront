<template>
  <div class="text-center">

    <div class=" col">
      <h1>Remondileht</h1>
    </div>

    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src="../assets/remont.png" class="d-block w-70" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/parandus1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/logo.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

</template>

<script>


export default {
  name: 'HomeView',

}
</script>
