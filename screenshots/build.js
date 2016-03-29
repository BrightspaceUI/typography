var page = require('webpage').create();
page.viewportSize = {width: 750, height: 1000};

function capture(name, width) {

	var clipRect = page.evaluate(function(n) {
		var thing = document.querySelector('.screenshot-' + n);
		thing.style.display = 'inline-block';
		return thing.getBoundingClientRect();
		//return document.querySelector('.screenshot-' + n)
		//	.getBoundingClientRect();
	}, name);

	page.clipRect = {
		top:    clipRect.top,
		left:   clipRect.left,
		width:  width || clipRect.width,
		height: clipRect.height
	};

	page.render('./screenshots/' + name + '.png');

}

page.open('./test/perceptual/typography.html', function() {
	capture('paragraph');
	capture('headings', 1200);
	capture('small', 200);
	capture('small-strong', 200);
	phantom.exit();
});
