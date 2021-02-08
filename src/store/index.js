import { createStore } from "vuex";
import general from "./modules/general";
import login from "./modules/login";
import home from "./modules/home";

export default createStore({
  modules: {
    general,
    login,
    home
  }
});
