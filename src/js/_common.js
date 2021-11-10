/**
 *
 * Common Functions
 *
 * @author Takuto Yanagida
 * @version 2021-11-10
 *
 */


function isUrlAnchor(url, a = null, outIsUp = null) {
	if (url !== null && url !== '') {
		const p = url.indexOf('#');
		if (p !== -1) {
			const id = url.substring(p + 1);
			if (id.length) {
				const t = document.getElementById(id);
				if (t !== null) {
					if (
						p === 0 ||
						url.substring(0, p) === location.href.replace(location.hash ? location.hash : '#', '')
					) {
						if (a && outIsUp) {
							const from = a.getBoundingClientRect().top;
							const to   = t.getBoundingClientRect().top;
							if (to < from) outIsUp[0] = true;
						}
						return true;
					}
				}
			}
		}
	}
	return false;
}
