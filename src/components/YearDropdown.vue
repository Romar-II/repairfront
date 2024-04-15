

<template>
  <select class="form-select" aria-label="Default select example">
    <option selected disabled hidden>Vali aasta</option>
    <option v-for="year in years" :value="year.yearId" :key="year.yearId" >{{year.yearNumber}}</option>

  </select>
</template>


<script>
export default {
  name: "YearDropdown",
  data() {
    return {
      yearId: 0,
      years: [
        {
          yearId: 0,
          yearNumber: ''
        }
      ]
    }
  },
  methods: {

    sendGetYearRequest() {
      this.$http.get(`/years/${this.modelId}`)//kas siin ka brandID või ei ole sellel sõltuvust?
          .then(response => {
            this.years = response.data
          })
          .catch(error => {
            // const errorResponseJSON = error.response.data
          })
    }

  }
}
</script>

