<template>
<Modal ref="modalRef">
  <template #title>
    Soovid sisse logida?
  </template>

  <template #body>
    <div class="container text-start">
      <div class="row justify-content-center">
        <div class="col">
          <AlertDanger :message="message"/>
          <div class="mb-3">
            <label for="username" class="form-label">Kasutajanimi</label>
            <input ref="usernameInput" v-model="username" type="text" class="input-focus form-control border border-success" id="username">
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">Parool</label>
            <input v-model="password" type="password" class="form-control border border-success" id="password">
          </div>
        </div>
      </div>
    </div>
  </template>


  <template #buttons>
    <button type="submit" class="btn btn-success text-center text-nowrap" @click="executeLogin">Logi sisse</button>
  </template>



</Modal>
</template>


<script>
import Modal from "@/modal/Modal.vue";

export default {
  name: "LogInModal",
  components: {Modal},
  data() {
    return{
      username: '',
      password: '',

    }
  },
}
</script>

<style scoped>

</style>