<template>
  <div>
    <Navbar />
    <Home />
    <About />
    <Service />
    <Gallery />
    <Team />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Service from './components/Service.vue'
import Gallery from './components/Gallery.vue'
import Team from './components/Team.vue'
import './assets/styles/tailwind.css';

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Service,
    Gallery,
    Team
  }
}
</script>

<style>
/* Global styles for App */
</style>
