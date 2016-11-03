
/**
 * 支持所有浏览器的上传文件操作
 * 借助form和iframe来实现上传(支持跨域)
 * 而上传成功后的数据，会返回到 iframe中，可通过 iframe 的 load 方法获取
 */

//html 代码
//
// <iframe name="demoIframe" style="display:none"></iframe>
// <form target="demoIframe" action="upload.php" method="post" enctype="multipart/form-data">
//   <input class="filename" type="file" name="fileLabel">
//   <input type="submit" value="提交">
// </form>


$('iframe').on('load', function() {
  var responseText = $('iframe')[0].contentDocument.body.textContent;
  var responseData = JSON.parse(responseText) || {};
  if (responseData.isSuccess === true || responseData.code === 200) {
    //success
  } else {
    //error
  }
});



/**
 * html5的上传实现
 * 使用 file 控件以及 XMLHttpRequest 实现
 * 借助FormData轻松实现异步无刷新支持预览图片的多文件上传功能
 * IE9以下不支持，可使用 iframe 方法来实现
**/


function fileUpload(options) {
  var opts = options || {};
  var func = function() {
    // 默认空函数
  };
  this.fileInput = opts.fileInput || null;
  this.url = opts.url || '';
  this.fileList = [];
  //选择文件组的过滤方法
  this.onFilter = opts.onFilter || function(f) {return f;};
  //文件选择后
  this.onSelect = opts.onSelect || func;
  //文件上传进度
  this.onProgress = opts.onProgress || func;
  //文件上传成功时
  this.onSuccess = opts.onSuccess || func;
  //文件上传失败时;
  this.onFailure = opts.onFailure || func;
  //文件全部上传完毕时
  this.onComplete = opts.onComplete || func;
  this.init();
}
fileUpload.prototype = {
  //获取要上传的文件数组（用户选择文件后执行）
  dealFiles: function(e) {
    var files = e.target.files || e.dataTransfer.files;
    this.fileList = this.onFilter(files);
    //增加唯一索引值
    for(var i = 0, file; file = this.fileList[i]; i++){
      file.index = i;
    }
    this.onSelect(this.fileList);
    return this;
  },
  //删除某一个文件
  removeFile: function(fileDelete) {
    var arrFile = [];
    for(var i = 0, file; file = this.fileList[i]; i++){
      if (file != fileDelete) {
        arrFile.push(file);
      }
    }
    this.fileList = arrFile;
    return this;
  },
  //清空文件队列
  removeAll: function() {
    this.fileList = [];
    return this;
  },
  //上传文件
  uploadFile: function() {
    var self = this;
    for(var i = 0, file; file = this.fileList[i]; i++){
      (function(file) {
        var formData = new FormData();
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {
          // 上传中
          xhr.upload.addEventListener("progress", function(e) {
            self.onProgress(file, e.loaded, e.total);
          }, false);
          // 文件上传成功或是失败
          xhr.onreadystatechange = function(e) {
            if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                self.onSuccess(file, xhr.responseText);
                self.removeFile(file);
                if (!self.fileList.length) {
                  //上传全部完毕。执行回调
                  self.onComplete();
                }
              } else {
                self.onFailure(file, xhr.responseText);
              }
            }
          };
          // 开始上传
          formData.append('file', file);
          xhr.open("POST", self.url, true);
          xhr.send(formData);
        }
      })(file);
    }
  },
  init: function() {
    var self = this;
    //文件选择控件选择
    if (self.fileInput) {
      self.fileInput.addEventListener("change", function(e) {
        self.dealFiles(e);
      }, false);
    }
  }
};
