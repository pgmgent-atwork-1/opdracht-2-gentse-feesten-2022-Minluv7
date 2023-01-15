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
        const filteredEvents = events.filter((event) => {
          return event.id.contain(searchStr);
        });
        console.log(filteredEvents);
      });
    },

    getDataFromEvents() {
      this.$txtSearch;
    },
  };
  app.initialize();
})();
