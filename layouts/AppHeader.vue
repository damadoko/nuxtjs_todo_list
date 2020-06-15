<template>
  <header>
    <h1>Todo list</h1>
    <TaskFilter />
  </header>
</template>

<script>
import TaskFilter from "../components/TaskFilter";
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
  min-height: 20vh;
  text-transform: uppercase;
  margin-bottom: 2rem;
  border-bottom: 2px solid #1ba9f5;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

header h1 {
  color: #1ba9f5;
  text-transform: uppercase;
}
</style>