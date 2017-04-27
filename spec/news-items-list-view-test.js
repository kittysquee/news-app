function testHeadlineView() {
  var headlines = ["Jess", "Elaine"];
  var headlineView = new HeadlineView(headlines);
  assert.isTrue(headlineView.viewHeadlines() === '<ul><li><div>Jess</div></li><li><div>Elaine</div></li></ul>');
}
testHeadlineView();
