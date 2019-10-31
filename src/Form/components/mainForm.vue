<template>
  <fieldset>
    <textarea
      type="text"
      placeholder="Add information about yourself"
      v-model="user.info"
      ref="textarea"
      @input="checkHeight"
      :style="autoSize"

    />
    <input
      type="text"
      placeholder="First name"
      v-model.trim="user.firstname"
      :class="{errorInput: $v.user.firstname.$error}"
    />
    <!-- <div class="error" v-if="!$v.user.firstname.required">Field is required</div> -->
    <input
      type="text"
      placeholder="Last name"
      v-model.trim="user.lastname"
      :class="{errorInput: $v.user.lastname.$error}"
    />
    <input
      type="email"
      placeholder="E-mail"
      v-model.trim="user.email"
      :class="{errorInput: $v.user.email.$error}"
    />
    <input
      type="tel"
      placeholder="Phone number"
      v-model.trim="user.tel"
      :class="{errorInput: $v.user.tel.$error}"
    />
    <label for="shipping">Do you needdelivery?</label>
    <select id="shipping" @change="formOpacity" v-model="shipping">
      <option disabled selected style="display:none;"></option>
      <option>Yes</option>
      <option>No</option>
    </select>
    <burger :changeForm="changeForm" />
  </fieldset>
</template>

<script>
import burger from "./burger.vue";
import {
  required,
  email,
  minLength,
  maxLength,
  numeric
} from "vuelidate/lib/validators";

export default {
  name: "mainForm",
  components: {
    burger
  },
  props: {
    onChangeForm: Function,
    onShipping: Function
  },
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        tel: "",
        info: ""
      },
      shipping: "",
      height: "",
      H: 0
    };
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      firstname: {
        required
      },
      lastname: {
        required
      },
      tel: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10),
        numeric
      }
    }
  },
  methods: {
    changeForm() {
      this.onChangeForm();
    },
    formOpacity() {
      this.onShipping(this.shipping);
    },
    checkHeight() {
      this.height = "auto";
      this.H = this.$refs.textarea.scrollHeight;
      this.$nextTick(() => {
        let newHeight = this.$refs.textarea.scrollHeight + 1;
        this.height = newHeight + "px";
      });
    }
  },
  computed: {
    autoSize() {
      return {
        height: this.height,
        overflow: "auto"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";
fieldset {
  position: relative;
  height: auto;
  .burger {
    position: absolute;
    right: -24px;
    top: 0px;
    @include onTablet {
      // bottom: -8px;
      // right: 0px;
      position: relative;
      right: 0px;
      margin: 5px auto;
    }
  }
}
.error {
  color: red;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.28px;
  line-height: 16px;
}
</style>