/**
 *
 * Link - Type
 *
 * @author Takuto Yanagida
 * @version 2021-12-06
 *
 */


'use strict';

window['NACSS'] = window['NACSS'] || {};


(function (NS) {

	{
		// @include _type.js
		NS.linkApply      = apply;
		NS.linkApplyByUrl = applyByUrl;

		// Export the function
		NS.linkIsLinkImage = isLinkImage;
	}

	// @include _style-class.js
	// @include _common.js

})(window['NACSS']);
