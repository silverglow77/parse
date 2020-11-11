<template>
  <div>
    <h1 v-if="!work">Welcome Home</h1>
    <h1 v-if="work" >My Table of Posts</h1>
  </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: "Home",
        computed: {
            ...mapGetters("workdata", ["work"]),
        }
    }
</script>

<style scoped>
  .v-data-table {margin-top: 18px !important;}
  h1 {margin-top: 25px;}
</style>