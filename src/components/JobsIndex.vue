<script>
export default {
  props: {
    jobs: Array,
  },
};
</script>

<template>
  <div className="row">
    <div className="col-sm-6" v-for="job in jobs" v-bind:key="job.id" style="width: 22rem;">
      <div className="card">
        <h2 className="text-center">{{ job.title }}</h2>
        <p className="text-center"><strong>{{ job.company }}, {{ job.location }}</strong></p>
        <ul>
        <li>{{ job.description }}</li>
        <li>{{ job.salary }}</li>
        </ul>
        <button v-on:click="$emit('showJob', job)">More Info</button>
      </div>
    </div>
  </div>
</template>

<style></style>
