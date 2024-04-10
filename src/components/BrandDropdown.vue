

<template>
  <select class="form-select" aria-label="Default select example">
    <option selected>Vali automark</option>
    <option v-for="brand in brands" :value="brand.brandId" :key="brand.brandId">{{brand.brandName}}</option>
  </select>
</template>

<script>
import router from "@/router";

export default {
  name: "CarsDropDown",
  data(){
    return{
      brands:[
        {brandId:0,
        brandName:''}
      ]

    }
  },
  methods:{

      sendGetBrandRequest() {
        this.$http.get("/repaircalculator")  // todo: küsi Rainilt
            .then(response => {
              this.brandName= response.data
            })
            .catch(error => {
              router.push({name: 'errorRoute'})
            })

    }
  },
  beforeMount() {
    this.sendGetBrandRequest()
  }
}
</script>
