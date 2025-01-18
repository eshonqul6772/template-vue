<template>
  <RouterView />
  <VueQueryDevtools />
</template>

<script lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';

import HomePage from './views/HomeView.vue';

export default {
  name: 'App',
  components: {
    VueQueryDevtools,
    HomePage,
  },

  methods: {
    log(text: string, color: string, fontSize: string) {
      if (fontSize) {
        console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
      } else {
        console.log(`%c${text}`, `color: ${color}`);
      }
    },
  },

  mounted() {
    this.log('Start up', 'red', '32px');
  },
};
</script>

<style scoped>
#root {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}
</style>
