<template>

  <div v-if="isOpen" class="modal fade" id="logInModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
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
          <button type="button" class="btn btn-secondary" @click="closeModal">Sulge</button>
          <slot name="buttons">
            <!-- button -->
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",

  data() {
    return{
      isOpen:false
    }
  },

  methods: {
    openModal() {
      //this.$emit('event-open-modal');
      this.isOpen = true
    },
    closeModal() {
      this.$emit('event-close-modal')
      this.isOpen = false


    },
  }


}
</script>

<style scoped>

</style>