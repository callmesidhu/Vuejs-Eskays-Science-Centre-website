<template>
  <section id="gallery">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 1500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <!-- Dynamically generate swiper slides -->
      <swiper-slide v-for="index in 9" :key="index">
        <img 
          :src="`/gallery/${index}.jpeg`" 
          :alt="`Gallery Image ${index}`" 
          class="w-full h-auto object-cover" 
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // Import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style scoped>
/* Use ::v-deep to target child components in scoped styles */
::v-deep .swiper-button-next::after,
::v-deep .swiper-button-prev::after {
  color: red !important; /* Change arrow color to red */
  

}
</style>