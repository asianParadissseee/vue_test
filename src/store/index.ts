import { createStore } from "vuex";
import { CardModule } from "@/store/CardModules";

// export interface StateInterface {}
export default createStore({
  modules: {
    card: CardModule,
  },
});
