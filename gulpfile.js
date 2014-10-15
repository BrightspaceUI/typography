var gulp = require( 'gulp' ),
	del = require( 'del' ),
	vui = require( 'vui-helpers' );

gulp.task( 'clean', function( cb ) {
	del([ 'typography.css' ], cb);
} );

gulp.task( 'css', function () {
	return vui.makeCss(
		'typography.css.less',
		'typography.css',
		{ lintOpts: '.csslintrc' }
	);
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css' );
} );

gulp.task( 'test', function () {
	return vui.test( {
		files: [
			'test/unit/**/*Spec.js',
			'typography.css'
		]
	} ) ;
} );
