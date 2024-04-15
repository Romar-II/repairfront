<script>
export default {
  name: "ShopAccordion"
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="col-4">
          <b-button v-b-toggle="'collapse-2'" class="m-1">Toggle Collapse</b-button>
          <b-collapse id="collapse-2">
            <b-card>I am collapsible content!</b-card>
          </b-collapse>
          <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
            <b-button v-b-toggle.collapse-2 class="m-1">Toggle Collapse</b-button>
            <b-collapse id="collapse-2">
              <b-card>I am collapsible content!</b-card>
            </b-collapse>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
            <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
          </div>
        </div>
      </div>
      <div class="col">
        Column
      </div>
      <div class="col">
        Column
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>