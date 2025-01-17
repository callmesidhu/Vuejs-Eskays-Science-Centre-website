<template>
  <section id="faculty" class="text-white  p-8">
    <h2 class="text-4xl font-bold text-center text-red-600"><b>Our Faculty</b></h2>
    <div class="flex flex-col lg:flex-row mt-8">
      <!-- Left Side: Director's Image and Qualification -->
      <div class="flex-1 flex flex-col items-center mb-8 lg:mb-0">
        <img 
          src="/gallery/director.jpg" 
          alt="Subhash Kumar Neelakantan" 
          class="w-64 h-64 object-cover rounded-full shadow-lg" 
        />
        <h3 class="text-xl font-bold mt-4">Subhash Kumar Neelakantan</h3>
        <p class="text-center italic">
          Certified Teacher with No.243172 from Georgia, SC-USA<br />
          Designation – Eskay’s Director
        </p>
      </div>

      <!-- Right Side: Teaching and Supporting Staff -->
      <div class="flex-1">
        <h3 class="text-2xl font-semibold mb-4">Teaching Staffs</h3>
        <!-- Physics -->
        <div class="mb-4">
          <h4 class="font-bold">Physics</h4>
          <ul class="list-disc">
            <li>Subhash Kumar Neelakantan [Certified Teacher with No.243172 from Georgia, SC-USA]</li>
          </ul>
        </div>
        <!-- Mathematics -->
        <div class="mb-4">
          <h4 class="font-bold">Mathematics</h4>
          <ul class="list-disc">
            <li>Suresh Kumar B. [Rtd. Teacher from Govt: School]</li>
            <li>Ass. Prof. Thushara Arun [Lecturer, St. Thomas College, Chengannur]</li>
            <li>Siji [Teacher Trainee]</li>
          </ul>
        </div>
        <!-- Chemistry -->
        <div class="mb-4">
          <h4 class="font-bold">Chemistry</h4>
          <ul class="list-disc">
            <li>Sanusha Sanal</li>
            <li>Arya Devi</li>
            <li>Aswathi S Raj [Lab Analyst, KWA]</li>
          </ul>
        </div>
        <!-- Biology -->
        <div class="mb-4">
          <h4 class="font-bold">Biology</h4>
          <ul class="list-disc">
            <li>Abdul Unais [Botany stream – visiting Prof: St. Stephens’ College, Pathanapuram]</li>
            <li>Manjusha Mohanan [Zoology stream]</li>
            <li>Althaf Muhammed [Teacher Trainee]</li>
          </ul>
        </div>
        <!-- English -->
        <div class="mb-4">
          <h4 class="font-bold">English</h4>
          <ul class="list-disc">
            <li>Mathew Alex [Rtd. Teacher from Govt: School]</li>
            <li>Shahina Shajahan [Teacher Trainee]</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Section: Supporting Staff -->
    <div class="mt-8 text-center">
      <h3 class="text-4xl font-semibold text-red-600"><b>Supporting Staffs</b></h3>
      <ul class="mt-4 ">
        <li>Althaf Muhammed [Administrator]</li>
        <li>Shahina Shajahan [Exam Coordinator]</li>
        <li>Sidharth Sadhu [Program Coordinator]</li>
        <li>Sindhulal S [Office Staff]</li>
        <li>Sawfan Rawthar [PRO]</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
};
</script>

<style scoped>
#faculty {
  line-height: 1.8;
  font-size: 1.1rem;
}
ul {
  margin-left: 1.5rem;
}
</style>
