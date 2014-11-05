( function() {
	'use strict';

	describe( 'vui', function() {

		var node, heading;

		beforeEach( function () {
			jasmine.addMatchers( vui.jasmine.dom.matchers );

			node = document.body.appendChild( document.createElement( 'div' ) );
			node.className = 'vui-typography';
		} );

		afterEach( function() {
			document.body.removeChild( node );
		} );

		describe( 'typography', function() {

			it( 'defines a "vui-typography" selector', function() {
				expect( document ).toHaveCssSelector( '.vui-typography' );
			} );

			it( 'applies the font color', function() {
				expect( node ).toHaveColor( 'rgb(53, 53, 53)' );
			} );

			it( 'applies the font family', function() {
				expect( node ).toHaveFontFamily( 'Arial' );
			} );

			it( 'applies the font size', function() {
				expect( node ).toHaveFontSize( '13px' );
			} );

			it( 'applies the line height', function() {
				expect( node ).toHaveLineHeight( '20px' );
			} );

		} );

		describe( 'heading-1', function() {

			beforeEach( function () {
				heading = node.appendChild( document.createElement( 'h1' ) );
				heading.className = 'vui-heading-1';
			} );

			it( 'defines a ".vui-heading-1" selector', function() {
				expect( document ).toHaveCssSelector( '.vui-heading-1' );
			} );

			it( 'applies the color', function() {
				expect( heading ).toHaveColor( 'rgb(102, 102, 102)' );
			} );

			it( 'applies the font size', function() {
				expect( heading ).toHaveFontSize( '23px' );
			} );

		} );

		describe( 'heading-2', function() {

			beforeEach( function () {
				heading = node.appendChild( document.createElement( 'h2' ) );
				heading.className = 'vui-heading-2';
			} );

			it( 'defines a ".vui-heading-2" selector', function() {
				expect( document ).toHaveCssSelector( '.vui-heading-2' );
			} );

			it( 'applies the font size', function() {
				expect( heading ).toHaveFontSize( '19px' );
			} );

		} );

		describe( 'heading-3', function() {

			beforeEach( function () {
				heading = node.appendChild( document.createElement( 'h3' ) );
				heading.className = 'vui-heading-3';
			} );

			it( 'defines a ".vui-heading-3" selector', function() {
				expect( document ).toHaveCssSelector( '.vui-heading-3' );
			} );

			it( 'applies the font size', function() {
				expect( heading ).toHaveFontSize( '17px' );
			} );

		} );

		describe( 'heading-4', function() {

			beforeEach( function () {
				heading = node.appendChild( document.createElement( 'h4' ) );
				heading.className = 'vui-heading-4';
			} );

			it( 'defines a ".vui-heading-4" selector', function() {
				expect( document ).toHaveCssSelector( '.vui-heading-4' );
			} );

			it( 'applies the font size', function() {
				expect( heading ).toHaveFontSize( '15px' );
			} );

		} );

		describe( 'emphasis', function() {

			var emphasis;

			beforeEach( function () {
				emphasis = node.appendChild( document.createElement( 'p' ) );
				emphasis.className = 'vui-emphasis';
			} );

			it( 'defines a ".vui-emphasis" selector', function() {
				expect( document ).toHaveCssSelector( '.vui-emphasis' );
			} );

			it( 'applies the font size', function() {
				expect( emphasis ).toHaveFontSize( '13px' );
			} );

		} );

		describe( 'help', function() {

			var help;

			beforeEach( function () {
				help = node.appendChild( document.createElement( 'p' ) );
				help.className = 'vui-help';
			} );

			it( 'defines a ".vui-help" selector', function() {
				expect( document ).toHaveCssSelector( '.vui-help' );
			} );

			it( 'applies the font size', function() {
				expect( help ).toHaveFontSize( '11px' );
			} );

		} );

	} );

} )();
