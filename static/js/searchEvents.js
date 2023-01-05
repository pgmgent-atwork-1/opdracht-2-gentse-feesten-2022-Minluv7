(() => {
  const app = {
    initialize() {
      this.cachElements();
      this.registerSearchListeners();
    },
    cachElements() {
      this.$searchIconEvents = document.getElementById("searchIconEvents");
    },

    registerSearchListeners() {
      this.$searchIconEvents.addEventListener("click", (e) => {
        e.preventDefault();
      });
    },
  };
  app.initialize();
})();
