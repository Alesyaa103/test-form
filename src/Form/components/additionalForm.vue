<template>
  <fieldset>
    <label for="country">Country</label>
    <select id="country" v-model="user.country" :style="newMargin" @change="updateInfo">
      <option disabled selected style="display:none;"></option>
      <option>Ukraine</option>
    </select>
    <label for="city">City</label>
    <select id="city" v-model="user.city" @change="updateInfo">
      <option disabled selected style="display:none;"></option>
      <option>Kyiv</option>
    </select>
    <label for="post">Post office number</label>
    <select id="post" v-model="user.post" @change="updateInfo">
      <option disabled selected style="display:none;"></option>
      <option>1</option>
      <option>2</option>
    </select>
    <label for="delivery">Do you want to home delivery</label>
    <select v-model="isDelivery" id="delivery" >
      <option disabled selected style="display:none;"></option>
      <option>Yes</option>
      <option>No</option>
    </select>
    <textarea
      placeholder="Add information for courier"
      id="delivery_info"
      :readonly="isDelivery !== 'Yes' "
      v-model="user.delivery"
      @change="updateInfo"
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
        delivery: ""
      },
      isDelivery: ''
    };
  },
  props: {
    height: String,
  },
  methods: {
    // changeCourier() {
    //   if (this.isDelivery == "Yes") {
    //     this.ifCourier = true;
    //   } else {
    //     this.ifCourier = false;
    //   }
    // },
    updateInfo(){
      this.$store.commit('SET_USER', this.user)
    }
  },
  computed: {
    newMargin() {
      return  {
        marginBottom: 'calc('+ this.height + ' - 6px)'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";
label {
  margin-top: 9px;
}
select {
  margin-bottom: 9px;
  @include onPhone {
    margin-bottom: 5px;
  }
}
#delivery_info {
  height: 95px;
  margin-bottom: 0px;
  @include onPhone {
    height: 16px;
  }
}
fieldset{
  padding-top: 9px;
#country{
  @include onTablet {
    margin-bottom: 5px;
  }
}
}
</style>