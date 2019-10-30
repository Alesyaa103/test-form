<template>
  <div class="burger" @click="onChangeForm" :class="{burgerCross: rotateBurger}">
    <span class="burger__line"></span>
  </div>
</template>

<script>
export default {
  name: "burger",
  props: {
    changeForm: Function
  },
  data() {
    return {
      rotateBurger: true
    };
  },
  methods: {
    onChangeForm() {
      this.changeForm();
      this.rotateBurger = !this.rotateBurger;
    }
  }
};
</script>

<style lang="scss" scoped>
.burger {
  height: 24px;
  width: 24px;
  position: relative;
  transition: 1ms;

  &__line,
  &__line::before,
  &__line::after {
    background-color: #9f9da8;
    border-radius: 2px;
    height: 2px;
    width: 24px;
    position: absolute;
  }
  &__line {
    top: 50%;
  }
  &__line::before {
    content: "";
    transform: translateY(8px);
  }
  &__line::after {
    content: "";
    transform: translateY(-8px);
  }
}
.burgerCross {
  span::before {
    transform: rotate(45deg);
  }
  span::after {
    transform: rotate(-45deg);
  }
  span {
    height: 0px;
  }
}
</style>