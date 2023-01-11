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
        <li id="${category}"> <a href="${category}">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white">
        <title>category</title>
        <path d="M10.741 32c-2.648 0-5.137-1.031-7.009-2.902s-2.903-4.361-2.903-7.009 1.031-5.137 2.903-7.009l13.006-13.006c1.338-1.337 3.115-2.074 5.006-2.074s3.668 0.737 5.006 2.073c1.337 1.337 2.073 3.115 2.073 5.007s-0.737 3.67-2.073 5.007l-13.022 13.006c-1.591 1.592-4.413 1.594-6.005 0.001-0.791-0.792-1.245-1.887-1.245-3.005 0-1.135 0.442-2.202 1.244-3.003l12.016-12.002c0.553-0.551 1.45-0.553 2.003 0.001 0.551 0.553 0.551 1.449-0.001 2.001l-12.017 12.002c-0.267 0.267-0.414 0.622-0.414 1.001 0 0.373 0.151 0.738 0.415 1.002 0.53 0.529 1.472 0.531 2.004 0l13.021-13.007c0.802-0.801 1.244-1.868 1.244-3.004s-0.442-2.203-1.244-3.004c-1.606-1.606-4.403-1.606-6.009 0l-13.006 13.006c-1.337 1.338-2.074 3.115-2.074 5.007s0.737 3.669 2.074 5.007c1.337 1.337 3.115 2.073 5.007 2.073s3.67-0.737 5.007-2.073l13.006-13.006c0.553-0.553 1.448-0.553 2.001 0s0.553 1.448 0 2.001l-13.006 13.006c-1.872 1.871-4.361 2.902-7.009 2.902z"></path>
        </svg>
        ${category}</a></li>
        </ul>
        `;
      }).join("");

      this.$list_categories.innerHTML = htmlForCategory;
    },
  };

  app.initialize();
})();
