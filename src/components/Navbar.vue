<template>
  <nav
    class="text-white p-3 px-4 fixed top-0 left-0 w-full bg-black z-50"
    v-bind:class="{ 'hidden': !isVisible }"
  >
    <div class="flex justify-between items-center max-w-7xl mx-auto">
      <!-- Logo Section -->
      <div class="text-2xl font-bold">
        <img
          src="/favicon.ico"
          alt="Logo"
          class="h-16 w-16"
        />
      </div>

      <!-- Navigation Links -->
      <ul class="hidden md:flex space-x-8">
        <li><a href="#home" class="text-2xl hover:text-red-500 arvo-regular">Home</a></li>
        <li><a href="#about" class="text-2xl hover:text-red-500 arvo-regular">About</a></li>
        <li><a href="#gallery" class="text-2xl hover:text-red-500 arvo-regular">Gallery</a></li>
        <li><a href="#faculty" class="text-2xl hover:text-red-500 arvo-regular">Facilities</a></li>
        <li><a href="#service" class="text-2xl hover:text-red-500 arvo-regular">Facilities</a></li>
        <li><a href="#events" class="text-2xl hover:text-red-500 arvo-regular">Events</a></li>
        <li><a href="#contact" class="text-2xl hover:text-red-500 arvo-regular">Contact</a></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        class="block md:hidden text-white focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <ul
      class="z-50 justify-center items-center flex-col space-y-6 md:hidden fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg"
      :class="{ flex: isMobileMenuOpen, hidden: !isMobileMenuOpen }"
    >
      <button
        class="absolute top-6 right-6 text-white"
        @click="closeMenu"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <li><a href="#home" class="text-2xl text-white hover:text-red-500 arvo-regular" @click="closeMenu">Home</a></li>
      <li><a href="#about" class="text-2xl text-white hover:text-red-500 arvo-regular" @click="closeMenu">About</a></li>
      <li><a href="#gallery" class="text-2xl text-white hover:text-red-500 arvo-regular" @click="closeMenu">Gallery</a></li>
      <li><a href="#faculty" class="text-2xl text-white hover:text-red-500 arvo-regular" @click="closeMenu">Faculties</a></li>
      <li><a href="#service" class="text-2xl text-white hover:text-red-500 arvo-regular" @click="closeMenu">Facilities</a></li>
      <li><a href="#events" class="text-2xl text-white hover:text-red-500 arvo-regular" @click="closeMenu">Events</a></li>
      <li><a href="#contact" class="text-2xl text-white hover:text-red-500 arvo-regular" @click="closeMenu">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'Navbar',
  setup() {
    const isMobileMenuOpen = ref(false);
    const isVisible = ref(true);

    const toggleMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const closeMenu = () => {
      isMobileMenuOpen.value = false;
    };

    // Hide navbar after 1 second
    onMounted(() => {
      setTimeout(() => {
        if (!isMobileMenuOpen.value) {
          isVisible.value = true;
        }
      }, 1000);
    });

    // Show navbar when mouse moves or scrolling, but not if menu is open
    const showNavbar = () => {
      if (!isMobileMenuOpen.value) {
        isVisible.value = true;
        // Reset timer to hide navbar again after 1 second of inactivity
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
          if (!isMobileMenuOpen.value) {
            isVisible.value = true;
          }
        }, 1000);
      }
    };

    let hideTimeout;

    // Add event listener for mousemove and scroll
    onMounted(() => {
      window.addEventListener('mousemove', showNavbar);
      window.addEventListener('scroll', showNavbar); // Listen to scroll
    });

    // Clean up event listener
    onBeforeUnmount(() => {
      window.removeEventListener('mousemove', showNavbar);
      window.removeEventListener('scroll', showNavbar); // Clean up scroll listener
      clearTimeout(hideTimeout);
    });

    return {
      isMobileMenuOpen,
      toggleMenu,
      closeMenu,
      isVisible,
    };
  },
};
</script>

<style scoped>
/* Optional: Custom styles */
</style>
