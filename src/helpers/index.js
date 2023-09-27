export const useLocalStorage = {
  getStorage() {
    return {
      user: JSON.parse(localStorage.getItem("data"))?.user,
      userChildren: JSON.parse(localStorage.getItem("data"))?.userChildren,
    };
  },

  setStorage(value) {
    localStorage.setItem("data", JSON.stringify(value));
  },
};
