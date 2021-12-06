/**
 *
 * Link - Anchor Scroll
 *
 * @author Takuto Yanagida
 * @version 2021-12-06
 *
 */


'use strict';

window['NACSS'] = window['NACSS'] || {};


(function (NS) {

	{
		// @include _anchor.js
		NS.linkAnchorScroll = initialize;

		// Export the function
		NS.smoothScrollToElement = smoothScrollToElement;
	}

	// @include _style-class.js
	// @include _common.js

})(window['NACSS']);
