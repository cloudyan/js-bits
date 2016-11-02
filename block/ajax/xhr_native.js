

/**
 * 创建xhr对象在IE5+以下的browser是ActiceXObject的示例，其他浏览器是XHRHttpRequest的实例
**/

// create xhr object cross browser
function createXHR() {
  if(typeof XMLHttpRequest != 'undefined'){
    return new XMLHttpRequest();
  }
  else if(typeof ActiveXObject != 'undefined'){
    if(typeof arguments.callee.activeXString != 'string'){
      // ie browser different vesions
      var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0' , 'MSXML2.XMLHttp'],
        i, len;
      for(i=0, len=versions.length; i<len;i++){
        try{
          new ActiveXObject(versions[i]);
          arguments.callee.activeXString = versions[i];
          break;
        }
        catch(ex){
          // jump
        }
      }
    }
    return new ActiveXObject(arguments.callee.activeXString);

  }
  else{
    throw new Error('No XHR object available.');
  }
}

function xhrRequest(url, callback){
  var xhr = createXHR();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){

      // 200 表示相应成功 304 表示缓存中存在请求的资源
      if((xhr.status >= 200 && xhr.status<300) || xhr.status == 304){

        // 对响应的信息写在回调函数里面
        var str = xhr.status+' '+xhr.responseText;
        callback(str);
      }
      else{
        return 'request is unsucessful '+xhr.status;
      }
    }
  }
  xhr.open('get', url, true);
  xhr.send();
}

function hundler(data){
  console.log(data);
}

window.onload = function(){
  xhrRequest('resource.txt', hundler);
}
