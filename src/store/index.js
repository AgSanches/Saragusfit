import { createStore } from "vuex";
import general from "./modules/general";
import login from "./modules/login";

export default createStore({
  modules: {
    general,
    login
  }
});
