import '@brightspace-ui/core/components/colors/colors.js';
import '@polymer/polymer/polymer-legacy.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<custom-style>
	<style is="custom-style">
		html {

			--d2l-body-standard-text: {
				font-size: 0.95rem;
				font-weight: 400;
				line-height: 1.4rem;
			};

			--d2l-body-compact-text: {
				font-size: 0.8rem;
				font-weight: 400;
				line-height: 1.2rem;
			};

			--d2l-body-small-text: {
				color: var(--d2l-color-tungsten);
				font-size: 0.7rem;
				font-weight: 400;
				line-height: 1rem;
				margin: auto;
			};

			--d2l-heading-1: {
				font-size: 2rem;
				font-weight: 400;
				line-height: 2.4rem;
				margin: 1.5rem 0 1.5rem 0;
			};

			--d2l-heading-2: {
				font-size: 1.5rem;
				font-weight: 400;
				line-height: 1.8rem;
				margin: 1.5rem 0 1.5rem 0;
			};

			--d2l-heading-3: {
				font-size: 1rem;
				font-weight: 700;
				line-height: 1.5rem;
				margin: 1.5rem 0 1.5rem 0;
			};

			--d2l-heading-4: {
				font-size: 0.8rem;
				font-weight: 700;
				line-height: 1.2rem;
				margin: 1.5rem 0 1.5rem 0;
			};

			--d2l-label-text: {
				font-size: 0.7rem;
				line-height: 1rem;
				font-weight: 700;
				letter-spacing: 0.2px;
			};
		}
	</style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);
