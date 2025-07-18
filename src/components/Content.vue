<script>
import axios from "axios";
import JobsIndex from "./JobsIndex.vue";
import JobsNew from "./JobsNew.vue";
import Modal from "./Modal.vue";
import JobsShow from "./JobsShow.vue"

export default {
  components: {
    JobsIndex,
    JobsNew,
    JobsShow,
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
      axios.get("/jobs.json").then((response) => {
        console.log("jobs index", response);
        this.jobs = response.data;
      });
    },
    handleCreateJob: function (params) {
      axios.post("/jobs.json", params).then((response) => {
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
    handleUpdateJob: function (id, params) {
      console.log("handleUpdateJob", id, params);
      axios.patch(`/jobs/${id}.json`, params).then((response) => {
        console.log("jobs update", response);
        this.jobs = this.jobs.map((job) => {
          if (job.id === response.data.id) {
            return response.data;
          } else {
            return job; 
          }
        });
        this.handleClose();
      })
      .catch((error) => {
        console.log("job update error", error.response);
      });
    },
    handleDestroyJob: function (job) {
      axios.delete(`/jobs/${job.id}.json`).then((response) => {
        console.log("destroy job", response);
        var index = this.jobs.indexOf(job);
        this.jobs.splice(index, 1);
        this.handleClose(); 
      });
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
      <JobsShow v-bind:job="currentJob" v-on:updateJob="handleUpdateJob" v-on:destroyJob="handleDestroyJob" />
    </Modal>
  </main>
</template>

<style></style>