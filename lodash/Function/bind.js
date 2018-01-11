Function.prototype.bind = function(oThis) {
    var args = Array.prototype.slice.call(arguments, 1);
    var fToBind = this;
    var F = function() {};
    var fBound = function() {
        return ftoBind.apply(this instanceof F ? this : oThis || this,
            args.concat(Array.prototype.slice.call(arguments)));
    }
    F.prototype = fToBind.prototype;
    fBound.prototype = new F();
    return fBound;
}