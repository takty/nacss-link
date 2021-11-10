/**
 *
 * Link Type (JS)
 *
 * @author Takuto Yanagida
 * @version 2021-11-10
 *
 */


function apply(as, opts = {}) {
	opts = Object.assign({
		styleLinkImage   : ':ncLinkImage',
		styleLinkSimple  : ':ncLinkSimple',
		styleLinkAnchor  : ':ncLinkAnchor',
		styleLinkExternal: ':ncLinkExternal',
		styleLinkFile    : ':ncLinkFile',
		allowedClasses   : ALLOWED_CLASSES,
		extensionTable   : EXT_TABLE,
		isUrlExternal    : isUrlExternal,
	}, opts);

	for (const a of as) {
		addClass(a, a.getAttribute('href'), opts);
	}
}

function applyByUrl(as, opts = {}) {
	opts = Object.assign({
		styleLinkAnchor  : ':ncLinkAnchor',
		styleLinkExternal: ':ncLinkExternal',
		styleLinkFile    : ':ncLinkFile',
		extensionTable   : EXT_TABLE,
		isUrlExternal    : isUrlExternal,
	}, opts);

	for (const a of as) {
		addClassByUrl(a, a.getAttribute('href'), opts);
	}
}

const ALLOWED_CLASSES = [
	'alignleft',
	'aligncenter',
	'alignright',
	'size-thumbnail',
	'size-small',
	'size-medium-small',
	'size-medium',
	'size-medium-large',
	'size-medium_large',
	'size-large',
	'size-full'
];

const EXT_TABLE = {
	doc : 'doc',
	docx: 'doc',
	xls : 'xls',
	xlsx: 'xls',
	ppt : 'ppt',
	pptx: 'ppt',
	pdf : 'pdf'
};


// -------------------------------------------------------------------------


function addClass(a, url, opts) {
	if (isLinkImage(a)) {
		setClass(a, opts.styleLinkImage);
	} else {
		if (isLinkEmpty(a)) {
			addClassByUrl(a, url, opts);
		} else if (isLinkSimple(a)) {
			setClass(a, opts.styleLinkSimple);
			if (isLinkSimpleUrl(a, url)) {
				setClass(a, opts.styleLinkSimple, true, 'url');
			}
			addClassByUrl(a, url, opts);
		}
	}
}

function isLinkImage(a, opts) {
	if (a.className) {
		for (const c of a.className.split(' ')) {
			if (!opts.allowedClasses.includes(c)) return false;
		}
	}
	let ok = false;
	for (const c of a.childNodes) {
		if (c.nodeType === 1) {  // ELEMENT_NODE
			if (!ok && c.tagName === 'IMG') {
				ok = true;
			} else {
				ok = false;
				break;
			}
		}
	}
	return ok;
}

function isLinkSimple(a) {
	if (a.className) return false;
	const cs = a.childNodes;
	if (cs.length === 0) return false;
	for (const c of cs) {
		if (c.className) return false;
		if (c.nodeType === 1) {  // ELEMENT_NODE
			if (c.tagName !== 'BR' && !getComputedStyle(c).display.includes('inline')) {
				return false;
			}
		}
	}
	return true;
}

function isLinkEmpty(a) {
	return !a.className && a.childNodes.length === 0;
}

function isLinkSimpleUrl(a, url) {
	return url !== null && url !== '' && a.childNodes.length && a.innerHTML.trim() === url;
}


// -------------------------------------------------------------------------


function addClassByUrl(a, url, opts) {
	const outIsUp = [false];
	if (isUrlAnchor(url, a, outIsUp)) {
		setClass(a, opts.styleLinkAnchor, true, outIsUp[0] ? 'up' : '');
	} else if (opts.isUrlExternal(url)) {
		setClass(a, opts.styleLinkExternal);
	}
	const t = getFileType(url, opts.extensionTable);
	if (t) {
		setClass(a, opts.styleLinkFile);
		setClass(a, opts.styleLinkFile, true, t);
	}
}

function isUrlExternal(url) {
	if (url !== null && url !== '') {
		if (!url.startsWith(`${location.protocol}//${location.host}`)) {
			if (url.match(/^https?:\/\//) || url.match(/^\/\//)) {
				return true;
			}
		}
	}
	return false;
}

function getFileType(url, extTab) {
	if (url !== null && url !== '' && !url.endsWith('/')) {
		const d = url.indexOf('//');
		if (d !== -1) {
			const s = url.indexOf('/', d + 2);
			url = (s === -1) ? '' : url.substring(s + 1);
		}
		const p = url.lastIndexOf('.');
		if (p !== -1) {
			const ext = url.substring(p + 1);
			return extTab[ext];
		}
	}
	return null;
}
