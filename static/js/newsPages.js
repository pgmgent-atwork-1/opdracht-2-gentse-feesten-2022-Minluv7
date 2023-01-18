const news_URL = "https://www.pgm.gent/data/gentsefeesten/news.json";
(() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
      this.fetchNews();
    },
    cacheElements() {
      console.log("2. Cache all exisiting DOM elements!");
      this.$newsPages = document.getElementById("newsPages");
    },

    fetchNews() {
      fetch(news_URL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const htmlForNews = this.renderDataForNews(data);
          this.$newsPages.innerHTML = htmlForNews;
        })
        .catch((error) => console.log(error));
    },

    renderDataForNews(NWS) {
      return NWS.map((news) => {
        return `
        <div class="all_news">
        <p>${news.title}</p>
        <div class="all_news-arrow">
        <a href="#"class="arrow-news">
        </a>
      </div>
          <img src="https://www.pgm.gent/data/gentsefeesten${news.picture.medium}" alt="news pictures"/>
        </div>
        
      `;
      }).join("");
    },
  };
  app.initialize();
})();
