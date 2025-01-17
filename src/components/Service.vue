<template>
  <div>
    <div
      id="service"
      class="flex flex-col text-white relative bg-cover bg-center bg-no-repeat p-8"
      style="background-image: url('/gallery/2.jpg');"
    >
      <!-- Background Overlay -->
      <div class="absolute inset-0 backdrop-blur-md bg-black bg-opacity-50 z-0"></div>

      <!-- Content -->
      <div class="z-10 space-y-8">
        <!-- Science Lab Section -->
        <section class="text-center">
          <h2 class="text-5xl font-bold mb-4 text-red-600">Science Lab</h2>
          <p class="text-lg max-w-4xl mx-auto">
            A science lab is a workplace for the conduct of scientific research. It helps students to remember
            the concepts better and to transfer the experience to real-life situations. Eskay’s has the
            best-designed, spacious, sophisticated, and safe Science lab. The lab is equipped with the most modern
            apparatus which encourage students to learn through experiment and research work.
          </p>
          <p class="text-lg max-w-4xl mx-auto mt-4">
            Students are encouraged to use the facilities for enhancing their innovative and scientific skills.
            The Physics, Chemistry, and Biology labs at Eskay’s cater to the needs of conducting experiments
            specified by SCERT & CBSE. Our lab is well-stocked with sufficient chemicals, specimens, and
            instruments so that every student gets the opportunity to carry out the experiments individually.
          </p>
          <p class="text-lg max-w-4xl mx-auto mt-4">
            Moreover, the safety of each and every child while handling the chemicals and instruments is duly
            taken care of by providing lab coats for them. Eskay’s has the latest science lab supplies and
            equipment to make science interesting and effective for students and to encourage them to make
            significant contributions in the field of Physics, Chemistry, Biology, and other streams of science
            later in life.
          </p>
        </section>

        <!-- Classroom Rules Section -->
        <section class="">
          <h2 class="text-4xl text-center font-bold mb-4 text-red-600">Classroom Rules</h2>
          <ul class="list-decimal list-inside text-lg max-w-4xl mx-auto lg:mx-96 space-y-2">
            <li>Be prepared (includes having all materials for class).</li>
            <li>Be respectful—to teachers, yourself, and others.</li>
            <li>Be on time and in your seat working.</li>
            <li>Control your body, voice, and concentration.</li>
            <li>No food or drinks in the classroom.</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
};
</script>

<style scoped>
/* Add additional styles if needed */
</style>
