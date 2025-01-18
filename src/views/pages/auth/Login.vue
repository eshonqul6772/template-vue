<template>
  <div class="wrapper">
    <div class="container">
      <div class="wrapper__login">
        <div class="wrapper__login-form">
          <div class="logo">
            <img src="@/assets/images/Logo.png" />
          </div>
          <h2>Create account</h2>
          <div style="display: flex; gap: 10px; margin-bottom: 15px">
            <p>Already have account</p>
            <RouterLink to="/login">Log in</RouterLink>
          </div>
          <form>
            <div class="account-type">
              <p>Create account as a</p>
              <div class="button-group">
                <button
                  type="button"
                  :class="{ active: selectedButton === 'candidate' }"
                  @click="selectButton('candidate')"
                >
                  Candidate
                </button>
                <button
                  type="button"
                  :class="{ active: selectedButton === 'employers' }"
                  @click="selectButton('employers')"
                >
                  Employers
                </button>
              </div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                gap: 6px;
                width: 100%;
              "
            >
              <div>
                <FloatLabel variant="on">
                  <InputText
                    id="on_label"
                    v-model="form.fullName"
                    autocomplete="off"
                  />
                  <label for="on_label">Full Name</label>
                </FloatLabel>
              </div>

              <div style="margin-bottom: 15px">
                <FloatLabel variant="on">
                  <InputText
                    id="on_label"
                    v-model="form.fullName"
                    autocomplete="off"
                  />
                  <label for="on_label">Username</label>
                </FloatLabel>
              </div>
            </div>

            <div style="width: 100%; margin-bottom: 15px">
              <FloatLabel variant="on">
                <InputText
                  style="width: 100% !important"
                  id="on_label"
                  v-model="form.fullName"
                  autocomplete="off"
                />
                <label for="on_label">Email address</label>
              </FloatLabel>
            </div>

            <div style="width: 100%; margin-bottom: 15px">
              <FloatLabel variant="on">
                <InputText
                  style="width: 100% !important"
                  id="on_label"
                  v-model="form.fullName"
                  autocomplete="off"
                />
                <label for="on_label">Password</label>
              </FloatLabel>
            </div>

            <div style="width: 100%; margin-bottom: 15px">
              <FloatLabel variant="on">
                <InputText
                  style="width: 100% !important"
                  id="on_label"
                  v-model="form.fullName"
                  autocomplete="off"
                />
                <label for="on_label">Confirm Password</label>
              </FloatLabel>
            </div>

            <div
              style="
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 15px;
              "
            >
              <Checkbox v-model="checked" binary />
              <p>I've read and agree with your</p>
              <RouterLink to="/terms-and-conditions"
                >Terms off Services
              </RouterLink>
            </div>

            <Button
              style="
                width: 100%;
                background-color: #0a65cc;
                color: white;
                border-radius: 3px;
                font-family: 'Material Design Icons';
              "
              type="button"
              label="Create account"
            />

            <span
              style="
                display: inline-block;
                width: 100%;
                margin: 15px 0;
                text-align: center;
              "
              >OR</span
            >

            <div style="display: flex; gap: 12px; width: 100%">
              <Button
                style="
                  border: 1px solid #9a9c9d;
                  background-color: white;
                  color: #9a9c9d;
                  border-radius: 3px;
                  font-family: 'Material Design Icons';
                "
                type="button"
                variant="outlined"
                ><img
                  src="@/assets/images/facebook.svg"
                  width="24"
                  height="24"
                />
                Sign up with Facebook
              </Button>
              <Button
                style="
                  border: 1px solid #9a9c9d;
                  background-color: white;
                  color: #9a9c9d;
                  font-family: 'Material Design Icons';
                  border-radius: 3px;
                "
                type="button"
              >
                <img src="@/assets/images/google.svg" width="24" height="24" />
                Sign up with Google
              </Button>
            </div>
          </form>
        </div>

        <div class="wrapper__login-banner">banner</div>
        <div class="wrapper__login-banner-box"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      value: 'Individual',
      options: ['Candidate', 'Employers'],
      selectedButton: 'candidate',
      form: {
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        checkedService: '',
      },
    };
  },

  methods: {
    selectButton(button: any) {
      this.selectedButton = button;
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;

  &__login {
    display: flex;

    &-form {
      width: 50%;
      padding: 20px 80px 0;

      form {
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
      }

      h2 {
        margin-bottom: 15px;
        color: black;
        font-size: 24px;
      }
    }

    &-banner {
      width: 50%;
      background-color: blue;
    }
  }

  &__login-banner-box {
    background-image: url('@/assets/login-banner.jpg');
    position: absolute;
    top: 0;
    right: 0;
    width: 50vw;
    height: 100vh;
    background-size: cover;
  }
}

.account-type {
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f1f2f4;
  border-radius: 5px;
  text-align: center;

  p {
    margin-bottom: 20px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #9a9c9d;
    text-transform: uppercase;
  }
}

.logo {
  margin-bottom: 50px;
}
</style>
