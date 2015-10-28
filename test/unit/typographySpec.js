( function() {
	'use strict';

	describe( 'vui', function() {

		var node, heading, text;

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
				expect( node ).toHaveColor( 'rgb(86, 90, 92)' );
			} );

			it( 'applies the font family', function() {
				expect( node ).toHaveFontFamily( "Lato, 'Lucida Sans Unicode', 'Lucida Grande', sans-serif" );
			} );

			it( 'applies the font size', function() {
				expect( node ).toHaveFontSize( '19px' );
			} );

			it( 'applies the font weight', function() {
				expect( node ).toHaveFontWeight( '300' );
			} );

			it( 'applies the line height', function() {
				expect( node ).toHaveLineHeight( '28px' );
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
				expect( heading ).toHaveColor( 'rgb(86, 90, 92)' );
			} );

			it( 'applies the font size', function() {
				expect( heading ).toHaveFontSize( '38px' );
			} );

			it( 'applies the font weight', function() {
				expect( heading ).toHaveFontWeight( '300' );
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
				expect( heading ).toHaveFontSize( '28px' );
			} );

			it( 'applies the font weight', function() {
				expect( heading ).toHaveFontWeight( '300' );
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
				expect( heading ).toHaveFontSize( '19px' );
			} );

			it( 'applies the font weight', function() {
				expect( heading ).toHaveFontWeight( 'normal' );
			} );

		} );

		describe( 'small text', function() {

			beforeEach( function () {
				text = node.appendChild( document.createElement( 'div' ) );
				text.className = 'vui-typography-small-text';
			} );

			it( 'defines a ".vui-typography-small-text" selector', function() {
				expect( document ).toHaveCssSelector( '.vui-typography-small-text' );
			} );

			it( 'applies the font size', function() {
				expect( text ).toHaveFontSize( '14px' );
			} );

			it( 'applies the font weight', function() {
				expect( text ).toHaveFontWeight( 'normal' );
			} );

		} );

		describe( 'small strong text', function() {

			beforeEach( function () {
				text = node.appendChild( document.createElement( 'div' ) );
				text.className = 'vui-typography-small-strong-text';
			} );

			it( 'defines a ".vui-typography-small-strong-text" selector', function() {
				expect( document ).toHaveCssSelector( '.vui-typography-small-strong-text' );
			} );

			it( 'applies the font size', function() {
				expect( text ).toHaveFontSize( '14px' );
			} );

			it( 'applies the font weight', function() {
				expect( text ).toHaveFontWeight( 'bold' );
			} );

		} );

	} );

} )();
