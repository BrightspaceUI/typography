**Looking for SASS-based `vui-typography`?** It's [over here](https://github.com/Brightspace/valence-ui-typography/tree/sass).

# vui-typography
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A Valence UI, [Polymer](https://www.polymer-project.org/1.0/)-based web component for typography styles.

For further information on this and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`vui-typography` can be installed from [Bower][bower-url]:
```shell
bower install vui-typography
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), import `typography.html`, and include the `vui-typography` style:

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../vui-typography/typography.html">
	<style is="custom-style" include="vui-typography"></style>
</head>
```

### Body

The `vui-typography` class can be used to set base font properties, typically applied to the `<body>` element.

```html
<body class="vui-typography">
	...
</body>
```

The default font family, color and line/character spacing will look like this:

![screenshot of paragraph text](/screenshots/paragraph.png?raw=true)

### Headings

There are four separate classes for the available heading styles. These would typically be applied to the `<h1>`, `<h2>`, `<h3>` and `<h4>` HTML elements, though it's not a requirement.

```html
<h1 class="vui-heading-1">...</h1>
<h2 class="vui-heading-2">...</h2>
<h3 class="vui-heading-3">...</h3>
<h4 class="vui-heading-4">...</h4>
```

![screenshot of headings](/screenshots/headings.png?raw=true)

### Help Text

The custom `vui-help-text` element can be used to apply styling to help text.

```html
<vui-help-text>...</vui-help-text>
```

### Usage in Production

In production, it's recommended to use a build tool like [Vulcanize](https://github.com/Polymer/vulcanize) to combine all your web components into a single import file. [More from the Polymer Docs: Optimize for Production](https://www.polymer-project.org/1.0/tools/optimize-for-production.html)...

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-typography
[bower-image]: https://img.shields.io/bower/v/vui-typography.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-typography
[ci-image]: https://img.shields.io/travis-ci/Brightspace/valence-ui-typography.svg
