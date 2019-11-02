<template>
  <button type="submit">Send</button>
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
  background: linear-gradient(#F3AE0F, #E38916) #E38916;
  outline: none;
  &:hover{
    background: linear-gradient(#e2a814, #9c630e) #f5ae00;
  }
  @include onPhone {
    margin: 10px calc(50% - 60px);
  }
}
</style>