const category_URL = "https://www.pgm.gent/data/gentsefeesten/categories.json";
const events_detail_URL = "https://www.pgm.gent/data/gentsefeesten/events.json";
(() => {
  const app = {
    initialize() {
      this.cachElements();
      this.fetchData();
    },
    cachElements() {
      this.$category = document.getElementById("category");
    },

    async fetchData() {
      try {
        response = await fetch(events_detail_URL);
        const EVENTS = await response.json();
        console.log(EVENTS);
        this.$category.innerHTML = this.renderHTMLForEvents(EVENTS);
      } catch (error) {
        //handle error
        console.log(error);
      }
    },

    renderHTMLForEvents(Events) {
      const params = new URLSearchParams(window.location.search);
      const day = params.get("day");
      const slug = params.get("slug");
      const event = Events.find((event) => {
        return event.slug === slug && event.day == day;
      });
      return `<li> <a href="detail.html?slug=${event.slug}&day=${event.day}">
          ${this.noPicture(event)}
        <p>${event.start}</p>
        <h3>${event.title}</h3>
        <p>${event.category}</p>
        </a>
      </li>`;
    },

    noPicture(events) {
      if (events.image === null) {
        return `<img id="eventsExclPic" src ="static/img/error-404.jpeg" alt ="not found"/>`;
      } else {
        return `<img id="eventsExclPic"  src ="${events.image.full}" alt ="event pictures"/>`;
      }
    },
  };

  app.initialize();
})();
