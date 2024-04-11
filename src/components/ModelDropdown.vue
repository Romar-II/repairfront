<template>
  <select class="form-select" aria-label="Default select example">
    <option selected>Vali mudel</option>
    <option value="1">MudelAlar</option>
    <option value="2">MudelStiven</option>
    <option value="3">MudelMarek</option>
  </select>
</template>

<script>
export default {
  name: "ModelDropdown",
  data() {
    return {
      brandId: 0,

    }
  },
  methods: {

    sendGetModelRequest() {
      this.$http.get(`/models/${this.brandId}`)
          .then(response => {
            const responseJSON = response.data
          })
          .catch(error => {
            const errorResponseJSON = error.response.data
          })
    }

  }
}
</script>
