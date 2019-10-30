<template>
  <fieldset>
    <label for="country">Country</label>
    <select id="country" v-model="user.country">
      <option disabled selected style="display:none;"></option>
      <option>Ukraine</option>
    </select>
    <label for="city">City</label>
    <select id="city" v-model="user.city">
      <option disabled selected style="display:none;"></option>
      <option>Kyiv</option>
    </select>
    <label for="post">Post office number</label>
    <select id="post" v-modal="user.post">
      <option disabled selected style="display:none;"></option>
      <option>1</option>
      <option>2</option>
    </select>
    <label for="delivery">Do you want to home delivery</label>
    <select @change="changeCourier" v-model="user.courier" id="delivery">
      <option disabled selected style="display:none;"></option>
      <option>Yes</option>
      <option>No</option>
    </select>
    <textarea
      placeholder="Add information for courier"
      id="delivery_info"
      :readonly="ifCourier == false"
      v-model="user.delivery"
    />
  </fieldset>
</template>

<script>
export default {
  data() {
    return {
      user: {
        country: "",
        city: "",
        post: "",
        courier: "",
        delivery: ""
      },
      ifCourier: false
    };
  },
  methods: {
    changeCourier() {
      if (this.user.courier == "Yes") {
        this.ifCourier = true;
      } else {
        this.ifCourier = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";
label {
  margin-top: calc(6% - 21px);
}
select {
  margin-bottom: calc(6% - 21px);
  @include onPhone {
    margin-bottom: 5px;
  }
}
#delivery_info {
  height: calc(69px + 6%);
  margin-bottom: 0px;
}
</style>