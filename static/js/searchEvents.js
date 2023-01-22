const EVENTSURL = "https://www.pgm.gent/data/gentsefeesten/events.json";
(() => {
  const app = {
    initialize() {
      this.cachElements();
      this.registerFilterEvents();
    },
    cachElements() {
      this.$searchResult = document.getElementById("searchResult");
    },

    //filter events
    async registerFilterEvents() {
      const filterEvents = async (search) => {
        const data = await fetch(EVENTSURL, { method: "GET" });
        const events = await data.json();
        console.log(events);
        const filteredEvents = events.filter(
          (event) =>
            event.category.findIndex((e) =>
              e.toLowerCase().includes(search)
            ) !== -1 ||
            event.title.toLowerCase().includes(search) ||
            event.location.toLowerCase().includes(search)
        );
        return filteredEvents;
      };
      const params = new URLSearchParams(window.location.search);
      const search = params.get("search");
      const events = await filterEvents(search);
      this.$searchResult.innerHTML = events
        .map((event) => {
          console.log(event);
          return `
          <ul class="search_events-pic">
              <li class="picture-date"><p>${event.day_of_week} ${
            event.day
          } juli</p></li> 
              <li class="search-no-pic">${this.noPicture(event)}</li>
              <div class="bottom">
              <li><h2>${event.title}</h2></li>
              <div class=location__start>
              <li><p>${event.location}</p></li>
              <li><p>${event.start} u.</p></li>
              </div>
              </div>
          </ul>
          `;
        })
        .join("");
    },

    noPicture(events) {
      if (events.image === null) {
        return `<img src ="static/img/error-404.jpeg"alt="not found"/>`;
      } else {
        return `<img src ="${events.image.full}" alt ="event pictures"/>`;
      }
    },
  };

  app.initialize();
})();
