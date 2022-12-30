(() => {
  const app = {
    initialize() {
      this.cachElements();
      this.registerListeners();
      this.registerListenersAdd();
    },
    cachElements() {
      this.$hamburgerBtn = document.getElementById("hamburgerBtn");
      this.$hamburgerOverview = document.getElementById("hamburgerOverview");
      this.$clowse = document.getElementById("clowse");
    },

    registerListeners() {
      this.$clowse.addEventListener("click", (e) => {
        if (this.$hamburgerOverview.classList.contains("open")) {
          this.$hamburgerOverview.classList.remove("open");
        }
      });
    },
    registerListenersAdd() {
      this.$hamburgerBtn.addEventListener("click", (e) => {
        this.$hamburgerOverview.classList.add("open");
      });
    },
  };
  app.initialize();
})();
