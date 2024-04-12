<template>
  <select class="form-select" aria-label="Default select example">
    <option selected disabled hidden>Vali mudel</option>
    <option v-for="model in models" :value="model.modelId" :key="model.modelId" >{{model.modelName}}</option>

  </select>
</template>

<script>
export default {
  name: "ModelDropdown",
  data() {
    return {
      brandId: 0,
      models: [
        {
          modelId: 0,
          modelName: ''
        }
      ]
    }
  },
  methods: {

    sendGetModelRequest() {
      this.$http.get(`/models/${this.brandId}`)
          .then(response => {
            this.models = response.data
          })
          .catch(error => {
            // const errorResponseJSON = error.response.data
          })
    }

  }
}
</script>
