(() => {
  const app = {
    initialize() {
      this.cachElements();
      this.getStyle();
    },
    cachElements() {
      this.$rasterButton = document.getElementById("rasterButton");
      this.$listButton = document.getElementById("listButton");
      this.$eventsExclPic = document.getElementById("eventsExclPic");
    },
    getStyle() {
      rasterButton.addEventListener("click", () => {
        element.classList.addEventListener = "display: block";
      });
      listButton.addEventListener("click", () => {
        element.classList = "display: none";
      });
    },
  };

  app.initialize();
})();
