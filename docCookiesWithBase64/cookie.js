//取Cookie的值  
function getCookie(name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) return getCookieVal(j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}
//写入到Cookie  
//name:cookie名称  value:cookie值   
function setCookie(name, value, day) {
	var Days = day;
	var exp = new Date();
	exp.setTime(exp.getTime() + 86400000 * Days); //过期时间 
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookieVal(offset) {
	var endstr = document.cookie.indexOf(";", offset);
	if (endstr == -1) endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

const cookie = {
	getCookie: getCookie,
	setCookie: setCookie,
	getCookieVal: getCookieVal,
};

export default cookie;
