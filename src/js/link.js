/**
 *
 * Link
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

		NS.linkIsLinkImage = isLinkImage;
	}

	{
		// @include _anchor.js
		NS.linkAnchorScroll = initialize;

		NS.smoothScrollToElement = smoothScrollToElement;
	}

	// @include _common.js
	// @include _style-class.js

})(window['NACSS']);
