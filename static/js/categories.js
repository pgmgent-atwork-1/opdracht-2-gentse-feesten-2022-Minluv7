const category_list_URL =
  "https://www.pgm.gent/data/gentsefeesten/categories.json";
(() => {
  const app = {
    initialize() {
      this.cachElements();
      this.fetchData();
    },
    cachElements() {
      this.$list_categories = document.getElementById("list_categories");
    },

    async fetchData() {
      try {
        let response = await fetch(category_list_URL);
        const CATEGORY = await response.json();
        console.log(CATEGORY);
        this.RenderHTMLForCategories(CATEGORY);
      } catch (error) {
        //handle error
        console.log(error);
      }
    },
    RenderHTMLForCategories(Category) {
      let sortAlphabetic = Category;
      sortAlphabetic.sort((a, b) => {
        return a.localeCompare(b);
      });
      const htmlForCategory = Category.map((category) => {
        return `
        <ul>
        <li id="${category}">${category}</li>
        </ul>
        `;
      }).join("");

      this.$list_categories.innerHTML = htmlForCategory;
    },
  };

  app.initialize();
})();
