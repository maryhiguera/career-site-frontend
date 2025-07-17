<script>
export default {
  props: {
    jobs: Array,
  },
};
</script>

<template>
  <div>
    <h1>All Jobs</h1>
    <div v-for="job in jobs" v-bind:key="job.id">
      <h2>{{ job.title }}</h2>
      <h3>{{ job.company }}, {{ job.location }}</h3>
      <p>{{ job.description }}</p>
      <p>{{ job.salary }}</p>
    </div>
  </div>
</template>

<style></style>