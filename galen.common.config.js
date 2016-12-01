/* eslint no-invalid-this: 0 */
'use strict';

var endpoint = 'http://localhost:8080/components/d2l-typography/test/perceptual/typography.html';
var spec = 'test/font-classes.gspec';

polymerTests(this.browsers, function(test) {
	test('typography-mobile', {
		endpoint: endpoint,
		spec: spec,
		size: '320x600',
		tags: ['mobile']
	});

	test('typography-desktop', {
		endpoint: endpoint,
		spec: spec,
		size: '1024x768',
		tags: ['desktop']
	});
});
