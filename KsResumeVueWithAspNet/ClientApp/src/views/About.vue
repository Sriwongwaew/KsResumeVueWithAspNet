<template>
  <div>
    <navbar></navbar>
    <start></start>
    <about></about>
    <timeline></timeline>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Start from '../components/Start.vue';
import Navbar from '../components/Navbar.vue';
import Timeline from '../components/Timeline.vue';
import About from '../components/About.vue';

export default Vue.extend({
  components: {
    Start,
    Navbar,
    Timeline,
    About,
  },
});
</script>
