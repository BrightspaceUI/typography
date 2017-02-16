/* eslint no-invalid-this: 0 */
'use strict';

var browsers = {
	phantomjs: new LocalBrowserFactory({
		browser: 'phantomjs'
	}),
	chromeWindows: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'WIN10'
	}),
	firefoxWindows: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'WIN10'
	}),
	ie11Windows: new SauceBrowserFactory({
		browser: 'internet explorer',
		version: '11',
		platform: 'WIN10'
	}),
	edgeWindows: new SauceBrowserFactory({
		browser: 'microsoftedge',
		platform: 'WIN10'
	}),
	chromeMac: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'EL_CAPITAN'
	}),
	safariMac: new SauceBrowserFactory({
		browser: 'Safari',
		platform: 'EL_CAPITAN'
	}),
	firefoxMac: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'EL_CAPITAN'
	})
};

var endpoint = 'http://localhost:8080/components/d2l-typography/test/acceptance/typography.html';
var spec = 'test/acceptance/typography.gspec';

polymerTests(browsers, function(test) {
	test('typography-mobile', {
		endpoint: endpoint,
		spec: spec,
		size: '420x600',
		tags: ['mobile']
	});

	test('typography-desktop', {
		endpoint: endpoint,
		spec: spec,
		size: '1024x768',
		tags: ['desktop']
	});
});