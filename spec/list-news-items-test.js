function testListNewsItems() {

  var listNews = new ListNews();
  listNews.loadNews('hot news');
  assert.isTrue(listNews._newsItems[0].showHeadline() === 'hot news');

}

testListNewsItems();
