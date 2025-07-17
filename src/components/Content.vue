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
    handleCreateJob: function (params) {
      axios.post("http://localhost:5000/jobs.json", params).then((response) => {
        console.log("jobs create", response);
        this.jobs.push(response.data);
      })
      .catch((error) => {
        console.log("jobs create error", error.response);
      });
    },
  },
};
</script>

<template>
  <main>
    <JobsNew v-on:createJob="handleCreateJob" />
    <JobsIndex v-bind:jobs="jobs" />
  </main>
</template>

<style></style>