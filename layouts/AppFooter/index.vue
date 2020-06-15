<template>
  <div class="records">
    <div class="records-wrapper">
      <Record
        v-for="(value, key, index) in records"
        :key="index"
        :recordTitle="key"
        :recordNumber="value"
      />
    </div>
  </div>
</template>

<script>
import Record from "./Record";

export default {
  name: "AppFooter",
  components: { Record },
  data() {
    return {
      records: {
        all: 5,
        done: 3,
        remain: 2
      }
    };
  }
};
</script>

<style scoped>
.records {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 20%;
  text-align: center;
}

.records-wrapper {
  max-width: 600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  transform: translateY(50%);
}
</style>
