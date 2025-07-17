<script>
export default {
  data: function () {
    return {
      newJobParams: {},
    };
  },
  methods: {
    handleSubmit: function () {
      this.$emit("createJob", this.newJobParams);
      this.newJobParams = {};
    },
  },
};
</script>

<template>
  <div>
    <h1>New Job</h1>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Title: <input type="text" v-model="newJobParams.title"/>
      </div>
      <div>
        Company: <input type="text" v-model="newJobParams.company"/>
      </div>
      <div>
        Location: <input type="text" v-model="newJobParams.location"/>
      </div>
      <div>
        Description: <input type="text" v-model="newJobParams.description"/>
      </div>
      <div>
        Salary: <input type="text" v-model="newJobParams.salary"/>
      </div>
      <button type="submit">Create Job</button>
    </form>
  </div>
</template>

<style></style>