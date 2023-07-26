import { MutationTree } from "vuex";

export interface ICard {
  id: number;
  title: string;
  body: string;
}

export interface CardActionContext {
  state: {
    cards: ICard[];
    isLoading: boolean;
    searchQuery: string;
  };
  commit: (mutation: string, payload?: any) => void;
}

export interface CardState {
  cards: ICard[];
  isLoading: boolean;
  searchQuery: string;
}

export interface CardMutations extends MutationTree<CardState> {
  setCards(state: CardState, cards: ICard[]): void;
  setLoading(state: CardState, bool: boolean): void;
  addCard(state: CardState, card: ICard): void;
  removeCard(state: CardState, cardId: number): void;
}
