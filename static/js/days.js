// const events_days_URL = "https://www.pgm.gent/data/gentsefeesten/events.json";

// (() => {
//   const app = {
//     initialize() {
//       this.cachElements();
//       this.fetchDays();
//     },
//     cachElements() {
//       this.$eventDays = document.getElementById("eventDays");
//     },

//     fetchDays() {
//       fetch(events_days_URL)
//         .then((response) => response.json())
//         .then((data) => {
//           const htmlForDays = this.renderDataForDays(data);
//           this.$eventDays.innerHTML = htmlForDays;
//         })
//         .catch((error) => console.log(error));
//     },
//     renderDataForDays(DAYS) {
//       const setDays = new Set(DAYS);
//       const uniqueValues = [...setDays];
//       return uniqueValues.map((days) => {
//         return `
//         <li>
//         <a href="day.html?id=${days.day}">${days.day} ${days.day_of_week}</a>
//         </li>
//         `;
//       });
//     },

//     generateHTMLForDetail() {
//       const params = new URLSearchParams(window.location.search);

//       if (!params.has("days")) {
//         return "<p> kies een kaas</p>";
//       }

//       // als we hier geraken zijn we zeker dat er een parameter id is
//       const days = params.get("days");
//       const events = events.find((events) => {
//         return events.days === days;
//       });
//       if (!events) {
//         return `<h2> kon de kaas niet terug vinden</h2>`;
//       }
//       this.$category.innerHTML = this.generateHTMLForDetail();
//       return `
//         <div>
//         <h2>${events.day}</h2>
//         <p>${events.day_of_week}</p>
//         </div>`;
//     },
//   };
//   app.initialize();
// })();
