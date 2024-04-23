<template>


  <!-- Modal -->
  <div v-if="isOpen" class="modal fade" id="logInModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">
            <slot name="title">
              <!-- Title-->
            </slot>
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body">
            <!-- body-->
          </slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sulge</button>
          <button type="button" class="btn btn-primary">Logi sisse</button>
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
      isOpen:true
    }
  },

  methods: {
    openModal() {
      this.$emit('event-open-modal');
      this.isOpen = true
    },
  },


}
</script>

<style scoped>

</style>