<template>
  <div>
    <button class="btn add-btn">Add Todo</button>
    <button class="btn clear-btn">Clear completed Todo</button>
  </div>
</template>

<script>
export default {
  name: "TodoCtrl"
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
