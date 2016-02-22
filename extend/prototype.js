// 定义构造函数，然后将父类实例赋值给构造函数的原型

/**
 * 原型链继承，通过原型链查找实现继承
 * 使用原型继承主要由两个问题：
 * 一、字面量重写原型会中断关系，使用引用类型的原型；
 * 二、子类型还无法给超类型传递参数。
 */
function Parent(argument) {
	this.name = 'papa';
}

function Child(argument) {
	this.age = 12;
}
// Child继承Parent，通过原型
Child.prototype = new Parent();

var child = new Child();
// child = {
// 	age: 12
// }

function Brother(argument) {
	this.weight = '60kg';
}
// Brother继承Child
Brother.prototype = new Child();

var brother = new Brother();
// brother = {
// 	weight: '60kg'
// }

// brother是Brother类，原型链是 Brother->Child->Parent->Object
// brother instanceof Child
// true
// brother instanceof Parent
// true
// brother instanceof Object 
// true
// brother instanceof Function
// false
// child instanceof Brother
// false


/**
 * 借用构造函数（类式）
 * 解决原型链继承的两个问题；
 * 无原型，无复用
 */
function Parent(age) {
	this.name = ['mike', 'jack', 'smith'];
	this.age = age;
}

function Child(age) {
	Parent.call(this, age);
}

var child = new Child(21);
// child = {
// 	name: ['mike', 'jack', 'smith'],
// 	age: 21
// }
child.name.push('bill');
// child = {
// 	name: ['mike', 'jack', 'smith', 'bill'],
// 	age: 21
// }


/**
 * 组合继承
 * 通过构造函数实现实例属性继承；
 * 通过原型链对原型属性和方法继承
 */
function Parent(age) {
	this.name = ['mike', 'jack', 'smith'];
	this.age = age;
}

Parent.prototype.run = function (argument) {
	return this.name + 'are both ' + this.age;
}

function Child(age) {
	Parent.call(this, age);
}

Child.prototype = new Parent();

var child = new Child(21);

child.run();
// mike,jack,smith are both 21

/**
 * 组合式继承中
 * 被继承的超类型调用了两次：
 * 一、创建子类时，Child.prototype = new Parent();
 * 二、生成子类实例时在子类构造函数内部调用，Parent.call(this, age);
 *
 * 结合寄生式继承，解决调用两次的问题，见extend.js
 */