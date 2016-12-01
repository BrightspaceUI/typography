/* global LocalBrowserFactory, load */

this.browsers = {
	phantomjs: new LocalBrowserFactory({
		browser: 'phantomjs'
	})
};

load('galen.common.config.js');
