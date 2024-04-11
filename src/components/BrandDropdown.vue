<template>
  <select v-model="test" @change="emitSelectedBrandId" class="form-select">
    <option selected disabled hidden>Vali automark</option>
    <option v-for="brand in brands" :value="brand.brandId" :key="brand.brandId">{{ brand.brandName }}</option>
  </select>
</template>

<script>

export default {
  name: "Branddropdown",
  data() {
    return {
      test: '',
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
      this.$http.get("/repair/brand")
          .then(response => {
            this.brands = response.data
          })
          .catch(error => {
            // router.push({name: 'errorRoute'})
          })

    },
    emitSelectedBrandId() {
      this.test = 'success'
    }
  },
  beforeMount() {
    this.sendGetBrandRequest()
  }
}
</script>
