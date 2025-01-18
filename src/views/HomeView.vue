<template>
  <main class="main">
    <Header />
    <RouterView />
    <Footer />
  </main>
</template>

<script lang="ts">
import Home from '../components/Home/Home.vue';
import Footer from '@/components/Home/footer/footer.vue';
import Header from '@/components/Home/header/header.vue';

export default {
  components: {
    Header,
    Footer,
    Home,
  },
};
</script>

<style scoped>
.main {
  width: 100%;
}
</style>
