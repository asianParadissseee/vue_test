<template>
  <div>
    <div>Card page</div>
    <card-form @create="createCard" />
    <card-list :cards="cards" @remove="removeCard" v-if="!isLoading" />
    <app-loader v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardList from "@/components/CardList.vue";
import CardForm from "@/components/CardForm.vue";
import { ICard } from "@/models";
import { mapActions, mapMutations, mapState, Store } from "vuex";
import { CardState } from "@/types/storeTypes";
import AppLoader from "@/components/AppLoader.vue";

interface MyComponent extends ReturnType<typeof defineComponent> {
  $store: Store<CardState>; // Replace 'any' with your actual store type if available
}

export default defineComponent({
  computed: {
    ...mapState<CardState>("card", {
      cards: (state: CardState) => state.cards,
      isLoading: (state: CardState) => state.isLoading,
      searchQuery: (state: CardState) => state.searchQuery,
    }),
  },
  components: { AppLoader, CardForm, CardList },
  methods: {
    ...mapMutations("card", {
      setPage: "setPage",
      addCard: "addCard",
      removeCard: "removeCard",
    }),
    ...mapActions("card", {
      fetchCards: "fetchCards",
    }),
    createCard(card: ICard) {
      this.addCard(card);
    },
    removeCard(cardId: number) {
      (this as MyComponent).$store.commit("card/removeCard", cardId);
    },
  },
  mounted() {
    this.fetchCards();
  },
});
</script>

<style scoped></style>
