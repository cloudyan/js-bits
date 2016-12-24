
/**
 * jQuery 的 ready 事件
 *
 * 在dom文档树加载完之后执行一个函数（注意，这里面的文档树加载完不代表全部文件加载完，区别于 onload 方法）
 * 
 * ready() 函数不应与 <body onload=""> 一起使用。
**/

document.ready = function (callback) {
  // 兼容FF,Google
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function () {
      document.removeEventListener('DOMContentLoaded', arguments.callee, false);
      callback();
    }, false)
  }
   //兼容IE
  else if (document.attachEvent) {
    document.attachEvent('onreadytstatechange', function () {
      if (document.readyState == "complete") {
        document.detachEvent("onreadystatechange", arguments.callee);
        callback();
      }
    })
  }
  else if (document.lastChild == document.body) {
    callback();
  }
};

/**

验证 ready要比onload先执行

window.onload = function () {
  alert('onload');
};

document.ready(function () {
  alert('ready');
});
**/
