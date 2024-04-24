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
  mounted() {
    document.addEventListener('keydown', this.handleEnterKeyDown);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleEnterKeyDown);
  },
  methods: {
    executeLogOut() {
      sessionStorage.clear()
      this.$emit('event-update-nav-menu')
      this.$refs.modalRef.closeModal()
      router.push({name: 'home'})
    },
    handleEnterKeyDown(event) {
      if (event.key === 'Enter' && this.$refs.modalRef.isOpen) {
        this.executeLogOut();
      }
    }
  }
}
</script>