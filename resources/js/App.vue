<template>
    <div>
      <v-app id="main">
        <navbar ref="navbar"></navbar>
        <app-header @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"></app-header>
        <v-main>
          <v-container>
            <router-view />
     <!--       <h1 v-show="!user">You need to Login</h1>
            <h1 v-show="user">Greetings for logging in</h1>  -->
          </v-container>
        </v-main>
        <v-footer />
      </v-app>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'
    import Header from './components/Header'
    import Footer from './components/Footer'

    import { mapGetters, mapActions  } from "vuex";

    export default {
        name: "App",
        components: {
            'navbar': Navbar,
            'app-header': Header,
            'v-footer': Footer
        },
        computed: {
            ...mapGetters("auth", ["user"])
        },
        mounted() {
            if (localStorage.getItem("authToken")) {
                this.getUserData().then(() =>
                    this.$router.push({ name: "Home" })
                );
            }
        },
        methods: {
            ...mapActions("auth", ["getUserData"])
        }
    }
</script>

<style scoped>

</style>