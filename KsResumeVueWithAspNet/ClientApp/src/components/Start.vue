<template>
  <div class="body">
    <div class="name-wrapper">
      <p class="intro-header">Developer from Stockholm, Sweden</p>
      <p class="name">Kensiwat<br>Sriwongwaew</p>
      <!--eslint-disable-next-line max-len-->
      <p class="more-info">Get to know me<font-awesome-icon style="margin-left:10px;" :icon="['fas', 'arrow-right']" /></p>
    </div>
    <div class="image-wrapper">
      <img class="intro-image" src="@/assets/pictures/ken.png">
    </div>
    </div>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Start',
});
</script>

<style lang="scss" scoped>

.name-wrapper {
  display: flex;
  align-items: flex-start;
  margin-left: 10vw;
  margin-top: 20vh;
  flex-direction: column;
}
.name {
  font-size: 8em;
  font-weight:600;
  color:  #e7e7e7;
}

.intro-header {
  font-size: 2rem;
  color: #E09145;
}

.background-text-wrapper {
  margin-left: 10vw;
  flex-direction: column;
  align-items: flex-end;
}

.body {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.more-info {
  border-bottom: 2px solid #E09145;
  font-size: 30px;
  font-weight: lighter;
  color: #E09145;
}
.image-wrapper{
  position: absolute;
  right:0;
  top:0;
}

.intro-image{
  height: 100vh;
  width: auto;
}
</style>
