<template>
  <ol>
    <li v-for="(task, index) in tasks" :key="index">{{ task.title }}</li>
  </ol>
</template>

<script>
export default {
  name: "TaskList",
  props: ["tasks"]
};
</script>

<style scoped></style>
