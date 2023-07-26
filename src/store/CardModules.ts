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
      cardOne: {},
    } as CardState;
  },
  getters: {
    getCardById:
      (state: CardState) =>
      (id: number): ICard | any => {
        const card = state.cards.find((card) => card.id === id);
        if (card) {
          // Extract the fields you want from the card object
          const { id, title, body } = card;
          return {
            id,
            title,
            body,
          };
        }
        return {};
      },
  },
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
    getOneCard(state: CardState, card: ICard) {
      state.cardOne = card;
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
    async fetchCardById({ state, commit }: CardActionContext, id: number) {
      try {
        commit("setLoading", true);
        const response = await axios.get(`${API_URL}posts/${id}`);
        const cardData = response.data;
        commit("getOneCard", cardData);
      } catch (e) {
        console.error(`Error fetching card with ID ${id}:`, e);
      } finally {
        commit("setLoading", false);
      }
    },
  },

  namespaced: true,
};
