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
      const random = Math.floor(Math.random() * (EIGHTEVENTS.length - 8));
      const eightEvents = EIGHTEVENTS.slice(random, random + 8);
      return eightEvents
        .map((eightEvents) => {
          return `
        <ul class="eight-event">
        <li> <a href="events/detail.html?slug=${eightEvents.slug}&day=${
            eightEvents.day
          }">
        <p>${eightEvents.day_of_week} ${eightEvents.day} juli</p>
         ${this.notFount(eightEvents)}
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

    notFount(eightEvents) {
      if (eightEvents.image === null) {
        return `<img src ="static/img/error-404.jpeg" alt ="not found"/>`;
      } else {
        return ` <img src ="${eightEvents.image.full}" alt ="event pictures"/>`;
      }
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
        <a href="news.html">
        <div class="link_News">
        <p>${news.title}</p>
        <div class="title-arrow">
          <div href="#" class="news-arrow-right"> 
          </div>
        </div>
        </div>
        </a>
        `;
      }).join("");
    },
  };
  app.initialize();
})();
