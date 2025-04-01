<template>
        <div>
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
      </template>
      
      <script>
      import Navbar from '../components/Navbar.vue';
      import Home from '../components/Home.vue';
      import About from '../components/About.vue';
      import Service from '../components/Service.vue';
      import Gallery from '../components/Gallery.vue';
      import Team from '../components/Team.vue';
      import Contact from '../components/Contact.vue';
      import Events from '../components/Events.vue';
      
      export default {
        name: 'HomePage',
        components: {
          Navbar,
          Home,
          About,
          Service,
          Gallery,
          Team,
          Contact,
          Events
        }
      }
      </script>
      
      <style>
      /* Global styles for HomePage */
      </style>
      