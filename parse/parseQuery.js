// 正则表达式
var parseQuery = function(query) {
    var reg = /([^=&\s]+)[=\s]*([^=&\s]*)/g;
    var obj = {};
    while (reg.exec(query)) {
        obj[RegExp.$1] = RegExp.$2;
    }
    return obj;
}

// 字符串拆分
// 没有考虑后接hash #
function parseQueryString(args) {  
    var str = args.split('?')[1];  
    var querys = str.split('&');
    return querys.reduce((result, value) => {
        var temp = value.split('=');
        result[temp[0]] = temp[1];
        return result;
    }, {});
}