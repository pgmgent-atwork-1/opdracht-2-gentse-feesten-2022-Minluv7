const events_URL = "https://www.pgm.gent/data/gentsefeesten/events.json";
const news_URL = " https://www.pgm.gent/data/gentsefeesten/news.json";
(() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
      this.fetchEvents();
    },
    cacheElements() {
      console.log("2. Cache all exisiting DOM elements!");
      this.$overlayEvents = document.getElementById("overlayEvents");
    },

    fetchEvents() {
      fetch(events_URL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const htmlForEvents = this.renderDataForEightEvents(data);
          this.$overlayEvents.innerHTML = htmlForEvents;
        })
        .catch((error) => console.log(error));
    },

    renderDataForEightEvents(EIGHTEVENTS) {
      const eightEvents = EIGHTEVENTS.slice(24, 32);
      return eightEvents
        .map((eightEvents) => {
          return `
        <ul class="eightEvent">
        <li> ${eightEvents.day_of_week} ${eightEvents.day} juli</li>
        <li> <img src ="${eightEvents.image.full}" alt ="event pictures"/></li>
        <li> ${eightEvents.title}</li>
        <li> ${eightEvents.location}</li>
        <li> ${eightEvents.start}</li>
        </ul>
        `;
        })
        .join("\n");
    },

    fetchNews() {
      fetch(news_URL);
    },
  };
  app.initialize();
})();
