(function(exports) {

  function NewsItem(text) {
    this._headline = text;
  }

  NewsItem.prototype.showText = function() {
    return this._headline;
  };
  exports.NewsItem = NewsItem;
})(this);
