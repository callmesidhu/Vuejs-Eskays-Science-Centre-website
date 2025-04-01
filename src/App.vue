<template>
  <div>
    <Loader v-if="isLoading" />
    <router-view v-else></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Loader from './components/Loader.vue';

export default defineComponent({
  name: 'App',
  components: {
    Loader
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
});
</script>
