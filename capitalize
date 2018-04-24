var _make_autocap = function(s, n) {
    var m = 0;
    var x = s.split(" ").map(function(q, i) {
        var t = ["eBay", "iPad", "iPod", "iPhone", "iMac", "iMovie", "iTunes", "iCloud", "iOS", "BuzzFeed", "YouTube"].grep(RegExp("^" + RegExp.escape(q) + "$", "i"));
        if (t && t.length > 0) {
            return t
        }
        if (q.length > 1 && q.charAt(1).match(/[A-Z]/)) {
            return q
        }
        var t = q.match(/^(mc|o\'|\"|\')(.+)$/i);
        if (t && t.length) {
            q = ucfirst(t[1]) + ucfirst(t[2])
        }
        if (q.match(/\-/)) {
            q = q.split("-").map(_make_autocap).join("-")
        }
        return ucfirst(q)
    }).join(" ");
    return x
};
var ucfirst = function(s) {
    return s.charAt(0).toUpperCase() + s.substr(1)
};
