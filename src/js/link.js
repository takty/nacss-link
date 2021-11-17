/**
 *
 * Link
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

		NS.linkIsLinkImage = isLinkImage;
	})();

	(function () {
		// @include _anchor.js
		NS.linkAnchorScroll = initialize;

		NS.smoothScrollToElement = smoothScrollToElement;
	})();

	// @include _style-class.js
	// @include _common.js

})(window['NACSS']);
