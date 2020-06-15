<template>
  <div class="todo">
    <div class="todo-info" :class="{ done: todo.completed }">
      <font-awesome-icon
        v-if="todo.completed"
        :icon="['fas', 'check-circle']"
      />
      <font-awesome-icon v-else :icon="['fas', 'check']" />
      <p>{{ todo.title }}</p>
    </div>
    <font-awesome-icon
      :icon="['fas', 'times']"
      class="icon-del"
      :class="{ delete: todo.completed }"
    />
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"]
};
</script>

<style scoped>
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #1ba9f5;
  transition: all 0.4s ease-in-out;
  width: 100%;
  color: #1ba9f5;
}

.done {
  color: #535966;
}

.delete {
  display: inline-block !important;
}

.hide {
  display: none !important;
}

.todo-info {
  display: flex;
  max-width: 80%;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.todo-info p {
  margin-left: 2rem;
  overflow: hidden;
  text-align: justify;
  border: 0;
  background: transparent;
  font-size: 1.25rem;
  color: inherit;
  width: 70vw;
}

.icon-del {
  color: #535966;
  margin-right: 0.5rem;
  transition: all 0.25s ease-in-out;
  display: none;
}
</style>
