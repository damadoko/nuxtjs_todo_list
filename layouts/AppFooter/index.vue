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
  text-align: center;
  margin: 1rem 0;
}

.records-wrapper {
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
</style>