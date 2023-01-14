(() => {
  const app = {
    initialize() {
      this.cachElements();
      this.registerListeners();
      this.registerListenersAdd();
    },
    cachElements() {
      this.$changeBtn = document.getElementById("changeBtn");
      this.$changeOverview = document.getElementById("changeOverview");
      this.$closed = document.getElementById("closed");
    },

    registerListeners() {
      this.$closed.addEventListener("click", (e) => {
        if (this.$changeOverview.classList.contains("open")) {
          this.$changeOverview.classList.remove("open");
        }
      });
    },
    registerListenersAdd() {
      this.$changeBtn.addEventListener("click", (e) => {
        this.$changeOverview.classList.add("open");
      });
    },
  };
  app.initialize();
})();
