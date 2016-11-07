var $ = jQuery = function(){
  return new jQuery.fn.init();
};
jQuery.fn = jQuery.prototype = {
  init: function(){
    this.length = 0;
    this.test = function(){
      return this.length;
    };
    return this;
  },
  jquery: '1.3.2',
  length: 1,
  size: function(){
    return this.length;
  }
};

jQuery.fn.init.prototype = jQuery.fn;


console.log($().jquery);
console.log($().test());
console.log($().size());
