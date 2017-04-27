function testNewsItem() {
  var newsItem = new NewsItem("hot news");
  assert.isTrue(newsItem.showHeadline() === "hot news");
}

testNewsItem();
