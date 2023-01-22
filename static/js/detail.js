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
      this.$locationDetial = document.getElementById("locationDetial");
    },

    async fetchData() {
      try {
        response = await fetch(events_detail_URL);
        const EVENTS = await response.json();
        console.log(EVENTS);
        this.$category.innerHTML = this.renderHTMLForEvents(EVENTS);
        this.$locationDetial.innerHTML = this.renderHTMLForLocation(EVENTS);
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
      return `
      <li class="detail-element">
      <h2>${event.title}</h2>
        <p>
        <div class="location_hours">
        <div class="location-router">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="21" height="32" viewBox="0 0 21 32">
        <title>marker</title>
        <path d="M10.4 0c-5.457 0-10.4 4.537-10.4 10.136 0 5.597 4.51 12.28 10.4 21.864 5.89-9.584 10.4-16.267 10.4-21.864 0-5.599-4.941-10.136-10.4-10.136zM10.4 14.667c-2.154 0-3.9-1.791-3.9-4s1.746-4 3.9-4c2.154 0 3.9 1.791 3.9 4s-1.746 4-3.9 4z"></path>
        </svg>
        <p>${event.location}</p>
        </div>
        ${event.start}u. - ${event.end}u.</p>
        </div>
        <div class="description">
        ${this.noDescription(event)}
        </div>
        ${this.noPicture(event)}
        <div class="bold">
        <p > Organisator: </p>
        <a href ="#"> ${event.organizer}</a>
        </div>
        <div class="bold">
        <p> Categoriën:</p>
        <a href ="#"> ${event.category}</a>
        </div>
        <div class="bold">
        <p> Website:</p>
        <a href ="#"> ${this.noWebsite(event)}</a>
        </div>
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

    noWebsite(event) {
      if (event.url === null) {
        return "";
      } else {
        return `<p>${event.url}</p>`;
      }
    },

    renderHTMLForLocation(Events) {
      const params = new URLSearchParams(window.location.search);
      const day = params.get("day");
      const slug = params.get("slug");
      const event = Events.find((event) => {
        return event.slug === slug && event.day == day;
      });
      return `
      <div class="location_party">
      <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="32"
              viewBox="0 0 21 32"
            >
              <title>marker</title>
              <path
                d="M10.4 0c-5.457 0-10.4 4.537-10.4 10.136 0 5.597 4.51 12.28 10.4 21.864 5.89-9.584 10.4-16.267 10.4-21.864 0-5.599-4.941-10.136-10.4-10.136zM10.4 14.667c-2.154 0-3.9-1.791-3.9-4s1.746-4 3.9-4c2.154 0 3.9 1.791 3.9 4s-1.746 4-3.9 4z"
              ></path>
            </svg>
      <p>${event.location}<p>
      </div>
      `;
    },
  };

  app.initialize();
})();
