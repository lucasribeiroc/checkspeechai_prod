<template>
  <div class="container">
    <cookie-consent> </cookie-consent>
  </div>
</template>

<script>
import CookieConsent from "vue-cookieconsent-component";

export default {
  name: "CookiesPage",
  components: {
    CookieConsent,
  },
};
</script>

<style scoped>
.container {
  margin-top: 60px;
  padding: 10px;
}
</style>
