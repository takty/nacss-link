/**
 *
 * Link - Anchor Scroll
 *
 * @author Takuto Yanagida
 * @version 2021-11-11
 *
 */


window['NACSS'] = window['NACSS'] || {};


(function (NS) {

	(function () {
		// @include _anchor.js
		NS.linkAnchorScroll = initialize;

		// Export the function
		NS.smoothScrollToElement = smoothScrollToElement;
	})();

	// @include _style-class.js
	// @include _common.js

})(window['NACSS']);
