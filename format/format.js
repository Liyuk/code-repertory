/**
 * 时间格式化工具
 * @param {[type]} fmt [description]
 */
Date.prototype.Format = function(fmt) { // author: meizz
	var o = {
		'M+': this.getMonth() + 1, // 月份
		'd+': this.getDate(), // 日
		'h+': this.getHours(), // 小时
		'm+': this.getMinutes(), // 分
		's+': this.getSeconds(), // 秒
		'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
		'S': this.getMilliseconds() // 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp('(' + k + ')').test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
	return fmt;
};

/**
 * [formatDate description]
 * @param  {[type]} timestamp [description]
 * @param  {[type]} timestyle [description]
 * @return {[type]}           [description]
 */
function formatDate(timestamp,timestyle){
    var date = new Date(timestamp),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        seconds = date.getSeconds(),
        timearr = timestyle.match(/[YMDhms]/g);
    month = (month<10) ? ('0' + month) : month;
    day = (day<10) ? ('0' + day) : day;
    hour = (hour<10) ? ('0' + hour) : hour;
    minute = (minute<10) ? ('0' + minute) : minute;
    seconds = (seconds<10) ? ('0' + seconds) : seconds;
    for(var i=0;i<timearr.length;i++){
        switch(timearr[i]){
            case 'Y': timestyle = timestyle.replace(/Y/,year);break;
            case 'M': timestyle = timestyle.replace(/M/,month);break;
            case 'D': timestyle = timestyle.replace(/D/,day);break;
            case 'h': timestyle = timestyle.replace(/h/,hour);break;
            case 'm': timestyle = timestyle.replace(/m/,minute);break;
            case 's': timestyle = timestyle.replace(/s/,seconds);break;
        }
    }
    return timestyle;
}
formatDate(123321321321321,'Y-M-D h:m:s')