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
		platform: 'SIERRA',
		/* fails sometimes on resize without initial size being set. See:
			https://bugs.chromium.org/p/chromedriver/issues/detail?id=2173 */
		size: '1900x1200',
		desiredCapabilities: {
			screenResolution: '2360x1770'
		}
	}),
	safariMac: new SauceBrowserFactory({
		browser: 'Safari',
		platform: 'SIERRA'
	}),
	firefoxMac: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'SIERRA'
	})
};

var endpoint = 'http://localhost:8000/components/d2l-typography/test/acceptance/typography.html';
var endpointMixins = 'http://localhost:8000/components/d2l-typography/test/acceptance/typography-mixins.html';
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

	test('typography-mixins-mobile', {
		endpoint: endpointMixins,
		spec: spec,
		size: '420x600',
		tags: ['mobile']
	});

	test('typography-mixins-desktop', {
		endpoint: endpointMixins,
		spec: spec,
		size: '1024x768',
		tags: ['desktop']
	});
});
