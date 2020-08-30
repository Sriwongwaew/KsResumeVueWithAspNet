<template>
  <v-app class="myApp">
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
});
</script>

<style lang="scss" scoped>

.fade-enter-active{
  animation:fadeIn 1.4s;
  opacity: 0;
  animation-delay: 1s;
}
.fade-leave-active {
  animation: fadeOut 1s;
}
@keyframes fadeIn {
 from {
   transform: translateX(-50px);
   opacity: 0;
 }
 to {
   transform: translateX(0);
   opacity: 1;
 }
}

@keyframes fadeOut {
 from {
   transform: translateX(-50px);
   opacity: 0;
 }
 to {
   transform: translateX(0);
   opacity: 1;
 }
}

</style>
