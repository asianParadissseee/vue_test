<template>
  <div>
    <h1>Id of card: {{ $route.params.id }}</h1>
    <p><b>Title:</b> {{ $store.state.cardOne.title }}</p>
    <span><b>Info:</b> {{ $store.state.cardOne.body }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import store from "../store";

export default defineComponent({
  props: {
    CardId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters("card", ["getCardById"]),
    cardData() {
      return this.getCardById(this.$route.params.id) || {};
    },
  },
  mounted() {
    this.fetchCard();
  },
  methods: {
    ...mapActions("card", ["fetchCardById"]),
    async fetchCard() {
      await this.fetchCardById(this.$route.params.id);
    },
  },
});
</script>

<style scoped></style>
