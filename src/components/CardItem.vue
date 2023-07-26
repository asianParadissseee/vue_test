<template>
  <div class="card">
    <div class="card__content">
      <h1>name: {{ card.title }}</h1>
      <p>description: {{ card.body }}</p>
    </div>
    <div class="btns">
      <my-button @click="$emit('remove', card.id)">Delete</my-button>
      <my-button
        @click="
          $router.push({
            name: 'card-detail',
            params: { id: card.id, title: card.title, body: card.body },
          })
        "
        >About card
      </my-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log("test");
    console.log(this.card);
  },
});
</script>

<style scoped>
.card {
  padding: 15px;
  border: 2px solid #000000;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btns {
  display: flex;
  gap: 10px;
}
</style>
