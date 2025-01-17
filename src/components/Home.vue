<template>
  <section
    id="home"
    class="relative bg-green-500 text-white h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background Image -->
    <img 
      src="/gallery/1.jpg" 
      alt="Background Image" 
      class="absolute inset-0 w-full h-full object-cover z-0" 
    />

    <!-- Text Content -->
    <div class="relative z-10 text-center p-6 rounded-md">
      <h1 class="text-9xl text-red-600 font-bold mb-4">Eskay's Science Centre</h1>
      <hr class="mx-10 w-full h-4">
      <p class="text-5xl text-red-600 font-bold">An Entrance Based Training Centre at Punalur</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
/* Additional styles for Home */
</style>
