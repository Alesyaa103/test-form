<template>
  <div id="app">
    <container />
  </div>
</template>

<script>
import container from "./Form/container.vue";

export default {
  name: "app",
  components: {
    container
  }
};
</script>

<style lang="scss">
@import "@/styles/_reset.scss";
@import "@/styles/_mixin.scss";

#app {
  background-color: #f9fafc;
  height: 100vh;
  width: 100vw;
  @include onTablet {
    height: 100%;
  }
}
</style>
