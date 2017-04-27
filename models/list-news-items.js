(function(exports) {

  function ListNews() {
    this._newsItems = [];
  }

  ListNews.prototype.loadNews = function(text) {
    this._newsItems.push(newsItem = new NewsItem(text));
  }


  exports.ListNews = ListNews;
})(this);