<template >
  <courses />
  <hr class="h-2  my-8 mx-52">
        <div class="scroll-mt-20 p-5 text-center text-white  py-auto">
          <h1 class="text-3xl font-bold mb-5 text-red-600">Upcoming Events</h1>
          <table class="table-auto w-3/4 mx-auto border mb-12">
            <thead>
              <tr class="bg-red-950">
                <th class="border  px-4 py-2">Event Name</th>
                <th class="border  px-4 py-2">Month</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="event in events" :key="event.name" class="bg-gradient-to-r even:from-red-950 odd:from-black">
                <td class="  py-2 ">{{ event.name }}</td>
                <td class=" px-4 py-2 ">{{ event.month }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
      
      <script>
import Courses from './Courses.vue';
      export default {
  components: { Courses },
        name: "Events",
        data() {
          return {
            events: [
              { name: "Fresher’s Day", month: "July" },
              { name: "Onam Celebration", month: "September" },
              { name: "Vijayadasami (Pooja) Day", month: "October" },
              { name: "Science Tour", month: "October" },
              { name: "Christmas Celebration", month: "December" },
              { name: "Send OFF Day", month: "February" },
            ],
          };
        },
      };
      </script>
      
      <style scoped>
      /* Tailwind CSS classes are used directly in the template, so no custom CSS is needed */
      </style>
      