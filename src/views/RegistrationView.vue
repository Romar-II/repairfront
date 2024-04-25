
<template>
  <div class="container justify-content-center">
    <h1>Registration Form</h1>
    <div class="mt-4 container text-start col-3">
      <label for="username" class="form-label">Kasutajanimi</label>
      <input v-model="username" type="username" class="form-control border border-success " id="username">

      <label for="password" class="form-label">Parool</label>
      <input v-model="password" type="password" class="form-control border border-success " id="password">

      <label for="password" class="form-label">Parool uuesti</label>
      <input v-model="password" type="password" class="form-control border border-success " id="password">

      <label for="email" class="form-label">E-Mail</label>
      <input v-model="email" type="email" class="form-control border border-success " id="password">

      <label for="carBrand" class="form-label">Automark</label>
      <input v-model="carBrand" type="text" class="form-control border border-success " id="password">

      <label for="carModel" class="form-label">Mudel</label>
      <input v-model="carModel" type="text" class="form-control border border-success " id="password">
    </div>
    <div class="mt-4">
      <button>Registreeri 50eur eest</button>
    </div>


  </div>
 </template>


  <script>
    export default {
      name: "RegistrationView",

      data() {
        return{
          username:'',
          password:'',
          email:'',
          carBrand:'',
          carModel:'',


        }
      },

    }
  </script>