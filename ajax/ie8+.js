// $.getJSON('/my/url', function(data) {
// });

var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onreadystatechange = function onreadystatechange() {
	if (this.readyState === 4) {
		if (this.status >= 200 && this.status < 400) {
			// success
			var data = JSON.parse(this.responseText);
		} else {
			// error
		}
	}
};

request.send();
request = null;

// $.ajax({
//   type: 'POST',
//   url: '/my/url',
//   data: data
// });

var request = new XMLHttpRequest();
request.open('POST', '/my/url', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);

// $.ajax({
//   type: 'GET',
//   url: '/my/url',
//   success: function(resp) {
//   },
//   error: function() {
//   }
// });

var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onreadystatechange = function onreadystatechange() {
	if (this.readyState === 4) {
		if (this.status >= 200 && this.status < 400) {
			// success
			var data = this.responseText;
		} else {
			// error
		}
	}
};

request.send();
request = null;
