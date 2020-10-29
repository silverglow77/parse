<template>
  <div>
    <v-card
            class="mx-auto"
            max-width="600"
    >
      <v-card-text>
        <div></div>
        <p class="display-1 text--primary ">
          Greetings! this is a CrowlerApp
        </p>
        <br>
        <div class="text--primary">
          <p>
            To continue working you need to register or log in!
          </p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
    export default {
        name: "Main",
        mounted() {
         //  localStorage.removeItem("authToken");
        }
    }
</script>

<style scoped>
  .v-card {margin-top: 50px}
  .v-card p {text-align: center}
</style>