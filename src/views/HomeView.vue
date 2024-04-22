<template>
  <div class="text-center">

    <div class=" col text-white ">
      <h1>Autoremondi pakkumine paari klikiga!</h1>
    </div>

    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" style="width: 30%;">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src="../assets/pilt1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/pilt2.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/pilt3.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/vaade1.jpg" class="d-block w-100" alt="...">
        </div>

      </div>
    </div>
    <div class="position-relative">
      <div class="position-absolute top-0 end-0">
        <img src="../assets/garantii2.png" width="200" height="150">
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name: 'HomeView',

}
</script>

<style>

.text-white {
  color: white;
}

</style>
