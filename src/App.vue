<template>
  <div>
    <Loader v-if="isLoading" />
    <div v-else>
      <Navbar />
      <section>
        <Home />
        <About />
        <Gallery />
        <Team />
        <Service />
        <Events />
        <Contact />
      </section>
    </div>
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
import Events from './components/Events.vue'
import Loader from './components/Loader.vue'
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
    Contact,
    Events,
    Loader
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Simulated loading time
  }
}
</script>

<style>
/* Global styles for App */
</style>
