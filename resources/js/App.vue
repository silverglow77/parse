<template>
    <div>
      <v-app id="main">
        <navbar ref="navbar"></navbar>
        <app-header @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"></app-header>
        <v-main>
          <div class="main-wrapper">
            <router-view />
          </div>

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
  .main-wrapper {margin-left: 10px !important; margin-right: 10px !important;}
</style>