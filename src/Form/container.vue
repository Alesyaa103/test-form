<template>
  <div class="wraper">
    <header class="header">
      <img src="../assets/orange.png" />
      <p>This is my test task</p>
    </header>
    <form class="form">
      <mainForm :onChangeForm="onChangeForm" :onShipping="onShipping" :onChangeH="onChangeH"/>
      <additionalForm v-if="statusForm" :class="{isActive: !shipping}"  :height="currentSH"/>
    </form>
    <sendButton/>
  </div>
</template>

<script>
import additionalForm from "./components/additionalForm";
import mainForm from "./components/mainForm";
import sendButton from "./components/sendButton";

export default {
  name: "container",
  components: {
    mainForm,
    additionalForm,
    sendButton
  },
  data() {
    return {
      statusForm: true,
      shipping: false,
      currentSH: '',
      user: {}
    };
  },
  methods: {
    onChangeForm() {
      this.statusForm = !this.statusForm;
    },
    onShipping(ship) {
      if (ship == "Yes") {
        this.shipping = true;
      } else {
        this.shipping = false;
      }
    },
    onChangeH(height) {
      this.currentSH = height;
    }
  },

};
</script>

<style lang="scss">
@import "@/styles/_mixin.scss";
.wraper {
  height: 100vh;
  width: 100vw;
  @include onTablet {
    height: 100%;
  }
}

.header {
  border-bottom: 2px solid #dbb407;
  height: calc(10%-20px);
  display: flex;
  justify-content: space-between;
  max-height: 80px;
  align-items: center;
  padding: 10px 150px 10px 20px;
  @include onTablet {
    padding: 10px 80px 10px 20px;
  }
  & img {
    height: 40px;
    width: 40px;
  }
  & p {
    color: rgba(0, 0, 0, 0.849);
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.28px;
    line-height: 16px;
  }
}

.form {
  display: flex;
  width: 90%;
  margin: 2% auto;
  justify-content: space-evenly;
  position: relative;
  align-self: auto;
  @include onTablet {
    display: block;
  }

  fieldset {
    width: 45%;
    @include onTablet {
      margin: 0 auto;
    }
    @include onPhone {
      width: 100%;
    }
    & input,
    select,
    textarea {
      display: block;
      width: calc(100% - 24px);
      height: 16px;
      flex-direction: column;
      margin: 30px 0;
      padding: 6px 10px;
      border: 2px solid #f0e6b8;
      background: #f6f6f6;
      border-radius: 8px;
      outline: none;
      color: rgba(0, 0, 0, 0.849);
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: normal;
      letter-spacing: 0.28px;
      line-height: 16px;
      resize: none;
      max-height: 102px;
      box-sizing: content-box;

      &:focus {
        box-shadow: 0 0 6px 1px #dbb407;
      }
      &::placeholder {
        color: rgba(135, 144, 167, 0.57);
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: normal;
        letter-spacing: 0.28px;
        line-height: 16px;
      }
    }
    & select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none; /* remove default arrow */
      background-image: url(../assets/Shape.svg);
      background-repeat: no-repeat;
      background-position: right 17px top 14px;
      margin-top: 5px;
      margin-bottom: 9px;
      & option {
        background-color: inherit;

        &:hover {
          background-color: #dbb407;
        }
      }
    }
    & select::-ms-expand {
      display: none; /* hide the default arrow in ie10 and ie11 */
    }
    & label {
      padding-left: 8px;
      color: rgba(135, 144, 167, 0.57);
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: normal;
      letter-spacing: 0.28px;
      line-height: 16px;
    }
  }
}
.isActive {
  pointer-events: none;
}
</style>
