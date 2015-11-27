var test = require('tape');

var sut = function(a, b) {
	return a + b;
}

test('math', function(assert) {
	assert.plan(3);

	assert.equal(sut(1, 1), 2);
	assert.equal(sut(-1, -1), -2);
	assert.equal(sut(1, -1), 0);
});