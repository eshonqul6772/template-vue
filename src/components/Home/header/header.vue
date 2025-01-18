<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__wrapper">
          <nav>
            <RouterLink active-class="active" class="header__link" to="/"
              >Home
            </RouterLink>
            <RouterLink
              active-class="active"
              class="header__link"
              to="/find-job"
              >Find Job
            </RouterLink>
            <RouterLink
              active-class="active"
              class="header__link"
              to="/employers"
              >Employers
            </RouterLink>
            <RouterLink
              active-class="active"
              class="header__link"
              to="/candidates"
              >Candidates
            </RouterLink>
            <RouterLink
              active-class="active"
              class="header__link"
              to="/pricing-Plans"
              >Pricing Plans
            </RouterLink>
            <RouterLink
              active-class="active"
              class="header__link"
              to="/customer-supports"
              >Customer Supports
            </RouterLink>
          </nav>

          <div style="display: flex">
            <a
              class="header__contact"
              style="display: flex; align-items: center"
              href="+998971674748"
            >
              <Phone />
              +1-202-555-0178</a
            >
            <div class="card flex justify-content-center">
              <p>{{ $t('welcome') }}</p>
              <Dropdown
                @change="changeLanguage"
                v-model="language"
                :options="[
                  { name: 'Uzbek', code: 'UZB' },
                  { name: 'English', code: 'ENG' },
                ]"
                default-value="ENG"
                optionLabel="name"
                placeholder="ENG"
                style="
                  font-family: 'Material Design Icons';
                  border: none;
                  background-color: transparent;
                  box-shadow: none;
                "
                class="w-full md:w-14rem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <div style="display: flex; justify-content: space-between">
          <div>
            <img
              class="logo"
              @click="$router.push('/')"
              src="@/assets/images/Logo.png/"
            />
          </div>

          <div style="display: flex; gap: 12px">
            <Button
              @click="$router.push('/login')"
              style="
                border-color: #0a65cc;
                color: #0a65cc;
                border-radius: 3px;
                font-family: 'Material Design Icons';
              "
              type="button"
              variant="outlined"
              label="Sign in"
            />
            <Button
              style="
                background-color: #0a65cc;
                font-family: 'Material Design Icons';
                border: none;
                border-radius: 3px;
              "
              type="button"
              severity="success"
              label="Post a Jobs"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import Phone from '../../icons/Phone.vue';
import { defineComponent } from 'vue';
import i18n from 'i18next';

export default defineComponent({
  components: {
    Phone,
  },

  data() {
    return {
      language: i18n.language,
    };
  },

  methods: {
    changeLanguage() {
      console.log('change language', this.language);
      i18n.changeLanguage(this.language);
    },
  },
});
</script>

<style>
.button-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #f4f4f4;
  width: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 5px;
}

button.active {
  background-color: #003366;
  color: white;
}

button:not(.active):hover {
  background-color: #e6e6e6;
}
</style>

<style scoped lang="scss">
.header {
  width: 100%;
  font-family: serif;

  &__top {
    background-color: #f1f2f4;
    padding: 14px 0;
  }

  &__bottom {
    padding: 20px 0;
    box-shadow: 0 0 0 1px #f1f2f4;
  }

  &__link {
    color: #5e6670;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-decoration: none;
  }

  nav {
    display: flex;
    gap: 24px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__contact {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Inter', sans-serif;
    color: black;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-decoration: none;
  }

  .logo {
    cursor: pointer;
  }
}
</style>
