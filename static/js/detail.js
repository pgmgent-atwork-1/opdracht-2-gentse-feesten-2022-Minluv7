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
      return `<li class="detail-element"> <a href="detail.html?slug=${
        event.slug
      }&day=${event.day}">
      <h2>${event.title}</h2>
        <p class="detail__location"> <a href ="">${event.location}</a> ${
        event.start
      }u. - ${event.end}u.</p>
        ${this.noDescription(event)}
        ${this.noPicture(event)}
        <p> Organisator: <a href ="#">${event.organizer}</a></p>
        <p> Categoriën: <a href ="#">${event.category}</a></p>
        </a>
      </li>`;
    },

    noPicture(event) {
      if (event.image === null) {
        return `<img src ="static/img/error-404.jpeg" alt ="not found"/>`;
      } else {
        return `<img   src ="${event.image.full}" alt ="event pictures"/>`;
      }
    },

    noDescription(event) {
      if (event.description === null) {
        return "";
      } else {
        return `<p>${event.description}</p>`;
      }
    },
  };

  app.initialize();
})();
