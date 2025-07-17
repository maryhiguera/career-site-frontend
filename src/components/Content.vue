<script>
import axios from "axios";
import JobsIndex from "./JobsIndex.vue";
import JobsNew from "./JobsNew.vue";

export default {
  components: {
    JobsIndex,
    JobsNew,
  },
  data: function () {
    return {
      jobs: [],
    };
  },
  created: function () {
    this.handleIndexJobs();
  },
  methods: {
    handleIndexJobs: function () {
      axios.get("http://localhost:5000/jobs.json").then((response) => {
        console.log("jobs index", response);
        this.jobs = response.data;
      });
    },
  },
};
</script>

<template>
  <main>
    <JobsNew />
    <JobsIndex v-bind:jobs="jobs" />
  </main>
</template>

<style></style>