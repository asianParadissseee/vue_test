<template>
  <input class="input" type="text" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-input",
});
</script>

<style scoped>
.input {
  padding: 15px 10px;
  border: 2px solid #000000;
  width: 100%;
  color: #000000;
}
</style>
