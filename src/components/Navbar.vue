<template>
  <nav  class="text-white p-3 px-4 fixed top-0 left-0 w-full bg-black z-50">
    <div class="flex justify-between items-center max-w-7xl mx-auto">
      <!-- Logo Section -->
      <div class="text-2xl font-bold">
        <img 
          src="/public/favicon.ico" 
          alt="Logo" 
          class="h-16 w-16"
        />
      </div>

      <!-- Navigation Links -->
      <ul class="hidden md:flex space-x-8">
        <li>
          <a href="#home" class="text-2xl hover:text-red-500">HOME</a>
        </li>
        <li>
          <a href="#about" class="text-2xl hover:text-red-500">ABOUT</a>
        </li>
        <li>
          <a href="#gallery" class="text-2xl hover:text-red-500">GALLERY</a>
        </li>
        <li>
          <a href="#faculty" class="text-2xl hover:text-red-500">FACULTIES</a>
        </li>
        <li>
          <a href="#service" class="text-2xl hover:text-red-500">FACILITIES</a>
        </li>
        <li>
          <a href="#contact" class="text-2xl hover:text-red-500">CONTACT US</a>
        </li>
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
      <!-- Close Button -->
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

      <!-- Menu Items -->
      <li>
        <a href="#home" class="text-2xl text-white hover:text-red-500" @click="closeMenu">Home</a>
      </li>
      <li>
        <a href="#about" class="text-2xl text-white hover:text-red-500" @click="closeMenu">About</a>
      </li>
      <li>
        <a href="#gallery" class="text-2xl text-white hover:text-red-500" @click="closeMenu">Gallery</a>
      </li>
      <li>
        <a href="#faculty" class="text-2xl text-white hover:text-red-500" @click="closeMenu">Faculties</a>
      </li>
      <li>
        <a href="#service" class="text-2xl text-white hover:text-red-500" @click="closeMenu">Facilities</a>
      </li>
      <li>
        <a href="#contact" class="text-2xl text-white hover:text-red-500" @click="closeMenu">Contact Us</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Navbar',
  setup() {
    const isMobileMenuOpen = ref(false);

    const toggleMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const closeMenu = () => {
      isMobileMenuOpen.value = false;
    };

    return {
      isMobileMenuOpen,
      toggleMenu,
      closeMenu,
    };
  },
};
</script>

<style scoped>
/* Optional: Custom styles */
</style>
