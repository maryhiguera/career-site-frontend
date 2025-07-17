<script>
import axios from "axios";
import JobsIndex from "./JobsIndex.vue";
import JobsNew from "./JobsNew.vue";
import Modal from "./Modal.vue";

export default {
  components: {
    JobsIndex,
    JobsNew,
    Modal,
  },
  data: function () {
    return {
      jobs: [],
      currentJobs: {}, 
      isJobsShowVisible: false,
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
    handleShowJob: function (job) {
      console.log("handleShowJob", job);
      this.currentJob = job;
      this.isJobsShowVisible = true;
    },
    handleClose: function () {
      this.isJobsShowVisible = false;
    },
  },
};
</script>

<template>
  <main>
    <JobsNew v-on:createJob="handleCreateJob" />
    <JobsIndex v-bind:jobs="jobs" v-on:showJob="handleShowJob"/>
    <Modal v-bind:show="isJobsShowVisible" v-on:close="handleClose" >
      <h1>test</h1>
    </Modal>
  </main>
</template>

<style></style>