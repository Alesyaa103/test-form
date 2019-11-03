<template>
  <fieldset>
    <textarea
      type="text"
      placeholder="Add information about yourself"
      v-model="user.info"
      ref="textarea"
      @input="checkHeight"
      :style="autoSize"
      @change="updateInfo"

    />
    <div class="input">
        <input
        type="text"
        placeholder="First name"
        v-model.trim="$v.user.firstname.$model"
        :class="{errorInput: $v.user.firstname.$error}"
        @change="updateInfo"
      />
      <div class="error" v-if="$v.user.firstname.$error">Field is required</div>
    </div>
    <div class="input">
    <input
      type="text"
      placeholder="Last name"
      v-model.trim="$v.user.lastname.$model"
      :class="{errorInput: $v.user.lastname.$error}"
      @change="updateInfo"
    />
    <div class="error" v-if="$v.user.lastname.$error">Field is required</div>
    </div>
    <div class="input">
    <input
      type="email"
      placeholder="E-mail"
      v-model.trim="$v.user.email.$model"
      :class="{errorInput: $v.user.email.$error}"
      @change="updateInfo"
    />
    <div class="error" v-if="!$v.user.email.required && $v.user.email.$error">Field is required</div>
    <div class="error" v-if="!$v.user.email.email && $v.user.email.$error">Field is only for e-mail</div>
    </div>
    <div class="input">
    <input
      type="tel"
      placeholder="Phone number"
      v-model.trim="$v.user.tel.$model"
      :class="{errorInput: $v.user.tel.$error}"
      @change="updateInfo"
    />
    <div class="error errorAd" v-if="!$v.user.tel.required && $v.user.tel.$error">Field is required</div>
    <div class="error" v-if="!$v.user.tel.number && $v.user.tel.$error">Field is only for number</div>
    </div>
    <label for="shipping">Do you need delivery?</label>
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
  numeric
} from "vuelidate/lib/validators";

export default {
  name: "mainForm",
  components: {
    burger
  },
  props: {
    onChangeForm: Function,
    onShipping: Function,
    onChangeH: Function
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
      height: ""
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
      if (this.user.info == ''){
        this.height = '16px';
        this.onChangeH(this.height);
      } else {
      this.height = "auto";
      this.$nextTick(() => {
        let newHeight = this.$refs.textarea.scrollHeight + 1;
        this.height = newHeight + "px";
        this.onChangeH(this.height);
      });}
    },
    updateInfo(){
      this.$store.commit('SET_USER', this.user)
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$store.commit('SET_VALID', false)
        return;
      }else{
        this.$store.commit('SET_VALID', true)
      }
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
      position: relative;
      right: 0px;
      margin: 5px auto;
    }
  }
  .input {
    position: relative;
    .error {
      position: absolute;
      top: 32px;
    }
    .errorAd {
      top: 48px;
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
  margin: 2px;
  padding-left: 10px;
}
</style>