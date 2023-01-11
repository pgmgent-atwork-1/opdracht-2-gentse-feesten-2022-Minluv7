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
        eventsExclPic.style = "font-display: block";
      });
      listButton.addEventListener("click", () => {
        eventsExclPic.style = "font-display: none";
      });
    },
  };

  app.initialize();
})();
