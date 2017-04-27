function testViewList() {
  var listNews = new ListNews();
  listNews.loadNews('The scourge of catnip on young kittens -shocking news!');
  var viewList = new ViewList(listNews);
  assert.isTrue(viewList.list() === '<ul><li>The scourge of catnip on young kittens -shocking news!</li></ul>');
}
testViewList();
