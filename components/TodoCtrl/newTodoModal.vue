<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <h2>Title</h2>
      </header>
      <section class="modal-body">
        <form>
          <p>
            <label>Todo title:</label>
            <input type="text" />
          </p>
          <p>
            <label>Expire on:</label>
            <input type="number" placeholder="year" />
            <input type="number" placeholder="day" />
            <input type="number" placeholder="hour" />
          </p>
          <p>
            <label>Process:</label>
            <input type="text" />
          </p>
        </form>
      </section>
      <footer class="modal-footer">
        <button>Cancel</button>
        <button>Save</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "newTodoModal",
  data() {
    return {
      title: "",
      exp: { year: "", day: "", time: "" },
      tasks: []
    };
  }
};
</script>

<style scoped></style>
