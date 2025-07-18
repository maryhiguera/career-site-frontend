<script>
import axios from "axios";

export default {
  data: function () {
    return {
      userParams: {},
    };
  },
  methods: {
    handleSubmit: function () {
      axios.post("/login.json", this.userParams).then((response) => {
        console.log("user login", response);
        this.$router.push("/jobs");
      });
    },
  },
};
</script> 

<template>
  <div>
    <h1>Login</h1>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Email: <input type="text" v-model="userParams.email"/>
      </div>
      <div>
        Password: <input type="text" v-model="userParams.password"/>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style></style>