<template>
  <div>
    <div
      id="contact"
      class="flex flex-col lg:flex-row text-white relative bg-cover bg-center bg-no-repeat"
      style="background-image: url('/gallery/2.jpg');"
    >
      <!-- Background Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md z-0"></div>

      <!-- Left Portion -->
      <div class="flex-1 flex flex-col justify-center items-center p-8 relative z-10">
        <h1 class="text-center text-4xl my-8 text-white"><u>Contact Us</u></h1>
        <!-- Phone -->
        <div class="flex items-center space-x-4 mb-4">
          <a href="tel:+919497372512" target="_blank">
            <font-awesome-icon :icon="['fas', 'phone']" class="text-green-500 w-8 h-8" aria-label="Phone" />
            <span class="text-2xl">+91 949 737 2512</span>
          </a>
        </div>
        <!-- Email -->
        <div class="flex items-center space-x-4">
          <font-awesome-icon :icon="['fas', 'envelope']" class="text-red-500 w-8 h-8" aria-label="Email" />
          <span class="text-2xl">eskayspuanlur@gmail.com</span>
        </div>
        <!-- Social Links -->
        <div class="flex space-x-4 mt-4">
          <a
            href="https://wa.me/+919497372512"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-green-500 w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/eskays_science_centre"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" class="text-pink-500 w-8 h-8" />
          </a>
          <a
            href="https://www.youtube.com/channel/your-channel-id"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <font-awesome-icon :icon="['fab', 'youtube']" class="text-red-600 w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/company/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" class="text-blue-500 w-8 h-8" />
          </a>
          
        </div>
      </div>

      <!-- Right Portion -->
      <div class="flex-1 p-8 relative z-10 items-center justify-center">
        <h2 class="text-3xl font-bold mb-4">
          <u>Location</u>
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4232.963913347412!2d76.9295891!3d9.0176387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0677aa25b93581%3A0x813816ce9ebc523c!2sEskay&#39;s%20Science%20Centre!5e1!3m2!1sen!2sin!4v1737109640047!5m2!1sen!2sin"
          class="lg:w-[600px] w-80 h-64 lg:h-[450px]"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <p class="text-white text-center m-5">&copy; Eskays Science Centre</p>
    <hr class="h-2 m-5" />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(faPhone, faEnvelope, faWhatsapp, faInstagram, faLinkedin, faYoutube);

export default {
  name: "Contact",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
/* Add additional styles if needed */
</style>
