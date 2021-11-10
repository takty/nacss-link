/**
 *
 * Link Style - Anchor (JS)
 *
 * @author Takuto Yanagida
 * @version 2021-11-10
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

	// @include _utility.js
	// @include _common.js

})(window['NACSS']);
