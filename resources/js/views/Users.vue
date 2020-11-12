<template>
  <div>
    <h1 v-if="!work">Users</h1>
    <h1 v-if="work" >Table of Users</h1>
    <v-data-table
            v-if="work"
            :items="work.data"
            :items-per-page="10"
            :headers="headers"
            class="elevation-3"
    ></v-data-table>
  </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "Users",
        data () {
            return {
                headers: [
                    { text: 'Id', value: 'id' },
                    { text: 'User_id', value: 'user_id' },
                    { text: 'Title', value: 'title' },
                    { text: 'Description', value: 'description' },
                    { text: 'Created_at', value: 'created_at' },
                    { text: 'Updated_at', value: 'updated_at' },
                ],
            }
        },
        created() {
            this.getData();
        },
        computed: {
            ...mapGetters("workdata", ["work"]),
        },
        methods: {
            ...mapActions("workdata", ["getWorkData"]),

            getData() {
                this.getWorkData();
            },

        },
    }
</script>

<style scoped>
  .v-data-table {margin-top: 18px !important;}
  h1 {margin-top: 25px;}
</style>