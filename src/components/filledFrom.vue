<template>
  <div>
    <h2>User's Filled Form</h2>
    <p>Name: {{ formData}}</p>
    <p>Email: {{ formData}}</p>
  </div>
</template>
<script>
export default {
  computed: {
    formData(){
      return this.$store.state.formData;

    },
  },
};
</script>