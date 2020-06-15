<template>
  <div class="todo">
    <div class="todo-info">
      <font-awesome-icon :icon="['fas', 'check']" />
      <input type="text" :value="todo.title" />
    </div>
    <font-awesome-icon :icon="['fas', 'times']" />
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"]
};
</script>

<style scoped></style>
