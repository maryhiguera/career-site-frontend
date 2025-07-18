
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
    };
  },
  methods: {
    handleSubmit: function () {
      axios.post("/signup.json", this.newUserParams).then((response) => {
        console.log("user create", response);
        this.$router.push("/login");
      });
    },
  },
};
</script>

<template>
  <div>
    <h1>Sign Up</h1>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Email: <input type="text" v-model="newUserParams.email"/>
      </div>
      <div>
        Password: <input type="text" v-model="newUserParams.password"/>
      </div>
      <div>
        Password Confirmation: <input type="text" v-model="newUserParams.password_confirmation"/>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<style></style> 