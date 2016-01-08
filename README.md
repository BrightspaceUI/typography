# vui-typography
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains Sass mixins and CSS that can be used to produce basic typography styles.

## Installation

Install from NPM:
```shell
npm install vui-typography
```

Install from Bower:
```shell
bower install vui-typography
```

## Usage

**Import the mixins:**

```scss
@import 'bower_components/vui-typography/typography.scss'; // or...

@import "node_modules/vui-typography/typography.scss";
```

**Body:**

The `vui-typography` mixin can be used to setup the base font properties, typically applied to the `body` element.

```scss
body {
	@include vui-typography;
}
```

**Headings:** 

```scss
.app {

	h1 {
		@include vui-typography-heading1;
	}

	h2 {
		@include vui-typography-heading2;
	}

	h3 {
		@include vui-typography-heading3;
	}

	h4 {
		@include vui-typography-heading4;
	}

}
```

**Help Text:**

```scss
.app {

	.help {
		@include vui-typography-help-text;
	}

}
```

**Other:** 

```scss
.app {

	.text1 {
		@include vui-typography-small-text;
	}

	.text2 {
		@include vui-typography-small-strong-text;
	}

}
```

For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

#### Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-typography
[bower-image]: https://img.shields.io/bower/v/vui-typography.svg
[npm-url]: https://www.npmjs.org/package/vui-typography
[npm-image]: https://img.shields.io/npm/v/vui-typography.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-typography
[ci-image]: https://img.shields.io/travis-ci/Brightspace/valence-ui-typography.svg
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-typography
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-typography.svg
