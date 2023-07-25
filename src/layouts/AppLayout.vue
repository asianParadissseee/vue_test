<template>
  <div>
    <app-header />
    <div class="content">
      <slot></slot>
    </div>
  </div>
  <app-footer />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: { AppFooter, AppHeader },
};
</script>

<style scoped>
.content {
  max-width: 80%;
  margin: 0 auto;
}
</style>
