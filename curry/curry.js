// add(1)(2)(3)(4)

// method 1
function add(num) {
    var sum = 0;
    sum += num;
    var tempFun = function(nnum) {
        if (arguments.length === 0) {
            return sum;
        } else {
            sum += nnum;
            return tempFun;
        }
    }
    tempFun.valueOf = function() {
        return sum;
    }
    tempFun.toString = function() {
        return sum + '';
    }
    return tempFun;
}

// method 2
function add(num) {
    var args = [];

    function addNum() {
        if (arguments.length === 0) {
            return calulate;
        } else {
            Array.prototype.push.apply(args, Array.prototype.splice.call(arguments, 0));
            return add;
        }
    }

    function calulate() {
        var result = args.reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        }, 0);
        args = [];
        return result;
    }

    addNum.valueOf = function() {
        return calulate();
    }
    addNum.toString = function() {
        return calulate() + '';
    }
    return addNum;
}


// add(args) = sum(1, 2, 3, 4)
// 闭包
function add(args) {
    return sum.apply(this, args);
}