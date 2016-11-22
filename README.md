**Looking for SASS-based `d2l-typography`?** It's [over here](https://github.com/BrightspaceUI/typography/tree/sass).

# d2l-typography
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A set of [Polymer](https://www.polymer-project.org/1.0/)-based web components and shared styles for applying D2L typography.

For further information on this and other D2L UI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`d2l-typography` can be installed from [Bower][bower-url]:
```shell
bower install d2l-typography
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), import `d2l-typography.html`, and include the `d2l-typography` shared style:

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../d2l-typography/d2l-typography.html">
	<style is="custom-style" include="d2l-typography"></style>
</head>
```

### Body

The `d2l-typography` class can be used to set base font properties, typically applied to the `<body>` element.

```html
<body class="d2l-typography">
	...
</body>
```

The default font family, color and line/character spacing will look like this:

![screenshot of paragraph text](/screenshots/standard.png?raw=true)

#### Standard Body

The `d2l-body-standard` class can also be used to apply base font properties, but will also respond to viewport width changes.

### Compact Body

The compact body class is a smaller version of the default body class, for use in areas that prefer to be conservative with the amount of real estate used by text.

The compact style is not recommended for blocks of readable text, particularly in paragraph form. Rather, it is best employed for brief informative text or calls to action.

```html
<div class="d2l-body-compact">
	...
</div>
```

![screenshot of compact text](/screenshots/compact.png?raw=true)

### Small Body

The small body class can be used to set font properties for text that needs to be smaller than the standard body class. Unlike the compact body class, this style is appropriate for blocks of readable text.

```html
<div class="d2l-body-small">
	...
</div>
```

![screenshot of small text](/screenshots/small.png?raw=true)

### Headings

There are four separate classes for the available heading styles. These would typically be applied to the `<h1>`, `<h2>`, `<h3>` and `<h4>` HTML elements, though it's not a requirement.

```html
<h1 class="d2l-heading-1">...</h1>
<h2 class="d2l-heading-2">...</h2>
<h3 class="d2l-heading-3">...</h3>
<h4 class="d2l-heading-4">...</h4>
```

![screenshot of headings](/screenshots/headings.png?raw=true)

### Responsive Breakpoint   

The fonts for headings, standard body, and compact body will all be styled to be smaller at a responsive breakpoint, defined as when the viewport width is 615px or smaller.

### Note About Font Size

Normally within Brightspace, the user-configured base font size will automatically be present, and requires no additional work to opt-in. However, if your application exists outside of Brightspace, you should set your desired font size on the `<html>` element. The default recommended size is `20px`:

```css
html {
    font-size: 20px;
}
```

### Usage in Production

In production, it's recommended to use a build tool like [Vulcanize](https://github.com/Polymer/vulcanize) to combine all your web components into a single import file. [More from the Polymer Docs: Optimize for Production](https://www.polymer-project.org/1.0/tools/optimize-for-production.html)...

## Coding styles

See the [Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=d2l-typography
[bower-image]: https://img.shields.io/bower/v/d2l-typography.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/typography
[ci-image]: https://img.shields.io/travis-ci/BrightspaceUI/typography.svg
