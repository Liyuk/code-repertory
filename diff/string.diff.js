function getDiff(a, b) {
	var arr = [];
	var re = new RegExp("(?=.*?)[^" + a +"](?=.*?)|(?=.*?)[^" + b + "](?=.*?)", "g");
	var arr;
	while ((arr = re.exec(a + b)) != null)
	{
		console.log(arr);
		str+= arr[0];
	}
	console.log(str);
}
