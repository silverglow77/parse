<template>

  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="$emit('toggle-drawer')" v-show="user" ></v-app-bar-nav-icon>
    <!-- <v-toolbar-title @click="setUserData( switcher = !switcher )">CrowlerApp</v-toolbar-title> -->
    <v-toolbar-title> <router-link to="/">CrowlerApp</router-link> </v-toolbar-title>  <!-- @click="setStore" -->
    <v-spacer></v-spacer>
    <span v-show="!user"> <router-link to="/login">Login</router-link> </span>
    <span v-show="!user">&nbsp/&nbsp</span>
    <span v-show="!user"> <router-link to="/register">Register</router-link></span>
    <v-list-item-avatar v-if="user">
      <v-img src=https://randomuser.me/api/portraits/men/75.jpg></v-img>
    </v-list-item-avatar>
    <!-- <span v-show="user" v-if="user">&nbsp{{user.name}} &nbsp</span> -->
    <span v-show="user" @click="logout" style="cursor: pointer">&nbsp&nbsp Logout</span>
  </v-app-bar>

</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "Header",
        data () {
            return {
                switcher: false
            }
        },
        computed: {
            ...mapGetters("auth", ["user"]),
        },
        methods: {
            ...mapActions("auth", ["sendLogoutRequest"]),

            logout() {
                this.sendLogoutRequest();
                this.$router.push("/");
            },

        }
    }
</script>

<style scoped>
    a { color: white !important; }
    a:hover {text-decoration: none !important;}
</style>