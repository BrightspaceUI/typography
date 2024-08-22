import '@brightspace-ui/core/components/colors/colors.js';
import '@polymer/polymer/polymer-legacy.js';
import './d2l-typography-shared-styles.js';
import { fontFacesCss } from '@brightspace-ui/core/components/typography/styles.js';

const $_fontFaces = document.createElement('style');
$_fontFaces.id = 'd2l-typography-font-face';
$_fontFaces.innerHTML = fontFacesCss;
document.head.appendChild($_fontFaces);

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-typography">
	<template>
		<style>
			.d2l-typography,
			.vui-typography {
				color: var(--d2l-color-ferrite);
				display: block;
				font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
				letter-spacing: 0.01rem;
				font-size: 0.95rem;
				font-weight: 400;
				line-height: 1.4rem;
				@apply --d2l-font-custom;
			}

			.d2l-typography .d2l-body-standard {
				@apply --d2l-body-standard-text;
			}

			.d2l-typography .d2l-body-compact {
				@apply --d2l-body-compact-text;
			}

			.d2l-typography .d2l-body-small {
				@apply --d2l-body-small-text;
			}

			.d2l-typography .d2l-label-text {
				@apply --d2l-label-text;
			}

			.d2l-typography p,
			.vui-typography p {
				margin: 1rem 0;
				@apply --d2l-font-paragraph-custom;
			}

			.d2l-typography:lang(ar),
			.d2l-typography :lang(ar),
			.vui-typography:lang(ar),
			.vui-typography :lang(ar) {
				font-family: 'Arabic Transparent', 'Arabic Typesetting', 'Geeza Pro', sans-serif;
			}

			.d2l-typography:lang(zh),
			.d2l-typography :lang(zh),
			.vui-typography:lang(zh),
			.vui-typography :lang(zh) {
				font-family: 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif;
			}

			.d2l-typography:lang(ko),
			.d2l-typography :lang(ko),
			.vui-typography:lang(ko),
			.vui-typography :lang(ko) {
				font-family: 'Apple SD Gothic Neo', Dotum, sans-serif;
			}

			.d2l-typography:lang(ja),
			.d2l-typography :lang(ja),
			.vui-typography:lang(ja),
			.vui-typography :lang(ja) {
				font-family: 'Hiragino Kaku Gothic Pro', 'Meiyro', sans-serif;
			}

			.vui-typography .vui-heading-1,
			.d2l-typography .d2l-heading-1 {
				@apply --d2l-heading-1;
				@apply --d2l-heading-1-custom;
			}

			.vui-typography .vui-heading-2,
			.d2l-typography .d2l-heading-2 {
				@apply --d2l-heading-2;
				@apply --d2l-heading-2-custom;
			}

			.vui-typography .vui-heading-3,
			.d2l-typography .d2l-heading-3 {
				@apply --d2l-heading-3;
				@apply --d2l-heading-3-custom;
			}

			.vui-typography .vui-heading-4,
			.d2l-typography .d2l-heading-4 {
				@apply --d2l-heading-4;
				@apply --d2l-heading-4-custom;
			}

			@media (max-width: 615px) {
				.d2l-typography .d2l-heading-1,
				.d2l-typography .vui-heading-1 {
					font-size: 1.5rem;
					font-weight: 400;
					line-height: 1.8rem;
				}
				.d2l-typography .d2l-heading-2,
				.d2l-typography .vui-heading-2 {
					font-size: 1rem;
					font-weight: 700;
					line-height: 1.5rem;
				}
				.d2l-typography .d2l-heading-3,
				.d2l-typography .vui-heading-3,
				.d2l-typography .d2l-heading-4,
				.d2l-typography .vui-heading-4 {
					font-size: 0.8rem;
					font-weight: 700;
					line-height: 1.2rem;
				}
				.d2l-typography .d2l-body-standard {
					font-size: 0.8rem;
					line-height: 1.2rem;
				}
				.d2l-typography .d2l-body-compact {
					font-size: 0.8rem;
					line-height: 1.2rem;
				}
				.d2l-typography .d2l-body-small {
					font-size: 0.6rem;
					line-height: 0.9rem;
				}
			}

		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
