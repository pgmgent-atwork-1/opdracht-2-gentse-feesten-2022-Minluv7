(() => {
  const app = {
    initialize() {
      this.cachElements();
      this.registerSearchListeners();
    },
    cachElements() {
      this.$txtSearch = document.getElementById("txtSearch");
    },

    registerSearchListeners() {
      this.$txtSearch.addEventListener("submit", (e) => {
        const searchStr = e.currentTarget.elements.txtSearch.value;
        console.log(searchStr);
      });
    },

    getDataFromEvents() {
      this.$txtSearch;
    },
  };
  app.initialize();
})();
