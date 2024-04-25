
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

      <BrandDropdown @event-brand-change="selectBrandId" class="mt-5"/>
      <ModelDropdown @event-model-change="selectModelId" ref="modelDropdownRef" class="mt-3"/>
      <YearDropdown ref="modelYearDropdownRef" class="mt-3"/>

<!--      <label for="carBrand" class="form-label">Automark</label>-->
<!--      <input v-model="carBrand" type="text" class="form-control border border-success " id="password">-->

<!--      <label for="carModel" class="form-label">Mudel</label>-->
<!--      <input v-model="carModel" type="text" class="form-control border border-success " id="password">-->
    </div>
    <div class="mt-4">
      <button>Registreeri 50eur eest</button>
    </div>


  </div>
 </template>


  <script>
    import BrandDropdown from "@/components/BrandDropdown.vue";
    import ModelDropdown from "@/components/ModelDropdown.vue";
    import YearDropdown from "@/components/YearDropdown.vue";

    export default {
      name: "RegistrationView",
      components: {YearDropdown, ModelDropdown, BrandDropdown},

      data() {
        return{
          username:'',
          password:'',
          email:'',
          carBrand:'',
          carModel:'',


        }
      },

      methods:{
        selectBrandId(brandId) {
          this.$refs.modelDropdownRef.brandId = brandId
          this.$refs.modelDropdownRef.sendGetModelRequest()
        },
        selectModelId(modelId) {
          this.$refs.modelYearDropdownRef.selectedModelId = modelId
          this.$refs.modelYearDropdownRef.sendGetYearRequest()
        },
      }

    }
  </script>