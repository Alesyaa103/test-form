<template>
  <button type="button">Send</button>
</template>
<script>
export default {
  name: "sendButton"
};
</script>
<style lang="scss" scoped>
@import "@/styles/_mixin.scss";
button {
  width: 120px;
  height: 40px;
  background-color: #dbb407;
  border-radius: 15px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.28px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.849);
  margin-left: 70%;
  @include onPhone {
    margin: 0 calc(50% - 60px);
  }
}
</style>