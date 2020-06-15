<template>
  <header>
    <h2>Todo list</h2>
    <TaskFilter />
  </header>
</template>

<script>
import TaskFilter from "./TaskFilter";
export default {
  name: "AppHeader",
  components: { TaskFilter }
};
</script>

<style scoped>
header {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 20%;
  text-transform: uppercase;
  border-bottom: 2px solid #1ba9f5;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

header h2 {
  color: #1ba9f5;
  text-transform: uppercase;
}
</style>
