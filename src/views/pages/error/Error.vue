<template>
  <div>Error Page</div>
</template>
<script lang="ts">
export default {
  name: 'ErrorPage',
  props: {
    statusCode: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
