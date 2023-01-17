(() => {
  const app = {
    initialize() {
      this.cachElements();
      this.registerListeners();
      this.registerListenersAdd();
    },
    cachElements() {
      this.$rasterButton = document.getElementById("rasterButton");
      this.$listButton = document.getElementById("listButton");
      this.$exPic = document.querySelector(".ex-pic");
    },
    registerListeners() {
      this.$rasterButton.addEventListener("click", (e) => {
        if (this.$exPic.classList.contains("list-view")) {
          this.$exPic.classList.remove("list-view");
        }
      });
    },
    registerListenersAdd() {
      this.$listButton.addEventListener("click", (e) => {
        this.$exPic.classList.add("list-view");
      });
    },
  };

  app.initialize();
})();
