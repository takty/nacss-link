/**
 *
 * Link - Anchor Scroll
 *
 * @author Takuto Yanagida
 * @version 2021-12-07
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

	// @include _common.js
	// @include _style-class.js

})(window['NACSS']);
