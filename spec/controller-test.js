function testHeadlineList() {

  var newsController = new NewsController();
  newsController.listHeadlines();
  assert.isTrue(document.getElementById('app').innerHTML === '<ul><li>Headline</li></ul>')
};

testHeadlineList();