import {
  ICard,
  CardActionContext,
  CardState,
  CardMutations,
} from "@/types/storeTypes";
import { API_URL } from "@/constants/api";
import axios from "axios";

export const CardModule = {
  state: () => {
    return {
      cards: [] as ICard[],
      isLoading: false as boolean,
    } as CardState;
  },
  getters: {},
  mutations: {
    setCards(state, cards) {
      state.cards = cards;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    addCard(state: CardState, card: ICard) {
      state.cards.push(card);
    },
    removeCard(state: CardState, cardId: number): void {
      state.cards = state.cards.filter((card) => card.id !== cardId);
    },
  } as CardMutations,
  actions: {
    async fetchCards({ state, commit }: CardActionContext) {
      try {
        commit("setLoading", true);
        const response = await axios.get(`${API_URL}posts`);
        commit("setCards", response.data);
      } catch (e) {
        console.error("Error fetching cards:", e);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
