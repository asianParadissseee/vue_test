<template>
  <app-layout>
    <router-view></router-view>
  </app-layout>
</template>

<script>
import { defineComponent } from "vue";
import AppLayout from "@/layouts/AppLayout.vue";

export default defineComponent({
  components: { AppLayout },
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #000;
  font-family: "Montserrat", sans-serif;
  position: relative;
}

:where(input, button, ul, li, a) {
  text-decoration: none;
  list-style: none;
  border: none;
  background: none;
}
</style>
