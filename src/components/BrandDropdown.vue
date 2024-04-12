<template>
  <select v-model="selectedBrandId" class="form-select" aria-label="Default select example" @change = "emitSelectedBrandId">
    <option selected disabled hidden>Vali automark</option>
    <option v-for="brand in brands" :value="brand.brandId" :key="brand.brandId">{{ brand.brandName }}</option>
  </select>
</template>

<script>
import router from "@/router";

export default {
  name: "CarsDropDown",
  data() {
    return {
      selectedBrandId:0,
      brands: [
        {
          brandId: 0,
          brandName: ''
        }
      ]

    }
  },
  methods: {

    sendGetBrandRequest() {
      this.$http.get("/brands")
          .then(response => {
            this.brands = response.data
          })
          .catch(error => {
            // router.push({name: 'errorRoute'})
          })

    },
    emitSelectedBrandId() {
      this.$emit(`event-brand-change`, this.selectedBrandId)

    },
  },

  beforeMount() {
    this.sendGetBrandRequest()
  }
}
</script>
