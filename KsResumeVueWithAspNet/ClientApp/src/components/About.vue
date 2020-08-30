<!--eslint-disable max-len -->
<template>
  <div class="body">
    <div class="intro-wrapper">
      <h1 class="intro-header">Who I am.</h1>
      <p class="intro">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
   <div class="contact-info-wrapper">

    <div class="contact">
      <div class="contact-title">Location</div>
      <div class="contact-title2">E-mail</div>
      <div class="contact-title3">Phone Number</div>
      <div class="contact-title4">Discord</div>
    </div>

    <div class="contact-info">
      <div class="contact-info-text">Stockholm, Sweden</div>
      <div class="contact-info-text">sriwongwaew@gmail.com</div>
      <div class="contact-info-text">+46(0)73-98 66 773</div>
      <div class="contact-info-text">KenZI#0076</div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'about',
});
</script>

<style lang="scss" scoped>

.intro-header {
  color: #E09145;
  font-size: 60px;
  font-weight: 500;
}

.intro {
  font-weight: normal;
  color: #e7e7e7;
}

.intro-wrapper {
  display: flex;
  flex-direction: column;
  margin-top:20vh;
  margin-left: 10vw;
  max-width: 30vw;
}

.contact-info-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    color: #e7e7e7;
    font-size: 25px;
    width: 700px;
    max-width: 100vw;
    margin: 0 auto;
    padding: 0 1rem;
    margin-top: 20vh;
    margin-left:auto;
    margin-right: 0;
}
.contact-icon-wrapper {
  order:1;
}

.contact-icon {
    display: inline-block;
    margin-left: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.contact {
    order: 2;
    color: #e09145;
}
.contact-title:before {
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    display: inline-block;
    margin-left: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.contact-title2:before {
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    display: inline-block;
    margin-left: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.contact-title3:before {
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    display: inline-block;
    margin-left: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.contact-title4:before {
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    display: inline-block;
    margin-left: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.contact-info {
    order: 3;
    margin-right: 5vw;
}

.body {
  height: 60vh;
}
</style>
