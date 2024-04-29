<template>
  <Modal ref="modalRef" :modal-bg-color="'bg-danger-subtle'">
    <template #title>
      Logi välja?
    </template>
    <template #buttons>
      <button type="button" class="btn btn-danger" @click="executeLogOut">Jah</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'LogOutModal',
  components: {Modal},
  props: {

  },

  methods: {
    executeLogOut() {
      sessionStorage.clear()
      this.$emit('event-update-nav-menu')
      this.$emit('event-cart-changed')
      this.$refs.modalRef.closeModal()
      this.reloadApp()
      router.push({name: 'home'})

    },

    reloadApp() {
      window.location.reload();
    },
  },
}
</script>