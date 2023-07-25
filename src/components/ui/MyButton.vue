<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-button",
});
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  border: 2px solid #000000;
  color: #000000;
}
</style>
