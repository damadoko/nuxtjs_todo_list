<template>
  <div>
    <button class="btn add-btn" @click="showModal">Add Todo</button>
    <button class="btn clear-btn">Clear completed Todo</button>
    <NewTodoModal v-show="isModalShow" @close="closeModal" />
  </div>
</template>

<script>
import NewTodoModal from "./NewTodoModal";
export default {
  name: "TodoCtrl",
  components: { NewTodoModal },
  data() {
    return {
      isModalShow: false
    };
  },
  methods: {
    showModal() {
      this.isModalShow = true;
    },
    closeModal() {
      this.isModalShow = false;
    }
  }
};
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5px;
  margin: 0 1rem;
  cursor: pointer;
  background-color: transparent;
  font-weight: bold;
}

.btn:focus {
  outline: none;
}

.add-btn {
  color: #ffffff;
  background-color: #1ba9f5;
}
.clear-btn {
  color: #ffce7a;
}
</style>
