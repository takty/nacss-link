/**
 *
 * Link Style (JS)
 *
 * @author Takuto Yanagida
 * @version 2021-11-11
 *
 */


window['NACSS'] = window['NACSS'] || {};


(function (NS) {

	(function () {
		// @include _type.js
		NS.linkApply      = apply;
		NS.linkApplyByUrl = applyByUrl;

		// Export the function
		NS.linkIsLinkImage = isLinkImage;
	})();

	(function () {
		// @include _anchor.js
		NS.linkAnchorScroll = initialize;

		// Export the function
		NS.smoothScrollToElement = smoothScrollToElement;
	})();

	// @include _style-class.js
	// @include _common.js

})(window['NACSS']);
