// 原型式继承（工厂模式）

/**
 * 基于已有对象创建新对象实例
 * 将临时构造函数原型指向传入对象o，
 * 通过构造函数new一个新的实例，这个实例原型为传入对象o
 * @param  {[Object]} o [构造函数原型]
 * @return {[Object]}   [返回新实例]
 */
function _Object(o) {
	function F() {};
	F.prototype = o;
	return new F();
}

var parent = {
	name: 'papa',
	colors: ['red', 'green']
}
var child1 = _Object(parent);
child1.name = 'jack';
console.log(child1);
// F {name: "jack"}
child1.colors.push('blue');
console.log(child1.colors) 
// ["red", "green", "blue"]
var child2 = _Object(parent);
console.log(child2.name);
// papa
console.log(child2.colors);
// ["red", "green", "blue"]


/**
 * 寄生式模式
 * 原型式+工厂模式，封装构建过程
 */

function create(o) {
	// f指向新实例，引用类型
	var f = _Object(o);
	// 封装构造过程
	f.run = function () {
		return this.colors;
	}
	return f;
}




/**
 * 寄生组合式继承（Final）
 */

function _Object(o) {
	function F() {};
	F.prototype = o;
	return new F();
}
function inheritPrototype(parent, child) {
	// 创建对象
	var f = _Object(parent.prototype);
	// 增强对象
	f.constructor = child;
	child.prototype = f;
}
function Parent(name) {
	this.name = name;
	this.colors = ['red', 'green'];
}
Parent.prototype.run = function () {
	return this.name;
}
function Child(name, age) {
	Parent.call(this, name);
	this.age = age;
}
inheritPrototype(Parent, Child);

var child1 = new Child('hehe', 10);
var child2 = new Child('zeze', 21);