<template>
  <select v-model="selectedModelId" class="form-select" aria-label="Default select example" @change = "emitSelectedModelId">
    <option selected disabled hidden>Vali mudel</option>
    <option v-for="model in models" :value="model.modelId" :key="model.modelId" >{{model.modelName}}</option>

  </select>
</template>

<script>
export default {
  name: "ModelDropdown",
  data() {
    return {
      selectedModelId: 0,
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
    },
    emitSelectedModelId() {
      this.$emit(`event-model-change`, this.selectedModelId)

    },

  },
}
</script>
