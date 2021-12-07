/**
 *
 * Link - Type
 *
 * @author Takuto Yanagida
 * @version 2021-12-07
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

	// @include _common.js
	// @include _style-class.js

})(window['NACSS']);
