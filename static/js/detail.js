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
        let response = await fetch(category_URL);
        const CATEGORY = await response.json();
        console.log(CATEGORY);
        response = await fetch(events_detail_URL);
        const EVENTS = await response.json();
        console.log(EVENTS);
        this.RenderHTMLForEvents(CATEGORY, EVENTS);
      } catch (error) {
        //handle error
        console.log(error);
      }
    },
    RenderHTMLForEvents(Category, Events) {
      const params = new URLSearchParams(window.location.search);
      const day = params.get("day") ?? "15";
      const id = params.get("id");
      const htmlForEventCategory = Category.map((category) => {
        const filterEvents = Events.filter((event) => {
          return (
            event.id === id &&
            event.day === day &&
            event.category.includes(category)
          );
        });
        return `
        <h2 id="${category}">${category} <a href ="" class="up-arrow"></a></h2>
        <ul >
        ${filterEvents
          .map((events) => {
            return `
            <li> <a href="detail.html?=${events.id}day=${events.day}">
            ${this.noPicture(events)}
            <p>${events.start}</p>
            <h3>${events.title}</h3>
            <p>${events.category}</p>
            </a>
            </li>`;
          })
          .join("")}
        </ul>`;
      }).join("");
      this.$category.innerHTML = htmlForEventCategory;
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