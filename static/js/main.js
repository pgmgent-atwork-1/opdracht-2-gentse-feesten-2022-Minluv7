const events_URL = "https://www.pgm.gent/data/gentsefeesten/events.json";
const news_URL = "https://www.pgm.gent/data/gentsefeesten/news.json";
(() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
      this.fetchEvents();
      this.fetchNews();
    },
    cacheElements() {
      console.log("2. Cache all exisiting DOM elements!");
      this.$overlayEvents = document.getElementById("overlayEvents");
      this.$news = document.getElementById("news");
    },

    fetchEvents() {
      fetch(events_URL)
        .then((response) => response.json())
        .then((data) => {
          const htmlForEightEvents = this.renderDataForEightEvents(data);
          this.$overlayEvents.innerHTML = htmlForEightEvents;
        })
        .catch((error) => console.log(error));
    },

    renderDataForEightEvents(EIGHTEVENTS) {
      const eightEvents = EIGHTEVENTS.slice(24, 32);
      return eightEvents
        .map((eightEvents) => {
          return `
        <ul class="eight-event">
        <li> <a href=""><p> ${eightEvents.day_of_week} ${eightEvents.day} juli </p>
         <img src ="${eightEvents.image.full}" alt ="event pictures"/>
         <div class="eight_events-box">
            <h3> ${eightEvents.title} </h3>
            <p>${eightEvents.location} </p>
            <p>${eightEvents.start} </p>
         </div>   
        </a>
        </li>
        </ul>
        `;
        })
        .join("\n");
    },

    fetchNews() {
      fetch(news_URL)
        .then((response) => response.json())
        .then((data) => {
          const htmlForNewsHome = this.renderDataForNewsHome(data);
          this.$news.innerHTML = htmlForNewsHome;
        })
        .catch((error) => console.log(error));
    },
    renderDataForNewsHome(NEWS) {
      const News = NEWS.slice(0, 3);
      return News.map((news) => {
        return `
        <a href="#"><div class="link_News">
        <p>${news.title}</p>
        <div class="title-arrow">
          <a href="#" class="news-arrow-right"> </a>
        </div>
        </div>
        </a>
        `;
      }).join("");
    },
  };
  app.initialize();
})();
