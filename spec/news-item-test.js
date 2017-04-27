function testNewsItem() {
  var newsItem = new NewsItem("hot news");
  assert.isTrue(newsItem.showText() === "hot news");
}

testNewsItem();
