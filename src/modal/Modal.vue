<template>
  <!-- Modal -->
  <div v-if="isOpen" class="modal-backdrop fade show d-block " />
  <FocusTrap v-if="isOpen" class="modal fade show" tabindex="-1" style="display: block;">
    <div class="modal-dialog" ref="modalRef">
      <div :class="'modal-content ' + modalBgColor">
        <div class="modal-header">
          <h1 class="modal-title fs-5">
            <slot name="title">
              <!-- Title-->
            </slot>
          </h1>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body">
            <!-- body-->
          </slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary custom-btn-close" @click="closeModal">Sulge</button>
          <slot name="buttons">
            <!-- button -->
          </slot>
        </div>
      </div>
    </div>
  </FocusTrap>
</template>

<script>
import {FocusTrap} from "focus-trap-vue";

export default {
  name: "Modal",
  components: {FocusTrap},
  props: {
    modalBgColor: ''
  },

  data() {
    return{
      isOpen:false,
      useEnterForCloseButton: false
    }
  },

  methods: {
    openModal() {
      //this.$emit('event-open-modal');
      this.isOpen = true
      window.addEventListener('keydown', this.onKeyPress);
      document.activeElement.blur()
    },
    closeModal() {
      this.$emit('event-close-modal')
      this.isOpen = false
      window.removeEventListener('keydown', this.onKeyPress);

    },

    onKeyPress(event) {
      if (event.key === 'Escape' || event.key === 'Esc') {
        this.closeModal();
      }

      if (this.useEnterForCloseButton && event.key === 'Enter') {
        this.closeModal()
      }

    }
  }


}
</script>

<style scoped>

</style>