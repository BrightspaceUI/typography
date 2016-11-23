/* eslint no-invalid-this: 0 */
'use strict';

var endpoint = 'http://localhost:8080/components/d2l-typography/test/perceptual/typography.html';
var spec = 'test/font-classes.gspec';

this.specs = {
	'typography-mobile': {
		name: 'typography mobile',
		endpoint: endpoint,
		spec: spec,
		size: '320x600',
		opts: {
			tags: ['mobile']
		}
	},
	'typography-desktop': {
		name: 'typography desktop',
		endpoint: endpoint,
		spec: spec,
		size: '1024x768',
		opts: {
			tags: ['desktop']
		}
	}
};
