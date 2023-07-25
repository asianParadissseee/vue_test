<template>
  <div class="modal">
    <div class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import toggleMixins from "@/mixins/toggleMixins";

export default defineComponent({
  name: "my-modal",
  mixins: [toggleMixins],
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
}

.modal__content {
  margin: auto;
  background: #fff;
  border-radius: 4px;
  min-height: 100px;
  min-width: 500px;
  padding: 15px 30px;
}
</style>
