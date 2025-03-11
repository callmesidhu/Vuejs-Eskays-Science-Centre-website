<template>
  <section
    id="home"
    class="scroll-mt-20 relative text-white h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background Image with Zoom Animation -->
    <img 
      src="/gallery/7.jpeg" 
      alt="Background Image" 
      class="absolute inset-0 w-full h-full object-cover z-0 opacity-30 blur-sm background-animation" 
    />

    <!-- Text Content with Fade-In Transition -->
    <transition name="fade" appear>
      <div class="relative z-10 text-center p-6 rounded-md">
        <h1 class="gradual-spacing lg:text-9xl text-4xl text-red-600 font-bold mb-4 playfair-display">
          Eskay's Science Centre
        </h1>
        <hr class="mx-10 w-full h-4">
        <p class="gradual-spacing lg:text-5xl text-2xl text-red-600 font-bold playfair-display">
          An Entrance Based Training Centre at Punalur
        </p>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
/* Fade Transition for Text Content */
.fade-enter-active,
.fade-appear-active {
  transition: opacity 2s ease;
}
.fade-enter-from,
.fade-appear-from {
  opacity: 0;
}
.fade-enter-to,
.fade-appear-to {
  opacity: 1;
}

/* Background Zoom Animation */
.background-animation {
  animation: zoom 20s infinite alternate;
}
@keyframes zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

/* Gradual Spacing Animation for the Heading Text */
.gradual-spacing {
  animation: gradualSpacing 2s ease-out forwards;
}
@keyframes gradualSpacing {
  0% {
    letter-spacing: -1.1rem;
  }
  100% {
    letter-spacing: 0.0em;
  }
}
</style>
