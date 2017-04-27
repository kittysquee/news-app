(function(exports) {

  function NewsController() {
    this.headlines = [];
    this.url = 'https://content.guardianapis.com/technology';
    this.apiKey = '?api-key=09d2f75f-4c58-41f0-9d98-1543adc50900';
    this.apiData = {};
  }

  NewsController.prototype.apiCall = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', this.url + this.apiKey, false);
    xhr.send();
    this.apiData = JSON.parse(xhr.response).response;
  };

  NewsController.prototype.addHeadlines = function() {
    var results = this.apiData.results;
    var resultsLength = results.length;
    for (i = 0; i < resultsLength; i++) {
      this.headlines.push(results[i].webTitle);
    }
  };

  NewsController.prototype.listHeadlines = function() {
    var headlineView = new HeadlineView(this.headlines);
    return headlineView.viewHeadlines();
  };

  NewsController.prototype.renderHeadlines = function() {
    this.apiCall();
    this.addHeadlines();
    var el = document.getElementById('app');
    el.innerHTML = this.listHeadlines();
  };

  exports.NewsController = NewsController;
})(this);
