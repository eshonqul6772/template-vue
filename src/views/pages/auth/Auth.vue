<template>
  <div class="auth-wrapper">
    logo
    <!--begin::Content-->
    <div class="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
      <RouterView></RouterView>
    </div>
    <!--end::Content-->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {},
  components: {},
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
    backgroundImage() {
      return import.meta.env.BASE_URL + 'media/bg/bg-10.jpg';
    },
  },
};
</script>

<!-- Load login custom page styles -->
<style lang="scss">
.auth-wrapper {
  display: flex;
  align-items: center;

  &__banner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
    background: var(--background-transparent);
  }
}
</style>
