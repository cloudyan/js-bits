
/**
 * 有时候我们为了跨域，要使用jsonp的方法
 * usage:
 * jsonp({
 *   url: '/abc.com/test.json',
 *   time: 5000,
 *   success: function(d){
 *     //数据处理
 *   },
 *   fail: function(){
 *     //错误处理
 *   }
 * });
 */

function jsonp(config) {
  // 需要配置url, success, time, fail四个属性
  var options = config || {};
  var callbackName = ('jsonp_' + Math.random()).replace(".", "");
  var oHead = document.getElementsByTagName('head')[0];
  var oScript = document.createElement('script');
  oHead.appendChild(oScript);

  //创建jsonp回调函数
  window[callbackName] = function(json) {
    oHead.removeChild(oScript);
    clearTimeout(oScript.timer);
    window[callbackName] = null;
    //先删除script标签，实际上执行的是success函数
    options.success && options.success(json);
  };

  //发送请求
  oScript.src = options.url + '?' + callbackName;
  if (options.time) {  //设置超时处理
    oScript.timer = setTimeout(function () {
      window[callbackName] = null;
      oHead.removeChild(oScript);
      options.fail && options.fail({ message: "超时" });
    }, options.time);
  }
};
