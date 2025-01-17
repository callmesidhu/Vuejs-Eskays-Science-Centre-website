<template>
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
    <swiper-slide>
      <img src="/gallery/1.jpg" alt="Gallery Image 1" class="w-full h-auto object-cover" />
    </swiper-slide>
    <swiper-slide>
      <img src="/gallery/2.jpg" alt="Gallery Image 2" class="w-full h-auto object-cover" />
    </swiper-slide>
    <swiper-slide>
      <img src="/gallery/3.jpg" alt="Gallery Image 3" class="w-full h-auto object-cover" />
    </swiper-slide>
  </swiper>
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
