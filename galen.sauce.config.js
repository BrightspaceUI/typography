/* global SauceBrowserFactory, load */

load('galen.common.config.js');

this.browsers = {
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
	ie10Windows: new SauceBrowserFactory({
		browser: 'internet explorer',
		version: '10',
		platform: 'WIN8'
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
