/**
 *
 * Link Style - Type (JS)
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

	// @include _style-class.js
	// @include _common.js

})(window['NACSS']);
