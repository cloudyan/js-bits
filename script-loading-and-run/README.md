
# script 加载时序与执行时序

这里对加载时序以及执行时序做一个验证，[详细参看测试示例](//webcoding.github.io/js-bit/script-loading-and-run/)

还可以参看[文档](https://segmentfault.com/a/1190000000515181)

## Script标签的默认行为

- script标签（不带 `defer` 或 `async` 属性）的会阻止文档渲染。相关脚本会立即下载并执行。
- `document.currentScript` 可以获得当前正在运行的脚本(Chrome 29+, FF4+)
- 脚本加载和执行顺序在默认情况下和 script 标签出现的顺序一致

```javascript
<script src="a.js"></script>
<script src="b.js"></script>
<script src="c.js"></script>
```

NOTE：

- 现代浏览器支持资源并行下载，只限于 `<script>` 下载外部资源的时候不会阻塞其他 `<script>` 标签，但会阻塞其他资源的下载。
- 下载JavaScript资源是异步的，但是执行JavaScript代码的时候仍是同步的，同样会造成阻塞。即使有某个网络请求很慢，或其中某个文件过大下载很慢，执行顺序仍同加载顺序。这就是 script 标签的柱塞式执行。
- 通过脚本异步插入的script标签达到的效果和带async属性的script标签是一样的。换句话说，由脚本插入的script标签默认是async的。该script标签并不柱塞，也不同步执行。浏览器只需要在脚本下载完毕后再执行即可——不必柱塞页面渲染等待该脚本的下载和执行。
- 无阻塞设置 `async` 和 `defer` 属性必须在有src属性的 `<script>` 标签中(外链脚本)才有效

```javascript
// async属性
<script src="b.js" async="true"></script>

// 脚本加载器实现原理，效果同上
var script = document.createElement("script");
script.src = "b.js";
document.body.appendChild(script);
```

更多信息，参看[JavaScript 编程指南](http://pij.robinqu.me/) 中的 [Script标签和脚本执行顺序](http://pij.robinqu.me/Browser_Scripting/Document_Loading/ScriptTag.html)

### 无阻塞解决方案

- 使用使用script标签的defer和async属性
- 使用动态创建的script标签来下载执行JavaScript代码
- 使用XHR对象下载JavaScript代码并注入页面

```javascript
function loadScript(url,callback){
  var script = document.createElement("script");
  script.type = "text/javascript";
  //检测客户端类型
  if(script.readyState){//IE
    script.onreadystatechange = function(){
      if(script.readyState==="loaded"||script.readyState==="complete"){
        script.onreadystatechange = null;
        callback();
      }
    }
  }else{//其他浏览器
    script.onload = function(){
      callback();
    }
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
```

```javascript
var xhr = new XMLHttpRequest();
xhr.open("get","file.js",true);
xhr.onreadystatechange = function(){
  if(xhr.readyState===4){
    if(xhr.status>=200&&xhr.status<300||xhr.status==304){
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.text = xhr.responseText;
      document.body.appendChild(script);
    }
  }
}
```
