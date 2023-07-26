<template>
  <div v-if="cards.length > 0">
    <h1>Cards</h1>
    <card-item
      class="card"
      v-for="card in cards"
      :key="card.id"
      :card="card"
      @click="$emit('remove', card.id)"
    />
  </div>
  <h1 v-else>Card not found</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardItem from "@/components/CardItem.vue";

export default defineComponent({
  components: { CardItem },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
.card {
  padding: 15px;
  border: 2px solid #000000;
  margin-top: 15px;
}
</style>
