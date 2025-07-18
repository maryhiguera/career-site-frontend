<script>
import { RouterLink } from 'vue-router';

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/jobs">Jobs</RouterLink> | <RouterLink to="/jobs/new">New Job</RouterLink> |
      <RouterLink to="/signup">Sign Up</RouterLink> | <RouterLink to="/login">Login</RouterLink> |
      <RouterLink to="/logout">Logout</RouterLink>
    </nav>
  </header>
</template>

<style></style>