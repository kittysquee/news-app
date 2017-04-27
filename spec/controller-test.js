function testHeadlineList() {
  var headline = "lovely cats";
  HeadlineView.prototype.viewHeadlines = function() {
    return headline;
  };

  var newsController = new NewsController();

  assert.isTrue(newsController.listHeadlines() === 'lovely cats');
}

testHeadlineList();
