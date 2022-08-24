<template>
  <Menu />
  <router-view />
  <Footer />
  <Scroll />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Scroll from "./components/Scroll.vue";
import Menu from "./components/Menu.vue";


export default {
  name: "App",
  components: { 
    NavBar,
    Menu,
    Footer,
    Scroll
    },
};
</script>
