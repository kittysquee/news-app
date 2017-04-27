(function(exports) {

  function NewsController() {
    this.headlines = [];
    this.url = 'https://content.guardianapis.com/technology';
    this.apiKey = '&api-key=404e88ff-db6b-4738-8e64-5581b3fdc007';
    this.apiData;
    this.apiCall();
    this.addHeadlines();
  }

  NewsController.prototype.apiCall = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', this.url + this.apiKey, false);
    xhr.send();
    this.apiData = JSON.parse(xhr.response).response;
  }

  NewsController.prototype.addHeadLines = function() {
    for (i = 1; i < this.apiData.results.length; i++) {
      this.headlines.push(this.apiData.results[i].webTitle);
    }
  }

  NewsController.prototype.listHeadlines = function() {
    var headlineView = new HeadlineView(this.headlines);
    return headlineView.viewHeadlines();
  }

  NewsController.prototype.renderHeadlines = function() {
    var el = document.getElementById('app');
    el.innerHTML = this.listHeadlines();
  }

  exports.NewsController = NewsController;
})(this);