<template>
  <div>
    <h1 v-if="!work">Home</h1>
    <h1 v-if="work" >My Table of Posts</h1>
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
    import { mapGetters } from "vuex";

    export default {
        name: "Home",
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
        computed: {
            ...mapGetters("workdata", ["work"]),
        }
    }
</script>

<style scoped>

</style>