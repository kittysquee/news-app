(function(exports) {

  function ViewList(newsList) {
    this._newsList = newsList;
  }

  ViewList.prototype.list = function() {
    var articles = '<ul>';
    for (i = 0; i < this._newsList._newsItems.length; i++){
      articles += '<li>' + this._newsList._newsItems[i].showHeadline() + '</li>';
    }
    return articles + '</ul>';
  };

  exports.ViewList = ViewList;
})(this);
