<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="detail-list">
      <TodoDetail v-for="task in tasks" :key="task.taskId" :task="task" />
    </div>
    <button>&#8592; Back</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoDetail from "../../components/TodoDetail";
export default {
  components: { TodoDetail },
  computed: mapGetters({
    getTodos: "todos/getTodos"
  }),
  data() {
    return {
      title: "",
      tasks: [],
      percentage: 0
    };
  },
  created: function() {
    const todo = this.getTodos.filter(
      item => item.id === parseInt(this.$route.params.id)
    );
    this.title = todo[0].title;
    this.tasks = todo[0].tasks;
    this.percentage = todo[0].percentage;
    console.log(todo[0].tasks);
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  height: 60%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.detail-list {
  max-height: 80%;
  overflow-y: auto;
  background-color: transparent;
  border: 1px solid transparent;
  margin: 1rem 0;
  max-width: 600px;
}

h1 {
  color: #1ba9f5;
  margin-top: 1rem;
}

button {
  color: #1ba9f5;
  display: inline-block;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: bold;
  position: absolute;
  top: 25%;
  left: 5%;
}
</style>
