<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <h2>New Todo</h2>
      </header>
      <section class="modal-body">
        <form>
          <p>
            <label>Todo title:</label>
            <input type="text" />
          </p>
          <p>
            <label>Expire on:</label>
            <input type="date" />
            <input type="time" />
          </p>
          <p>
            <label>Process:</label>
            <input type="text" />
          </p>
        </form>
        <TaskList :tasks="tasks" />
      </section>
      <footer class="modal-footer">
        <button>Cancel</button>
        <button>Save</button>
      </footer>
    </div>
  </div>
</template>

<script>
import TaskList from "./TaskList";

export default {
  name: "NewTodoModal",
  components: { TaskList },
  data() {
    return {
      title: "",
      exp: { year: "", day: "", time: "" },
      tasks: []
    };
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #25262e;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 1rem;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #1ba9f5;
  color: #1ba9f5;
  justify-content: center;
}

.modal-footer {
  border-top: 1px solid #1ba9f5;
  justify-content: flex-end;
}

.modal-footer button {
  display: inline-block;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 0 0.5rem;
  font-weight: bold;
}

.modal-footer button:first-child {
  background-color: transparent;
  color: #1ba9f5;
}

.modal-footer button:last-child {
  background-color: #1ba9f5;
  color: #ffffff;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.modal-body p {
  margin: 0.5rem 0;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label {
  display: inline-block;
  text-align: left;
  width: 90px;
  margin-right: 1rem;
  color: #ffffff;
}
</style>
