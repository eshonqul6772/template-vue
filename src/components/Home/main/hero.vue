<template>
  <section class="hero">
    <div class="container">
      <div class="hero__wrapper">
        <div style="width: 50%">
          <h1 class="hero__title">
            Find a job that suits <br />
            your interest & skills.
          </h1>
          <p class="hero__paragraph">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </p>
        </div>

        <img
          width="492"
          height="382"
          src="@/assets/images/Illustration.png"
          alt="Illustration"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hero',
});
</script>

<style lang="scss">
.hero {
  width: 100%;
  background-color: #f7f7f7;
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;

  &__title {
    margin-bottom: 24px;
    color: #18191c;
    font-size: 56px;
    font-weight: 500;
    line-height: 64px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__paragraph {
    color: #5e6670;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
}
</style>
