<template>
  <div>
    <h1 v-if="!game">We are waiting for Games data</h1>
    <h1 v-if="game" >Table of Games data</h1>
    <v-data-table
            v-if="game"
            :items="game.data"
            :items-per-page="10"
            :headers="headers"
            class="elevation-3"
    ></v-data-table>
  </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "Game",
        data () {
            return {
                headers: [
                    { text: 'Id', value: 'id' },
                    { text: 'Name', value: 'name' },
                    { text: 'Owner', value: 'owner' },
                    { text: 'img', value: 'img' },
                    { text: 'Created_at', value: 'created_at' },
                    { text: 'Updated_at', value: 'updated_at' },
                ],
            }
        },
        created() {
            this.getData();
        },
        computed: {
            ...mapGetters("gamedata", ["game"]),
        },
        methods: {
            ...mapActions("gamedata", ["getGameData"]),

            getData() {
                this.getGameData();
            },

        },
    }
</script>

<style scoped>

</style>