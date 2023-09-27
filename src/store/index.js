import { createStore } from "vuex";
import { useLocalStorage } from "../helpers";

const store = createStore({
  state() {
    console.log(useLocalStorage.getStorage().user);
    return {
      user: useLocalStorage.getStorage().user ?? {
        name: "",
        age: "",
      },
      userChildren: useLocalStorage.getStorage().userChildren ?? [],
    };
  },
  mutations: {
    setName(state, payload) {
      state.user.name = payload;
    },
    setAge(state, payload) {
      state.user.age = payload;
    },

    setChildren(state, payload) {
      state.userChildren.push(payload);
    },

    childrenName(state, value) {
      console.log(value);
    },

    removeChildren(state, id) {
      state.userChildren = state.userChildren.filter((item) => item.id != id);
    },
  },
});

export default store;
