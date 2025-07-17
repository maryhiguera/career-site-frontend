<script>
export default {
  props: {
    job: Object,
  },
  data: function () {
    return {
      editJobParams: {},
    };
  },
  created: function () {
    this.editJobParams = { ...this.job };
  },
  methods: {
    handleSubmit: function () {
      this.$emit("updateJob", this.job.id, this.editJobParams);
    },
  },
};
</script>

<template>
  <div>
    <h1>Job Information</h1>
    <p>Title: {{ job.title }}</p>
    <p>Company: {{ job.company }}</p>
    <p>Description: {{ job.description }}</p>
    <p>Salary: {{ job.salary }}</p>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Title: <input v-model="editJobParams.title" type="text" />
      </div>
      <div>
        Company: <input v-model="editJobParams.company" />
      </div>
      <div>
        Description <input v-model="editJobParams.description" />
      </div>
      <div>
        Salary: <input v-model="editJobParams.salary" />
      </div>
      <button type="submit">Update</button>
      <button v-on:click="$emit('destroyJob', job)">Destroy</button>
    </form>
  </div>
</template>

<style></style>