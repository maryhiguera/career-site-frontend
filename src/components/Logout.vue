<script>
import axios from "axios";

export default {
  methods: {
    handleLogout: function () {
      axios.delete("/logout.json").then((response) => {
        console.log("user logout", response);
        this.$router.push("/login");
      });
    },
  },
  created: function () {
    this.handleLogout();
  },
};
</script>

<template>
  <div>
    <h1>Logout</h1>
  </div>
</template>

<style></style>