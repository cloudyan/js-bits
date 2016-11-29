

// 过去几年像 Underscore 和 lodash 等库进入许多JavaScript程序员的工具函数中。虽然这些工具库可以使你的代码写起来更容易，但是他们不一定使代码更简单或更容易理解。

//     各种工具函数库层出不穷，每个工具库的写法也各有不同，这样给阅读和维护你代码的人也带来了一定的困难，以为他必须了解你使用的这个这个工具库的函数做了什么事情。

//    JavaScript不断发展，新ES2015和ES2016版本（以前分别称为ES6和ES7）包了一堆新功能特性，并很容易使用它们。这些特性使得工具库以前的一些基本功能已经过时。


// 所以你可能不再需要Underscore。

//     http://www.css88.com/archives/5710#more-5710


//    Arrays（数组）
//

// Iterate（迭代）
//
// Underscore
// js 代码:
//    _.each(array, iteratee)
// ES5.1
// js 代码:
//    array.forEach(iteratee)

// Map
//
// Underscore
// js 代码:
//    _.map(array, iteratee)
// ES5.1
// js 代码:
//    array.map(iteratee)
//

// Find（查找）
//
// Underscore
// js 代码:
//    _.find(array, predicate)
// ES2015
// js 代码:
//    array.find(predicate)

// Get a property from each element in an array（萃取数组对象中某属性值）
//
// Underscore（注：pluck也许是map最常使用的用例模型的简化版本，即萃取数组对象中某属性值，返回一个数组。）
// js 代码:
//    _.pluck(array, propertyName)
// ES2015
// js 代码:
//    array.map(value => value[propertyName])

// Check if array includes an element（检查数组中是否包含某个元素）
//
// Underscore
// js 代码:
//    _.contains(array, element)
// ES2016
// js 代码:
//    array.includes(element)

// Convert an array-like object to array（把一个类数组转换成一个数组）
//
// Underscore
// js 代码:
//    _.toArray(arguments)
// ES2015
// js 代码:
//    Array.from(arguments)

// Create a copy of an array with all falsy values removed.（返回一个除去所有false值的 array副本）
//
// Underscore
// js 代码:
//    _.compact(array)
// ES2015
// js 代码:
//    array.filter(x => !!x)

// Create a copy of an array with duplicates removed（返回 array去重后的副本）
//
// Underscore
// js 代码:
//    _.uniq(array)
// ES2015
// js 代码:
//    [...new Set(array)]

// Find the index of a value in an array（查找某个值在 array 中的索引值）
//
// Underscore
// js 代码:
//    _.indexOf(array, value)
// ES5.1
// js 代码:
//    array.indexOf(value)

// Create an array with n numbers, starting from x（创建一个 N个数字数组，从x开始）
//
// Underscore
// js 代码:
//    _.range(x, x + n)
// ES2015
// js 代码:
//    Array.from({ length: n }, (v, k) => k + x)
// Objects（对象）
//

// Names of own enumerable properties（枚举自身的属性名）
//
// Underscore
// js 代码:
//    _.keys(object)
// ES5.1
// js 代码:
//    Object.keys(object)

// Names of all enumerable properties（枚举所有的属性名，包括继承过来的）
//
// Underscore
// js 代码:
//    _.allKeys(object)
// ES2015
// js 代码:
//    Reflect.enumerate(object)  // 返回一个迭代器

// Values（值）
//
// Underscore
// js 代码:
//    _.values(object)
// ES5.1
// js 代码:
//    Object.keys(object).map(key => object[key])

// Create a new object with the given prototype（创建具有给定原型的新对象）
//
// Underscore
// js 代码:
//    _.create(proto, propertiesObject)
// ES5.1
// js 代码:
//    Object.create(proto, propertiesObject)

// Create a new object from merged properties（创建一个合并属性后的新对象）
//
// Underscore
// js 代码:
//    _.extend({}, source, { a: false })
// ES2016
// js 代码:
//    { ...source, a: false }

// Create a shallow clone of an object（创建一个浅拷贝对象）
//
// Underscore
// js 代码:
//    _.clone(object)
// ES2016
// js 代码:
//    { ...object }

// Check if an object is an array（检查一个对象是否是一个数组）
//
// Underscore
// js 代码:
//    _.isArray(object)
// ES5.1
// js 代码:
//    Array.isArray(object)

// Check if an object is a finite Number（检查一个对象是否是一个有限的数字）
//
// Underscore
// js 代码:
//    _.isFinite(object)
// ES2015
// js 代码:
//    Number.isFinite(object)
// Functions（函数）
//

// Bind a function to an object（给对象绑定一个函数）
//
// Underscore
// js 代码:
// foo(function () {
//   this.bar();
// }.bind(this));
// foo(_.bind(object.fun, object));
//
// ES2015
// js 代码:
// foo(() => {
//   this.bar();
// });
//
// foo(object.fun.bind(object));
// ES2016
// js 代码:
// foo(() => {
//   this.bar();
// });
//
// foo(::object.fun);
// Utility（使用功能）
//

// Identity function（迭代行数）
//
// Underscore
// js 代码:
//    _.identity
// ES2015
// js 代码:
//    value => value

// A function that returns a value（返回值的函数）
//
// Underscore
// js 代码:
//    const fun = _.constant(value);
// ES2015
// js 代码:
//    const fun = () => value;

// The empty function（空函数）
//
// Underscore
// js 代码:
//    _.noop()
// ES2015
// js 代码:
//    () => {}
