export const useLocalStorage = {
  getStorage() {
    const { user, userChildren } = JSON.parse(localStorage.getItem("data"));
    return {
      user,
      userChildren,
    };
  },

  setStorage(value) {
    localStorage.setItem("data", JSON.stringify(value));
  },
};
