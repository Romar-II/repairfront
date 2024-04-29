<template>
  <div class="container justify-content-center">
    <div class="mt-4">
    <AlertSuccess :message="successMessage"/>
      <AlertDanger :message="errorMessage"/>
    </div>
    <h1>Registreeri kasutaja</h1>
    <div class="mt-4 container text-start col-3">
      <div class="mt-2">
        <label for="username" class="form-label">Kasutajanimi</label>
        <input v-model="newUser.username" type="username" class="form-control border border-success " id="username">
        <small v-if="!newUser.username && !formValid" class="text-danger">Kasutajanimi on nõutud</small>
      </div>
      <div class="mt-2">
        <label for="password" class="form-label">Parool</label>
        <input v-model="newUser.password" type="password" class="form-control border border-success " id="password">
        <small v-if="!newUser.password && !formValid" class="text-danger">Parool on nõutud</small>
      </div>
      <div class="mt-2">
        <label for="password" class="form-label">Parool uuesti</label>
        <input v-model="passwordRepeat" type="password" class="form-control border border-success " id="passwordRepeat">
        <small v-if="!passwordRepeat && !formValid" class="text-danger">Parool uuesti on nõutud</small>
        <small v-if="!passwordsMatch && passwordRepeat && !formValid" class="text-danger">Paroolid ei klapi</small>
      </div>
      <div class="mt-2">
        <label for="email" class="form-label">E-Mail</label>
        <input v-model="newUser.email" type="email" class="form-control border border-success " id="email">
        <small v-if="!newUser.email && !formValid" class="text-danger">E-Mail on nõutud</small>
      </div>
      <div class="mt-5">
        <label for="carBrand" class="form-label">Automark</label>
        <BrandDropdown @event-brand-change="selectBrandId"/>
        <small v-if="!newUser.carBrand && !formValid" class="text-danger">Automark on nõutud</small>
      </div>
      <div class="mt-2">
        <label for="carModel" class="form-label">Auto mudel</label>
        <ModelDropdown @event-model-change="selectModelId" ref="modelDropdownRef"/>
        <small v-if="!newUser.carModel && !formValid" class="text-danger">Mudel on nõutud</small>
      </div>
      <div class="mt-2">
        <label for="carYear" class="form-label">Aasta</label>
        <YearDropdown ref="modelYearDropdownRef" @event-year-change="selectYearId"/>
        <small v-if="!newUser.carYear && !formValid" class="text-danger">Auto aasta on nõutud</small>
      </div>
    </div>
    <div class="mt-3">
      <div class="d-flex justify-content-center">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="agreeTerms">
          <label class="form-check-label" for="flexCheckChecked">
            Nõustun kasutaja tingimustega
          </label>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <small v-if="!agreeTerms && !formValid" class="text-danger">Palun nõustu kasutaja tingimustega</small>
      </div>
    </div>
    <div class="mt-4">
      <button type="button" class="btn btn-success" @click="registerUser">Registreeri</button>
      <div class="mt-4">
        <a type="button" class="btn btn-danger" @click="goToHomePage">Tühista</a>
      </div>
    </div>
  </div>
</template>


<script>
import BrandDropdown from "@/components/BrandDropdown.vue";
import ModelDropdown from "@/components/ModelDropdown.vue";
import YearDropdown from "@/components/YearDropdown.vue";
import router from "@/router";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";

export default {
  name: "RegistrationView",
  components: {AlertDanger, AlertSuccess, YearDropdown, ModelDropdown, BrandDropdown},

  data() {
    return {

      newUser: {
        username: '',
        password: '',
        email: '',
        carBrand: '',
        carModel: '',
        carYear: '',
      },
      passwordRepeat: '',
      passwordsMatch: true,
      formValid: true,
      agreeTerms: false,
      successMessage: '',
      errorMessage: '',


    }
  },

  methods: {
    selectBrandId(brandId) {
      this.$refs.modelDropdownRef.brandId = brandId
      this.newUser.carBrand = brandId
      this.$refs.modelDropdownRef.sendGetModelRequest()
    },
    selectModelId(modelId) {
      this.$refs.modelYearDropdownRef.selectedModelId = modelId
      this.newUser.carModel = modelId
      this.$refs.modelYearDropdownRef.sendGetYearRequest()
    },

    selectYearId(yearId) {
      this.$refs.modelYearDropdownRef.yearId = yearId
      this.newUser.carYear = yearId
      this.$refs.modelYearDropdownRef.sendGetYearRequest()
    },

    goToHomePage() {
      router.push({name: 'home'})
    },

    resetAlertMessages() {
      this.errorMessage = ''
      this.successMessage = ''
    },
    checkPasswordMatch() {
      if (this.newUser.password === this.passwordRepeat) {
        this.passwordsMatch = true;
      } else {
        this.passwordsMatch = false;
      }
    },


    registerUser() {
      this.checkPasswordMatch()
      this.validateForm();
      if (this.formValid && this.passwordsMatch && this.agreeTerms) {
        this.sendPostNewUserRequest();
      } else {
        this.showErrorMessage()
      }
    },

    validateForm() {
      if (!this.newUser.username || !this.newUser.password || !this.passwordRepeat || !this.newUser.email || !this.newUser.carBrand || !this.newUser.carModel || !this.passwordsMatch || !this.agreeTerms) {
        this.formValid = false;
      } else {
        this.formValid = true;
      }
    },

    sendPostNewUserRequest() {
      this.$http.post("/registration", null, {
            params: {
              username: this.newUser.username,
              password: this.newUser.password
            }
          }
      ).then(() => {
        this.handlePostAtmLocationResponse()
      }).catch(() => {
        this.showErrorMessage()
      })
    },

    handlePostAtmLocationResponse() {
      this.showSuccessMessage()
    },

    showSuccessMessage() {
      this.successMessage = 'Õnnitleme! Kasutaja "' + this.newUser.username + '" registreeritud!';
      setTimeout(() => {
        this.resetAlertMessages();
        this.reloadApp();
      }, 5000);
    },
    showErrorMessage() {
      this.errorMessage = 'Võta kokku end ja täida ilusti!';
      setTimeout(() => {
        this.resetAlertMessages();
      }, 3000);
    },

    reloadApp() {
      window.location.reload();
    }
  },
}

</script>