

<template>
  <select class="form-select" aria-label="Default select example" @change="emitSelectedYearId">
    <option selected disabled hidden>Vali aasta</option>
    <option v-for="year in years" :value="year.yearId" :key="year.yearId" >{{year.yearNumber}}</option>

  </select>
</template>


<script>
export default {
  name: "YearDropdown",
  data() {
    return {
      selectedModelId:0,
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
      this.$http.get(`/years/${this.selectedModelId}`)
          .then(response => {
            this.years = response.data
          })
          .catch(error => {
            // const errorResponseJSON = error.response.data
          })
    },

    emitSelectedYearId() {
      this.$emit(`event-year-change`, this.years)
    },

  }
}
</script>

