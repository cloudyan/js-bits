
/**
 * window.onload 方法只能执行一次
 * 可以扩展执行很多次
 * 1 修改扩展 onload 方法，支持多次执行
 * 2 通过监听 onload 事件，支持多次执行
**/



/**
 * 方法一
**/

// 实现 1
function onloadCallback(){
  //Todo
}
if (window.onload) {
  var onload_random = 'onload'+Math.random();
  window[onload_random] = window.onload;
  window.onload = function (){
    window[onload_random]();
    onloadCallback();
  };
}
else {
  window.onload = function (){
    onloadCallback();
  };
}

// 实现 2
function addLoadEvent(func){
  var oldonload = window.onload;
  if(typeof window.onload!='function'){
    window.onload=func;
  }else{
    window.onload=function(){
      oldonload();
      func();
    };
  }
}
// 调用addLoadEvent
addLoadEvent(firstFunction);
addLoadEvent(secondFunction);
function firstFunction(){ alert(1); }
function secondFunction(){ alert(2); }

/**
 * 方法二
 * 使用attachEvent 注册事件 后注册的事件 先执行 （attachEvent 只能在 IE 下用）
 * window.attachEvent("onload",function(){alert('a')});
 * window.attachEvent("onload",function(){alert('b')});
 * window.addEventListener('load', 函数1, false);
**/
