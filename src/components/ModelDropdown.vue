<template>
  <select class="form-select" aria-label="Default select example">
    <option selected>Vali mudel</option>
  </select>
</template>

<script>
export default {
  name: "ModelDropdown",
  data() {
    return {
      brandId: 0,

      modelInfo:{
        modelId:0,
      }

    }
  },
  methods: {

    sendGetModelRequest() {
      this.$http.get(`/repair/model/${this.brandId}`)
          .then(response => {
            this.modelInfo = response.data
          })
          .catch(error => {
            const errorResponseJSON = error.response.data
          })
    }

  }
}
</script>
