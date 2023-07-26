<template>
  <div>
    <h1>id of cards: {{ this.$route.params.id }}</h1>
    <p>title:{{ this.$route.params.title }}</p>
    <span> info: {{ this.$route.params.body }} </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
export default defineComponent({});
</script>

<style scoped></style>
