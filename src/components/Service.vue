<template>
  <div>
    <div
      id="service"
      class="scroll-mt-20 flex flex-col text-white relative bg-cover bg-center bg-no-repeat p-8"
      style="background-image: url('/gallery/1.jpeg');"
    >
      <!-- Background Overlay -->
      <div class="absolute inset-0 backdrop-blur-md bg-black bg-opacity-50 z-0"></div>

      <!-- Content -->
      <div class="z-10 space-y-8">
        <!-- Science Lab Section -->
        <section class="">
          <h2 class="text-5xl text-center font-bold mb-4 text-red-600">Science Lab</h2>
          <p class="text-lg max-w-4xl mx-auto">
            A science lab is a workplace for the conduct of scientific research. It helps students to remember
            the concepts better and to transfer the experience to real-life situations.<br /><br />Eskay’s has the
            best-designed, spacious, sophisticated, and safe Science lab. The lab is equipped with the most modern
            Apparatus which encourage students to learn through experiment and research work.<br /><br />   
            Students are encouraged to use the facilities for enhancing their innovative and scientific skills.
            The Physics, Chemistry, and Biology labs at Eskay’s cater to the needs of conducting experiments
            specified by SCERT & CBSE.<br /><br />Our lab is well-stocked with sufficient chemicals, specimens, and
            instruments so that every student gets the opportunity to carry out the experiments individually.       
            Moreover, the safety of each and every child while handling the chemicals and instruments is duly
            taken care of by providing lab coats for them.<br /><br />Eskay’s has the latest science lab supplies and
            equipment to make science interesting and effective for students and to encourage them to make
            significant contributions in the field of Physics, Chemistry, Biology, and other streams of science
            later in life.
          </p>
        </section>

        <!-- Classroom Rules Section -->
        <div class="flex flex-col lg:flex-row lg:justify-center lg:space-x-16 space-y-8 lg:space-y-0 lg:mx-20" >
  <section class="lg:w-1/2 lg:mx-44">
    <h2 class="text-4xl  font-bold mb-4 text-red-600">Classroom Rules</h2>
    <ul class="list-decimal list-inside text-lg max-w-4xl mx-auto space-y-2">
      <li>Be prepared (includes having all materials for class).</li>
      <li>Be respectful—to teachers, yourself, and others.</li>
      <li>Be on time and in your seat working.</li>
      <li>Control your body, voice, and concentration.</li>
      <li>No food or drinks in the classroom.</li>
    </ul>
  </section>
  <section class="lg:w-1/2 lg:mx-44">
    <h2 class="text-4xl font-bold mb-4 text-red-600">Upcoming Projects</h2>
    <ul class="list-decimal list-inside text-lg max-w-4xl mx-auto space-y-2">
      <li>Eskay’s Learning App</li>
      <li>Eskay’s mini guide </li>
      <li>Eskay’s Writing Book</li>
      <li>Eskay’s YouTube channel</li>
    </ul>
  </section>
</div>

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
