
/**
 * 获取浏览器 url 中的参数
 *
**/

//规则规则，参数都为 key-value 值形式，若值为 url，必须 encodeURIComponent 处理
function getUrlParam(url, key) {
  if (!url) url = location.href;

  var searchReg = /([^&=?]+)=([^&]+)/g;
  var urlReg = /\/+.*\?/;
  var arrayReg = /(.+)\[\]$/;
  var urlParams = {};
  var match, name, value, isArray;

  url = url.replace(/\?/g, '&').replace('&', '?');

  while (match = searchReg.exec(url)) {
    name = match[1];
    value = match[2];
    isArray = name.match(arrayReg);
    //处理参数为url这种情况
    if (urlReg.test(value)) {
      urlParams[name] = url.substr(url.indexOf(value));
      break;
    } else {
      if (isArray) {
        name = isArray[1];
        urlParams[name] = urlParams[name] || [];
        urlParams[name].push(value);
      } else {
        urlParams[name] = value;
      }
    }
  }

  return key ? urlParams[key] : urlParams;
};
