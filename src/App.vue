<template>
  <div>
    <Navbar />
    <Home />
    <About />
    <Gallery />
    <Team />
    <service />
    <Contact />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Service from './components/Service.vue'
import Gallery from './components/Gallery.vue'
import Team from './components/Team.vue'
import Contact from './components/Contact.vue'
import './assets/styles/tailwind.css';

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Service,
    Gallery,
    Team,
    Contact
  }
}
</script>

<style>
/* Global styles for App */
</style>
