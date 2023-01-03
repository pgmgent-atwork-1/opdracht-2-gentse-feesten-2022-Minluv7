const category_URL = "https://www.pgm.gent/data/gentsefeesten/categories.json";
const events_day_URL = "https://www.pgm.gent/data/gentsefeesten/events.json";
(() => {
  const app = {
    initialize() {
      this.cachElements();
      this.fetchData();
    },
    cachElements() {
      this.$category = document.getElementById("category");
      this.$days = document.getElementById("days");
      this.$dayDetail = document.getElementById("dayDetail");
    },

    async fetchData() {
      try {
        let response = await fetch(category_URL);
        const CATEGORY = await response.json();
        console.log(CATEGORY);

        response = await fetch(events_day_URL);
        const EVENTS = await response.json();
        console.log(EVENTS);
        this.RenderHTMLForEvents(CATEGORY, EVENTS);
      } catch (error) {
        //handle error
        console.log(error);
      }
    },
    RenderHTMLForEvents(Category, Events) {
      const day = "15";
      const htmlForEventCategory = Category.map((category) => {
        const filterEvents = Events.filter((event) => {
          return event.day === day && event.category.includes(category);
        });
        return `
    <h2 id="${category}">${category}<h2>
        <ul>
        ${filterEvents
          .map((events) => {
            return `
            <li>
            ${events.title}
            ${events.start}
            ${events.category}
            </li>`;
          })
          .join("")}
        </ul>`;
      }).join("");

      this.$category.innerHTML = htmlForEventCategory;
    },
  };

  app.initialize();
})();
