// docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
// docCookies.getItem(name)
// docCookies.removeItem(name[, path], domain)
// docCookies.hasItem(name)
// docCookies.keys()
import Base64 from './base64';

const base64 = new Base64();
const docCookies = {
	getItem: function(sKey) {
		return decodeURIComponent(base64.decode(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1'))) || null;
	},
	setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
		if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
			return false;
		}
		let sExpires = '';
		if (vEnd) {
			switch (vEnd.constructor) {
				case Number:
					sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
					break;
				case String:
					sExpires = '; expires=' + vEnd;
					break;
				case Date:
					sExpires = '; expires=' + vEnd.toUTCString();
					break;
			}
		}
		document.cookie = encodeURIComponent(sKey) + '=' + base64.encode(encodeURIComponent(sValue)) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
		return true;
	},
	removeItem: function(sKey, sPath, sDomain) {
		if (!sKey || !this.hasItem(sKey)) {
			return false;
		}
		document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
		return true;
	},
	hasItem: function(sKey) {
		return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
	},
	keys: /* optional method: you can safely remove it! */ function() {
		const aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
		for (let nIdx = 0; nIdx < aKeys.length; nIdx++) {
			aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
		}
		return aKeys;
	}
};

module.exports = docCookies;